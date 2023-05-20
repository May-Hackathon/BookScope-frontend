import React from 'react';

const SignUp: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(backgroundImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const boxStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '600px',
        height: '600px',
        left: '420px',
        top: '300px',
        background: 'rgba(205, 201, 195, 0.8)',
        border: '5px solid #555555',
        borderRadius: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <div>Name</div>
                <input type="text" />
                <div>Password</div>
                <input type="text" />
                <div>Password(again)</div>
                <input type="text" />
                <button>Sign up</button>
            </div>
        </div>
    );
};

export default SignUp;