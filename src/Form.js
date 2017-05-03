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
            <div className='row'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className="col-md-10">
                        <input className='form-control' type="text" placeholder="Add User" ref="login" />
                    </div>
                    <div className="col-md-1">
                        <button className='btn btn-primary'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;