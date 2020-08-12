import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        {
          student_Name: "rajiv",
          rollNumber: "KV2017-5A2",
          marks: { Maths: 18, English: 21, Science: 45 },
          status: "status",
        },
        {
          student_Name: "abhishek",
          rollNumber: "KV2017-5A1",
          marks: { Maths: 43, English: 30, Science: 37 },
          status: "status",
        },

        {
          student_Name: "zoya",
          rollNumber: "KV2017-5A3",

          marks: { Maths: 42, English: 31, Science: 50 },
          status: "status",
        },
      ],
    };
  }

  renderTableData() {
    let students = this.state.students;
    console.log(students);

    students.sort((a, b) => {
      console.log(a);
      console.log(b);
      return a.student_Name > b.student_Name ? 1 : -1;
    });
    // console.log(students);
    return students.map((student, index) => {
      const { id, student_Name, marks, rollNumber } = student;

      let coloring;
      if (marks.Science && marks.English && marks.Maths <= 20) {
        coloring = "red";
      } else {
        coloring = "";
      }

      let status;
      if (coloring) {
        status = "Faild";
      } else if (
        !coloring &&
        marks.Science + marks.English + marks.Maths > 110
      ) {
        status = "Topper";
      } else {
        status = "Pass";
      }

      return (
        <tr key={id}>
          {/* <td>{id}</td> */}
          <td className={`${coloring} ${status} student__Name`}>
            {" "}
            {student_Name}
          </td>
          <td className={`${coloring} ${status} `}>{rollNumber}</td>
          <td className={`${coloring} ${status} `}>
            {marks.Maths + marks.English + marks.Science}
          </td>
          <td className={`${coloring} ${status} `}> {status} </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return (
        <th className="Header" key={index}>
          {key.toUpperCase()}
        </th>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Student Result Board</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
