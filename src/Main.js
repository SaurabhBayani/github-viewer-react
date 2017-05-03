import React, { Component } from 'react';
import Card from './Card';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logins: []
    }
  }

  addUser = (userName) => {
    this.setState({logins: this.state.logins.concat(userName)});
  }

  render() {
    var cards = this.state.logins.map(function (login, i) {
      return <Card user={login} key={i} />
    });

    return (
      <div>
        <Form addUser={this.addUser}/>
        <hr />
        {cards}
      </div>
    );
  }
}

export default App;
