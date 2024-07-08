import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import Loader from '../../../Components/loader/Loader';
import { saveToken, getToken } from '../../../tokenservice'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Assuming you have functions to handle token storage and retrieval

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            // Store token in local storage
            saveToken(data.token);
            toast.success("Logged In successfully!");

            // Redirect to admin upload page
            navigate('/admin/dashboard');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Check if the user is already authenticated on component mount
    useEffect(() => {
        const token = getToken();
        if (token) {
            navigate('/admin/upload'); // Redirect if token exists
        }
    }, [navigate]);

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? <Loader /> : 'Login'}
                </button>
                <div className="admin">
            <Link to='/'>Back to Home</Link>
            </div>
            </form>
            
        </div>
    );
};

export default Login;
