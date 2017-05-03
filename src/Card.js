import React from 'react';
import $ from 'jquery';

class Card extends React.Component {
    constructor(props) {
        super(props);
        var me = this;
        this.state = {};
        $.get('https://api.github.com/users/' + me.props.user, function (data) {
            me.setState(data);
        });
    }

    render() {
        return (
            <div>
                <img src={this.state.avatar_url} alt="" width="80" />
                <h3>Name : {this.state.name}</h3>
                <hr />
            </div>
        )
    }
}

export default Card;