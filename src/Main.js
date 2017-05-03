import React, { Component } from 'react';
import Card from './Card';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logins: ['angular', 'reactjs', 'extjs', 'jQuery']
    }
  }

  addUser = (userName) => {
    this.setState({ logins: this.state.logins.concat(userName) });
  }

  render() {
    var cards = this.state.logins.map(function (login, i) {
      return <Card user={login} key={i} />
    });

    return (
      <div className='container'>
        <br />
        <Form addUser={this.addUser} />
        <br />
        <table className="table table-bordered table-striped">
          <tbody>
            {cards}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
