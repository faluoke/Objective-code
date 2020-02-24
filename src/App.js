import React, { Component } from "react";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
const data = require("./data.json");

class App extends Component {
  constructor() {
    super();
    this.state = {
      applicants: data.applicants,
      jobs: data.jobs,
      skills: data.skills
    };
  }

  render() {
    return (
      <table className="job-applicants">
        <TableHead />
        <TableBody
          applicants={this.state.applicants}
          jobs={this.state.jobs}
          skills={this.state.skills}
        />
        <TableFooter
          applicants={this.state.applicants}
          skills={this.state.skills}
        />
      </table>
    );
  }
}

export default App;
