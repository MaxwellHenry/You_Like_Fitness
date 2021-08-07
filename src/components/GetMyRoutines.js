import React, { useEffect } from "react";

import { getRoutinesByUsername } from "../api";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const GetMyRoutines = (props) => {
  const { routines, setRoutines, data } = props;

  console.log(data.user.username)

  useEffect(() => {
    getRoutinesByUsername(data.user.username)
      .then((routines) => {
        setRoutines(routines);
      })
      .catch(console.error);
  }, []);

    return (
        
        <div>
          {routines.map((routine, index) => {
            return (
              <div key={index}>
                  <h2>Routine {index + 1}</h2>
                <Card style={{
                    border: "2px solid black",
                    margin: '3px',
                }}>
                  <CardBody>
                    <CardTitle tag="h5">{routine.creatorName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {routine.name} / {routine.goal}
                    </CardSubtitle>
                    <CardText>
                      <h3>Activities:</h3>
                      <ul>
                        <li>Description: {routine.activities[0].description}</li>
                        <li>Count: {routine.activities[0].count}</li>
                        <li>Duration: {routine.activities[0].duration}</li>
                      </ul>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      );

};

export default GetMyRoutines;
