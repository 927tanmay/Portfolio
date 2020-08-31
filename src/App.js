import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Experience from "./components/Experience";
import Particle from "./components/particle";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoading: true,
  //   };
  // }

  // componentDidMount() {
  //   // this.setState({ isLoading: false });
  //   // this.handle();
  //   console.log("componentDidMount");
  // }
  render() {
    // if (this.state.isLoading) {
    //   // setTimeout(() => this.setState({ isloading: false }), 500);
    //   return <div style={{ color: "white" }}>Loading....</div>;
    // }
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Experience />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
