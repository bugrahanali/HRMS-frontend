import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

const colors = ["olive"];
export default function JobAdvert() {
  const [jobadverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  });
  return (
    <div>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> İş pozisyonu </Table.HeaderCell>
              <Table.HeaderCell>İş sahibi</Table.HeaderCell>
              <Table.HeaderCell>Şehir </Table.HeaderCell>
              <Table.HeaderCell>İlan </Table.HeaderCell>
              <Table.HeaderCell>Min ücret </Table.HeaderCell>
              <Table.HeaderCell>Max ücret </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobadverts.map((jobadverts) => (
              <Table.Row key={jobadverts.id}>
                <Table.Cell>{jobadverts.jobPosition.position}</Table.Cell>
                <Table.Cell>{jobadverts.employer.companyName}</Table.Cell>
                <Table.Cell>{jobadverts.city.cityName}</Table.Cell>
                <Table.Cell>{jobadverts.job_advert_name}</Table.Cell>
                <Table.Cell>{jobadverts.salaryMin}</Table.Cell>
                <Table.Cell>{jobadverts.salaryMax}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
