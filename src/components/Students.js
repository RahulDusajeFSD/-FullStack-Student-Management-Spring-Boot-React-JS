import React, { Component, useEffect } from 'react'
import {Card,Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default class Students extends Component
{

    constructor(props)
    {
        super(props);
        this.state=this.initialState                        // POST #1
        this.submitStudent=this.submitStudent.bind(this);
        this.StudentChange=this.StudentChange.bind(this);
       
    } 

    initialState = {                           // POST #2
      name:'',age:'', id:''
    }

    componentDidMount() {

      const id = + this.props.match.params.id

      if(id)
      {
        this.findStudentById(id)
      }
    }

    findStudentById = (id) => {
      axios.get("http://localhost:8555/getById/"+ id)
      .then(response => {
        if(response.data!=null)
        {
          this.setState({
            id:response.data.id,
            name:response.data.name,
            age:response.data.age

          })
        }
      })

    }
    
    resetBook = () => {
      this.setState(()=> this.initialState)
    }

    onChange = (e) =>                                           // POST #3  To update the constructor
        this.setState({ [e.target.name]: e.target.value });

        updateStudent = (e) => {
          e.preventDefault();

          const st= {
            id:this.state.id,
            name:this.state.name,
            age:this.state.age

          };

          axios.put("http://localhost:8555/updateStudent", st)
        
        }

    submitStudent = event => {
        event.preventDefault();
        

        const { name, age, id } = this.state                              // POST #4
        axios.post("http://localhost:8555/postStudent",{name, age, id})    // POST #5
        .then(response => {
          if(response.data!=null)
          {
            this.setState(this.initialState)
          }
        })
        
      }
  
        
    
  

    
      
      StudentsList = () => {

        return this.props.history.push("/list")     // react router history.push and REDIRECTS to another route...ex."/list" here

      }
    

    StudentChange = event => 
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render()
    {
        return(<Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add Student</Card.Header>
        <Card.Body>

        <Form  onReset={this.resetBook} onSubmit={this.submitStudent} >



  <Form.Group controlId="formStudentName" >
    <Form.Label>Name</Form.Label>
    <Form.Control name="name"  value={this.state.name} onChange={this.onChange} required type="text" placeholder="Name" autoComplete="off"  />
    <Form.Text className="text-muted">
     Input Your Name
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formStudentId"  >
    <Form.Label>Id</Form.Label>
    <Form.Control name="id" value={this.state.id} onChange={this.onChange} type="text" placeholder="text" autoComplete="off"   />
  </Form.Group>

  <Form.Group controlId="formStudentAge"  >
    <Form.Label>Age</Form.Label>
    <Form.Control name="age" value={this.state.age} onChange={this.onChange} type="text" placeholder="text" autoComplete="off"   />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit   
  </Button>  &nbsp;&nbsp;&nbsp;
  <Button variant="primary" type="submit">
    Reset
  </Button>
  <Button variant="primary" type="button" onClick={this.StudentsList.bind()} >
    StudentList
  </Button>



  
</Form>
        </Card.Body>
        </Card> 
         

        );
    }
}

