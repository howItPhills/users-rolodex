import { Component } from 'react'
import './App.css';
import { CardList } from './components/CardList/CardList.component';
import { SearchBox } from './components/SearchBox/SearchBox.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        users: users
      }))
  }

  onUserSearch = e => {
    this.setState({ searchValue: e.target.value });
  }


  render() {

    const { users, searchValue } = this.state;

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Users-Rolodex</h1>
        <SearchBox placeholder='search user' changeHandler={this.onUserSearch} />
        <CardList users={filteredUsers} />
      </div>
    )
  }
}

export default App;