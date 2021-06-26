import React, { useEffect } from "react";

import { getRoutines } from "../api";

const GetAllRoutines = (props) => {
  const { routines, setRoutines } = props;

  useEffect(() => {
    getRoutines()
      .then((routines) => {
        setRoutines(routines);
      })
      .catch(console.error);
  });

  return (
    <ul>
      {routines.map((routine, index) => {
        return (
          <li key={index}>
            <h2>Routine {index + 1}</h2>
            <ul>
              <li>{routine.creatorName}</li>
              <li>{routine.name}</li>
              <li>{routine.goal}</li>
              <h3>Activities:</h3>
              <li>Description: {routine.activities[0].description}</li>
              <li>Count: {routine.activities[0].count}</li>
              <li>Duration: {routine.activities[0].duration}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default GetAllRoutines;