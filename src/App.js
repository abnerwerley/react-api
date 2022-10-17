import { Component } from "react";
import api from "./api";

class App extends Component {
  state = {
    obras: [],
  };

  async componentDidMount() {
    const response = await api.get("/obra/todas");

    this.setState({ obras: response.data });
  }

  render() {
    const { obras } = this.state;

    return (
      <div>
        <h1>Lista de obras: </h1>
        {obras.map((obra) => (
          <li key={obra.id}>
            <p>{obra.titulo}</p>
            <p>{obra.autor}</p>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
