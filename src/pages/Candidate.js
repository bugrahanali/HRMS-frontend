import React, { useEffect,useState } from 'react'
import CandidateService from '../services/CandidateService'
import { Table } from "semantic-ui-react";

const colors = ["olive"];
export default function Candidate() {
    const [candidates, setcandidates] = useState([])
    
    useEffect(()=>{
        let candidateService =new CandidateService();
        candidateService.getCandidates().then((result)=> setcandidates(result.data.data))
    } ,[])
    return (
        <div>
            {colors.map((color)=>(
               <Table color={color} key={color}>
               <Table.Header>
                 <Table.Row>
                   <Table.HeaderCell> Mail </Table.HeaderCell>
                   <Table.HeaderCell>İsim</Table.HeaderCell>
                   <Table.HeaderCell>Soy isim </Table.HeaderCell>
                   <Table.HeaderCell>identityNumber  </Table.HeaderCell>
                 </Table.Row>
               </Table.Header>
     
               <Table.Body>
                 {candidates.map((candidates) => (
                   <Table.Row key={candidates.id}>
                     <Table.Cell>{candidates.email}</Table.Cell>
                     <Table.Cell>{candidates.firstName}</Table.Cell>
                     <Table.Cell>{candidates.lastName}</Table.Cell>
                     <Table.Cell>{candidates.identityNumber}</Table.Cell>
                     
                   </Table.Row>
                 ))}
               </Table.Body>
             </Table> 
            ))}
        </div>
    )
}
