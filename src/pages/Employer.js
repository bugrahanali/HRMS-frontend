import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import EmployerService from "../services/EmployerService";


const colors = ["olive"];
export default function Employer() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  });

  return (
    <div>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> Mail Adresi </Table.HeaderCell>
              <Table.HeaderCell>Şirket ismi </Table.HeaderCell>
              <Table.HeaderCell>webAdress </Table.HeaderCell>
              <Table.HeaderCell>TelefonNumber </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((employers)=>(
              <Table.Row key={employers.id}>
              <Table.Cell>{employers.email}</Table.Cell>
              <Table.Cell>{employers.companyName}</Table.Cell>
              <Table.Cell>{employers.webAdress}</Table.Cell>
              <Table.Cell>{employers.telefonNumber}</Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
