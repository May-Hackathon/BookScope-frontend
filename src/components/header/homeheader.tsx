import React, { useState } from 'react';

const HomeHeader = () => {
const headerStyle: React.CSSProperties = {
    background: 'rgba(85, 85, 85, 0.8)',
    borderBottom: '5px solid #D9E4DD',
    borderRadius: '0px',
    position: 'sticky',
    top: '0',
    zIndex: '999',
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 20px',
};
const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    borderRadius: '50%',
    width: '130px',
    height: '130px',
    cursor: 'pointer',
    marginRight: '10px',
};
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
};

const menuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100px',
    right: '20px',
    width: '200px',
    height: '300px',
    background: 'rgba(85, 85, 85, 0.8)',
    border: '1px solid #D9E4DD',
    borderRadius: '60px',
    padding: '10px',
    display: isMenuOpen ? 'block' : 'none',
};

const menuItemStyle: React.CSSProperties = {
    marginBottom: '30px',
    marginTop: '30px'
};
return (
    <header style={headerStyle}>
        <button style={buttonStyle} onClick={handleMenuToggle}>
        {/* ボタンの内容、例: "☰" */}
        ☰
        </button>
        {isMenuOpen && (
        <div style={menuStyle}>
            <div style={menuItemStyle}>Signed in as</div>
            <div style={menuItemStyle}>Your profile</div>
            <div style={menuItemStyle}>Your bookshelf</div>
            <div style={menuItemStyle}>Your grades</div>
            <div style={menuItemStyle}>Sign out</div>
        </div>
        )}
    </header>
);
};

export default HomeHeader;