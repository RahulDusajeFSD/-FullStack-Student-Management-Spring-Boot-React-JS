import React from 'react'
import {Container, Row, Jumbotron, Col} from 'react-bootstrap'

class Welcome extends React.Component
{
    render()
    {
        return (
            <Jumbotron>
            <h1>Welcome To Student App</h1>
            <p>
              Baic WebApp To Post and Get Student Records.. Spring Boot + React
              </p>
           
          </Jumbotron>
        )
    }
}

export default Welcome;