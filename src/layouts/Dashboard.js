import React from "react";
import Filter from "./Filter";
import JobAdvert from "../pages/JobAdvert";
import { Grid } from "semantic-ui-react";
import Employer from "../pages/Employer";
import Candidate from "../pages/Candidate";
export default function Dashboard() {
  return (
    <div><Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Filter />
        </Grid.Column>
        <Grid.Column width={13}>
          <JobAdvert/>
          <Employer/>
          <Candidate/>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}
