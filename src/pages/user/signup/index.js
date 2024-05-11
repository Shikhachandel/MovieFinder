import React, { useState, useContext } from 'react';
import UserService from '../../../service/dataService';
import ThemeContext from "../../../context/theme/ThemeContext";
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const { changeTheme } = useContext(ThemeContext);
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userData = { username, firstname, lastname, password };
            await UserService.signup(userData);
            changeTheme()
            navigate("/")
        } catch (error) {
            console.error('Signup failed:', error);
            alert(error.status);
        }
    };

    return (
        <form className='login-form' onSubmit={handleSignup}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <br></br>
            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button type="submit">Submit</button>
            <br></br>
            <h4>Already have an Account? <Link className='form-link' to="/login">Login</Link></h4>
        </form>
    );
}

export default Signup;
