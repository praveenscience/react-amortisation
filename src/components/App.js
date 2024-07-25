import { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Bootstrap/Header";
import ContainerRow from "./Bootstrap/ContainerRow";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header to="/" dark={true} className="AppHeader" Link={NavLink}>
          React App (Prav)
        </Header>
        <div className="Home">
          <ContainerRow fluid={true}>
            <div className="col-12">
              <h1 className="display-4 AppHeading text-center">
                Welcome to Praveen&rsquo;s Modified Create React App!
              </h1>
            </div>
          </ContainerRow>
        </div>
      </div>
    );
  }
}

export default App;
