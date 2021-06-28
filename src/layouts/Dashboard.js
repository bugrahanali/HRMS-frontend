import React from "react";
import Filter from "./Filter";
import JobAdvert from "../pages/JobAdvert";
import { Grid } from "semantic-ui-react";
import Employer from "../pages/Employer";
import Candidate from "../pages/Candidate";
import { Route } from "react-router";
import Begining from "../pages/Begining";
import AdvertDetail from "../pages/AdvertDetail";
export default function Dashboard() {
  return (
    <div><Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Filter />
        </Grid.Column>
        <Grid.Column width={13}>
          
          <Route exact path="/" component={Begining} />
          <Route exact path="/jobAdvert" component={JobAdvert} />
          <Route path="/jobAdvert/:id" component={AdvertDetail} />

          
          
          {/* <JobAdvert/>
          <Employer/>
          <Candidate/> */}
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}
