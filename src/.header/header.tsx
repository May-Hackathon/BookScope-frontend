import React from 'react';

const Header: React.FC = () => {
const headerStyle: React.CSSProperties = {
    background: 'rgba(85, 85, 85, 0.8)',
    borderBottom: '5px solid #D9E4DD',
    borderRadius: '0px',
    position: 'sticky',
    top: '0',
    zIndex: '999',
    height: '100px',
    width: '100%'
};
const signInStyle: React.CSSProperties = {
    position: 'absolute',
    width: '173px',
    height: '39.3px',
    left: '912px',
    top: '45.35px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '39px',
    color: '#000'
}
const signUpStyle: React.CSSProperties = {
    position: 'absolute',
    width: '203px',
    height: '39.3px',
    left: '1136px',
    top: '45.35px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '39px',
    color: '#000',
}

return (
    <header style={headerStyle}>
        <span style={signInStyle}>サインイン</span>
        <span style={signUpStyle}>サインアップ</span>
    </header>
);
};

export default Header;