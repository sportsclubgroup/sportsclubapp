import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Redirect } from 'react-router-dom';
import './Signup.css'

const Signup = ({ isAuthenticated, error, register, clearErrors }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);


    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to signup
        register(newUser);

    };

    useEffect(() => {
        // Check for register error
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }
        
    }, [error]);
    

    return (
        
        <div className="su-bg">
            <div className=" su-container cu-container"><h2>Signup</h2>
                {msg ? <span style={{color:"red"}}>{msg}</span>: null}
                <form onSubmit={handleOnSubmit}>
                <div className="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Name" onChange={handleChangeName}
                        />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="name" placeholder="Email" onChange={handleChangeEmail}
                        />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" placeholder="Enter password" name="password" onChange={handleChangePassword} />
                    </div>

                    <div>
                        <button className="btn btn-success btn-block" type="submit" >Submit</button>
                    </div>
                </form>
            </div>
            {isAuthenticated?(<Redirect to="/login"/>):(<Redirect to='/Signup'/>)}
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(Signup);