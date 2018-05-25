import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./Header";
import OneVineyard from "./OneVineyard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      wines: [],
      search: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}
  handleInput(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      url: "https://lcboapi.com/products",
      params: {
        access_key:
          "MDoxNDEyMWE4Ni01ZGZiLTExZTgtYTVjYi1jN2JlMmFhMTZiNmQ6SzlralhKWGRwNWVXclp0R1VhcEJFNUU3WWRaTFVLTWkxRW5l",
        q: this.state.search
      }
    }).then(res => {
      this.setState({
        wines: res.data.result
      });
      //   console.log(this.state.wines);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <form action="" onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={this.search} type="text" />
        </form>
        <OneVineyard wines={this.state.wines} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
