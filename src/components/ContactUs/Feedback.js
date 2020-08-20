import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFeedback } from '../../actions/feedbackActions';
import { clearErrors } from '../../actions/errorActions';

const Feedback = ({ addFeedback, error, props }) => {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeSubject = (e) => setSubject(e.target.value);
    const handleChangeDescription = (e) => setDescription(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        const feedback = {
            subject,
            description
        };

        addFeedback(feedback);

    };

    useEffect(() => {
        // Check for register error
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }

    }, [error]);

    // if (isAuthenticated === true) {
 
        return (
    
            <div className="su-bg">
                <div className=" su-container cu-container"><h2>Feedback</h2>
                    {msg ? <span style={{ color: "red" }}>{msg}</span> : null}
                    <form onSubmit={handleOnSubmit}>
                        <div className="singleItem">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" className="name" placeholder="Subject" onChange={handleChangeSubject}
                            />
                        </div>

                        <div className="textArea singleItem">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="" cols="30" rows="5" placeholder="Type your message here .." onChange={handleChangeDescription}
                            ></textarea>
                        </div>

                        <div>
                            <button className="btn btn-success btn-block" type="submit" >Submit</button>
                        </div>
                    </form>
                </div>
            
            </div>
        );
    }
// }

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {addFeedback, clearErrors })(Feedback);





// import React, { Component } from 'react';
// import axios from 'axios';
// import './ContactUs.css';

// class Feedback extends Component {

//     state = {
//         subject: '',
//         description: '',
//         subError: '',
//         descError: '',
//         sent: false
//     }

//     // handle inputs
//     handleSubject = (e) => {
//         this.setState({
//             subject: e.target.value
//         })
//     }
  
//     handleDescription = (e) => {
//         this.setState({
//             description: e.target.value
//         })
//     }
    
//     valid() { 
      
//         if (!this.state.subject) {
//             this.setState(
//                 { subError: "Please fill in the subject field." }
//             )
//         }   
//         if (!this.state.description) {
//             this.setState({ descError: "Description field must not be empty." })
//             return false;
//         }
     
//         return true;
//     }

//     formSubmit = (e) => {
//         let newMsg;
//         e.preventDefault();
//         const isValid = this.valid();
//         if (isValid) {
            
//             newMsg = {
//                 subject: this.state.subject,
//                 description: this.state.description
//             };

//             axios.post('http://localhost:5000/api/messages/feedback', newMsg)
//             .then(res => {
//                 this.setState({
//                     sent: true,
//                 }, this.resetForm())
//             })
//                 .catch(() => {
//                     console.log('message not sent');
//                 })
//         }
//     }
//         // reseting initial data
//         resetForm = () => {
//             this.setState({
//                 subject: '',
//                 description: '',
//                 subError: '',
//                 descError: '',
//                 sent: false
//             })

//             setTimeout(() => {
//                 this.setState({
//                     sent: false
//                 })
//             }, 2000)
//         }

//     render() { 
//         return (
//             <div className="cu-bg">
//             <div className=" cu-container"><h2>Feedback form</h2>
//                 <form onSubmit={this.formSubmit}>
//                     <div className="singleItem">
//                         <label htmlFor="subject">Subject</label>
//                         <input type="text" name="subject" className="subject" placeholder="Subject"
//                             value={this.state.subject}
//                                 onChange={this.handleSubject}
//                             />
//                         <div style={{ fontSize: 12, color: "white" }}>{this.state.subError}</div>
//                     </div>

//                     <div className="textArea singleItem">
//                         <label htmlFor="description">Description</label>
//                         <textarea name="description" id="" cols="30" rows="5" placeholder="Type your message here .."
//                         value={this.state.description}
//                             onChange={this.handleDescription}
//                             ></textarea>
//                              <div style={{ fontSize: 12, color: "white" }}>{this.state.descError}</div>
//                     </div>
                        
//                     <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
//                     <div className="btn">
//                             <button type="submit" >Submit</button>
//                     </div>
//                 </form>

//                 </div>
//                 </div>
//         );
//     }
// }

// export default Feedback;