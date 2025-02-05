import { React, useState } from 'react';
import '../styles/containerApp.css';

const ContainerApp = () => {
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const length = 12;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(newPassword);
    }

    return (
        <div className="main">
            <div className="passwordContainer">
                <h1>Password Generator</h1>
                <div className="passwordBox">
                    <input type="text" placeholder="Your password is..." value={password} readOnly />
                    <button onClick={generatePassword}>Generate</button>
                    <button onClick={() => setPassword('')}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default ContainerApp;