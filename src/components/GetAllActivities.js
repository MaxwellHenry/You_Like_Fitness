import React, { useEffect } from "react";

import { getActivities } from "../api";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const GetAllActivities = (props) => {
  const { activities, setActivities } = props;

  useEffect(() => {
    getActivities()
      .then((activities) => {
        setActivities(activities);
      })
      .catch(console.error);
  });

  return (
<div>
      {activities.map((activity, index) => {
        return (
          <div key={index}>
            <h2>Activity {index + 1}</h2>
            <Card style={{
                border: "2px solid black",
                margin: '3px',
            }}>
              <CardBody>
                <CardTitle tag="h5">{activity.name}</CardTitle>
                <CardText>
                  <h6>Activity Description:</h6>
                  <ul>
              <li>{activity.description}</li>
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

export default GetAllActivities;
