import React from 'react';

const SignIn: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(backgroundImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div style={containerStyle}></div>
    );
};

export default SignIn;