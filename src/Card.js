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
            <tr>
                <td>
                    <div className='row'>
                        <div className='col-md-2'>
                            <img src={this.state.avatar_url} alt="" width="120" />
                        </div>
                        <div className="col-md-10">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{this.state.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{this.state.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Repos</td>
                                        <td>{this.state.public_repos}</td>
                                    </tr>
                                    <tr>
                                        <td>Url</td>
                                        <td><a href={this.state.url}>{this.state.url}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                    </div>
                </td>
            </tr>
        )
    }
}

export default Card;