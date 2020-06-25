import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Card, Table, ButtonGroup } from 'react-bootstrap'
export default class StudentsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    deleteStudent = (id) => {                                              // DELETE BY ID
        axios.delete("http://localhost:8555/deleteById/"+ id)
    .then(response => {
        if(response.data!= null)
        {
            alert("deleted successfully")
            this.setState({
                students: this.state.students.filter(students => students.id!= id) //REFRESHING and showing only students whose id is not equal to to id passed
            })                                              // jo line 15 me id pass kri h, uske ilava saare students dikhao jiski id line 15 wali nhi h
        }
    })
    }

  



    componentDidMount() {
        axios.get("http://localhost:8555/getStudent")
            .then(response => response.data)
            .then((data) => {
                this.setState({ students: data })
            })
    }
    render() {
        return (<Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Students List</Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.length === 0 ?




                            <tr align="center">
                                <td colSpan="2"> {this.state.students.length} Students Available</td>
                            </tr> :




                            this.state.students.map((students) => (
                                <tr key={students.id}>
                                    <td>{students.id}</td>
                                    <td>{students.name}</td>
                                    <td>{students.age}</td>
                                    <td>
                                        <ButtonGroup>
                                       <button> <Link to={"edit/"+students.id} className="btn btn-sm btn-outline primary" >Edit</Link> </button>
                                            
                                            <button onClick={this.deleteStudent.bind(this, students.id)}> Delete</button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))

                        }

                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        )
    }
}
