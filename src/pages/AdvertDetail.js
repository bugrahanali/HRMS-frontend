import React, { useState, useEffect } from "react";
import JobAdvertService from "../services/jobAdvertService";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
export default function AdvertDetail() {
  let { id } = useParams();

  const [jobadvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .findById(id)
      .then((result) => setJobAdvert(result.data.data));
  });

  return (
    <div>
      detaylar:{id}
      <Card.Group >
        <Card fluid > 
          <Card.Content>
            <Image
              floated="right"
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{jobadvert.job_advert_name}</Card.Header>
            <Card.Meta>{jobadvert.city.cityName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        
      </Card.Group>
    </div>
  );
}
