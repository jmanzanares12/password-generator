import React from 'react';

const ContainerApp = () => {
    return (
        <div>        
            <h1>Password Generator</h1>
            <div className="passwordContainer">
                <div className="passwordBox">
                    <input type="text" placeholder="Password" />
                    <button>Generate</button>
                </div>
            </div>
        </div>
    )
}

export default ContainerApp;