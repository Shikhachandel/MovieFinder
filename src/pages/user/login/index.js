import React, { useState, useContext } from 'react';
import UserService from '../../../service/dataService';
import ThemeContext from "../../../context/theme/ThemeContext";
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const { changeTheme } = useContext(ThemeContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = { username, password };
            await UserService.login(userData);
            changeTheme()
            navigate("/")
        } catch (error) {
            console.error('Login failed:', error);
            alert(error.status);
        }
    };

    return (
        <form className='login-form' onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button type="submit">Submit</button>
            <br></br>
            <h4>New to Here? <Link className='form-link' to="/signup">Signup</Link></h4>
        </form>
    );
}

export default Login;
