import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Msg = props => (
    <tr>
        <td>{props.message.date}</td>
        <td>{props.message.subject}</td>
        <td>{props.message.description}</td>
        {/* <td>
            <Link to={"/edit/"+props.message._id}>Edit</Link>
        </td> */}
    </tr>
)

class Displayfeedback extends Component {
    
    constructor(props) {
        super(props);
        this.state = {messages: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/messages/display')
            .then(response => {
                this.setState({ messages: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    messageList() {
        return this.state.messages.map(function(currentMsg, i){
            return <Msg message={currentMsg} key={i} />;
        })
    }

    render() { 
        return (
            <div>
                <h3 style={{ marginTop: 30 }}>Feedback's List</h3>
                <table className="table table-striped" style={{ marginTop: 30 }} >
                    <thead>
                        <tr>
                            <th style={{width:'20%'}}>Date</th>
                            <th style={{width:'30%'}}>Subject</th>
                            <th style={{width:'50%'}}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.messageList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Displayfeedback;