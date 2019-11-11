import React from 'react';
import './App.css';
import Card from "./StudentCard";

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      students : [],
      filteredList: [],
      name: ""
    };
  this.getData = this.getData.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.filterData = this.filterData.bind(this);
  }

  componentDidMount () {
    this.getData();
  }
  
  getData () {  
    fetch("https://www.hatchways.io/api/assessment/students")
        .then(response => response.json())
        .then(students => {
          this.setState({
            students: [...students.students]
        });
    });
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  filterData(event) {
    let partial = this.state.name;
    event.preventDefault();
    fetch("https://www.hatchways.io/api/assessment/students")
        .then(response => response.json())
        .then(students => {

          let filtered = students.students.filter(x => {
            return x.firstName.toLowerCase().includes(partial.toLowerCase());
          });
          this.setState({
            students: []
          })
          this.setState({
            filteredList: [...filtered]
        });
    });
  }

  render () {
    let students = this.state.students;
    let filteredList = this.state.filteredList
    console.log(this.state.filteredList);
    // console.log(this.state.name);
    if (filteredList.length === 0) {
      return (  
        <div className="container">
          <input 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.value} 
          />
          <button type="submit" onClick={this.filterData}>Submit</button>
          <div className="student-container">
            {students.map(student => <Card key={student.id} firstName={student.firstName} lastName={student.lastName} company={student.company} email={student.email} pic={student.pic} grades={student.grades} skill={student.skill}/>)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <input 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.value} 
          />
          <button type="submit" onClick={this.filterData}>Submit</button>
          <div className="student-container">
            {filteredList.map(student => <Card key={student.id} firstName={student.firstName} lastName={student.lastName} company={student.company} email={student.email} pic={student.pic} grades={student.grades} skill={student.skill}/>)}
          </div>
        </div>
      );
    }
  }
}