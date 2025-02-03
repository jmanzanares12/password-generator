import React from 'react';

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
        <div>        
            <h1>Password Generator</h1>
            <div className="passwordContainer">
                <div className="passwordBox">
                    <input type="text" placeholder="Password" value={password} readOnly />
                    <button onClick={generatePassword}>Generate</button>
                    <button>Generate</button>
                </div>
            </div>
        </div>
    )
}

export default ContainerApp;