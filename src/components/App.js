import { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Bootstrap/Header";
import ContainerRow from "./Bootstrap/ContainerRow";
import Expenditure from "./Expenditure";

class App extends Component {
  state = {
    Expenditure: {}
  };
  render() {
    return (
      <div className="App">
        <Header to="/" dark={true} className="AppHeader" Link={NavLink}>
          React Amortisation Schedule
        </Header>
        <div className="Home">
          <ContainerRow fluid={true}>
            <div className="col-12">
              <h1 className="display-4 AppHeading text-center">
                React Amortisation Schedule helps you to plan your budget
                locally! Follow the Steps Below...
              </h1>
            </div>
          </ContainerRow>
          <ContainerRow fluid={true} className="mt-3">
            <div className="col-12 col-md-6">
              <Expenditure />
            </div>
            <div className="col-12 col-md-6"></div>
          </ContainerRow>
        </div>
      </div>
    );
  }
}

export default App;
