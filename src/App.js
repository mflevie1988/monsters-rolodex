import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "Monsters Rolodex",
      title: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    /**
     * ====Destructuring assignment===
     * The following assignment is equivalent to
     * const monsters = this.state.monsters;
     * const searchField = this.state.searchField;
     *
     * */
    const { monsters, searchField, title } = this.state;
    // const filteredMonsters = monsters.filter((monster) =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) =>
            this.setState({
              searchField: e.target.value,
              title: e.target.value
            })
          }
        />
        <CardList monsters={monsters}></CardList>
      </div>
    );
  }
}

export default App;
