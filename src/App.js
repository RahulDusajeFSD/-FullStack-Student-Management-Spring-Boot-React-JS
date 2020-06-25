import React from 'react';
import { Container, Row, Jumbotron, Col } from 'react-bootstrap'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './components/NavBar'
import Welcome from './components/Welcome'
import Footer from './components/Footer';
import Students from './components/Students';
import StudentsList from './components/StudentsList'
function App() {

  const marginTop = {
    marginTop: "20px"
  }
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop} >
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/add" exact component={Students} />
              <Route path="/edit/:id" exact component={Students} />
          
              <Route path="/list" exact component={StudentsList} />

            </Switch>

          </Col>
        </Row>


      </Container>
      <Footer />
    </Router>
  );
}

export default App;
