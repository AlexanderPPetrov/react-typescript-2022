import React from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Counter from "./components/Counter";
import { Button, Card } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/football-green-field-with-cloud-blue-sky-background-landscape-outdoor-picture-id1146598796?b=1&k=20&m=1146598796&s=170667a&w=0&h=51DB8fAPPt3r9CWBtHliku1j_ozsvVX0S0huEPyRoPI="
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className={"text-white"}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/football-green-field-with-cloud-blue-sky-background-landscape-outdoor-picture-id1146598796?b=1&k=20&m=1146598796&s=170667a&w=0&h=51DB8fAPPt3r9CWBtHliku1j_ozsvVX0S0huEPyRoPI="
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className={"text-white"}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Counter />
      <FirstComponent title={"Hello Typescript"} turnedOn={true} />
    </div>
  );
};

export default App;
