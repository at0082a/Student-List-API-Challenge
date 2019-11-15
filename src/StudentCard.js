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
      tags: [],
      showGrades: false,
      tag: ''
    };
    this.showStudentGrades = this.showStudentGrades.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTag = this.addTag.bind(this);
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
    // return ( this.props.grades.map((grade) => 
    //   <li> {grade} </li>
    //   )
    // )
  }


  handleChange(event) {
    this.setState({tag: event.target.value});
    console.log(this.state.tag);
  }

  addTag(event) {
    let tag = this.state.tag;
    this.setState({tags: this.state.tags.concat(tag)});
    event.preventDefault(); 
    console.log('these are the tagssss', this.state.tags);
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
          </div>
            { this.state.showGrades ?
            <div className="test-scores">
              {this.state.grades.map((grade, i) => <ul key={i} > Test {i + 1} : {grade} </ul>)}
              <form onSubmit={ this.addTag }>
                  { this.state.tags.length > 0 ?
                  <div className="row">
                    {this.state.tags.map((tag, i) => <p key={i}> { tag } </p> )}
                  </div>
                    :null
                  }
                  <input type='text' placeholder='Add Tags' value={this.state.tag} onChange={this.handleChange}></input>
              </form>
            </div>
              : null
            }  
        </div>
      </div>
    );
  }
}