import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

const Login = ({ auth, error, login, clearErrors }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        const user = {
            email,
            password
        };

        // Attempt to login
        login(user);

    };

    useEffect(() => {
        // Check for register error
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }

    }, [error]);


    return (

        <div className="su-bg">
            <div className=" su-container cu-container"><h2>Login</h2>
            {msg ? <span style={{color:"red"}}>{msg}</span>: null}
                <form onSubmit={handleOnSubmit}>
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
                <div>Don't you have account? <a href="/Signup" style={{ color: '#FFF', fontWeight: '500' }}> Sign up</a></div>
            </div>
            
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {login, clearErrors })(Login);
