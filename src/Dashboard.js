import React from 'react';
import './App.css';
import Card from "./StudentCard";

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      students : [],
      value: 0,
      filteredList: []
    };
  // this.handleClick = this.handleClick.bind(this);
  this.getData = this.getData.bind(this);
  }

  componentDidMount () {
    this.getData();
  }
  
  getData () {  
    fetch()
        .then(response => response.json())
        .then(students => {
          // console.log(students);
          this.setState({
            students: [...students.students]
        });
    });
  }

  filterData () {

  }

  render () {
    let students = this.state.students;
    console.log(students);
    return (
      <div className='col'>
        {students.map(student => <Card key={student.id} firstName={student.firstName} lastName={student.lastName} company={student.company} email={student.email} pic={student.pic} grades={student.grades} skill={student.skill}/>)}
      </div>
    );
  }
}