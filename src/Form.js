import React from 'react'
import ReactDOM from 'react-dom';

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        var loginInput = ReactDOM.findDOMNode(this.refs.login);
        this.props.addUser(loginInput.value);
        loginInput.value = "";
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add User" ref="login" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Form;