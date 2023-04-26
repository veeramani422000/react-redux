import "./App.css";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import { Container, Col, Row } from "react-bootstrap";
import TasksList from "./components/TasksList";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
          <TasksList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
