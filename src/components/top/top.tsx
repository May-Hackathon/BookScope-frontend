import React from 'react';

const TopPage: React.FC = () => {
    const buttonStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '480px',
        height: '135px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#8FBB9F',
        opacity: '0.5',
        border: '5px solid #555',
        borderRadius: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(backgroundImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const buttonTextStyle: React.CSSProperties = {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '40px',
        lineHeight: '48px',
        color: '#000',
        borderRadius: '5px',
        zIndex: '999'
    };
    return (
        <div style={containerStyle}>
            <button style={buttonStyle}>
                <p style={buttonTextStyle}>BookScopeに登録する</p>
            </button>
        </div>
    );
};

export default TopPage;