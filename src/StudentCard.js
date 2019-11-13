import React from 'react';
import './App.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      average: 0,
      skill: '',
      image: '',
      grades: [],
      showGrades: false
    };
    this.showStudentGrades = this.showStudentGrades.bind(this);
  }

  componentDidMount() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const email = this.props.email;
    const company = this.props.company;
    const grades = this.props.grades;
    const skill = this.props.skill;
    const image = this.props.pic;
    this.setState({firstName, lastName, email, company, image, grades, skill});
  }

  showStudentGrades() {
    this.setState({showGrades: !this.state.showGrades});
    console.log(this.state.showGrades);
    return ( this.props.grades.map((grade) => 
      <li> {grade} </li>
      )
    )
  }
 
  render () {
    let { firstName, lastName, email, company, skill } = this.state;
    let newGrades = this.state.grades.map(e => parseInt(e));
    let sum = newGrades.reduce((a, b) => a + b, 0);
    let average = sum / newGrades.length;
    console.log(this.state.grades);

    return (
        <div>
        <div className='card'>
          <img className="student-pic"
          src={this.state.image}
          alt="new"
          />
          <h1> {firstName} {lastName} </h1>
          <button className="expand-button" onClick={this.showStudentGrades}> + </button>
          <div className= "student-info">
            <p> Email: {email} </p>
            <p> Skill: {skill} </p>
            <p> Company: {company} </p>
            <p> Average: {average} </p>
          { this.state.showGrades ?
          <div className="grades">
              {this.state.grades.map((grade, i) => <ul key={i} > {i} : {grade} </ul>)}
          </div>
          : null
          }
          </div>
        </div>
      </div>
    );
  }
}