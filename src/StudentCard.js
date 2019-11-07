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
      grades: []
    };
  }

  componentDidMount() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const email = this.props.email;
    const company = this.props.company;
    const grades = this.props.grades;
    const skill = this.props.skill
    const image = this.props.pic;
    this.setState({firstName, lastName, email, company, image, grades, skill});
    // convertToNumber(grades);
  }
 
  render () {
    let { firstName, lastName, email, company, skill } = this.state;
    let newGrades = this.state.grades.map(e => parseInt(e))
    let sum = newGrades.reduce((a, b) => a + b, 0);
    let average = sum / newGrades.length
    console.log(average);

    return (
      <div className= "body">
        <div className='card'>
          <img className="student-pic"
          src={this.state.image}
          alt="new"
          />
          <div className= "student-info">
            <h1> {firstName} {lastName} </h1>
            <p> Email: {email} </p>
            <p> Skill: {skill} </p>
            <p> Company: {company} </p>
            <p> Average: {average} </p>
          </div>
        </div>
      </div>
    );
  }
}