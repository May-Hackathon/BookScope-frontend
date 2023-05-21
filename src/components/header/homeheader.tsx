import React, {useEffect, useState,MouseEvent} from 'react';
import {mockUser} from "@/mockdata/report";

const HomeHeader = () => {
const headerStyle: React.CSSProperties = {
    background: 'rgba(85, 85, 85, 0.8)',
    borderRadius: '0px',
    position: 'sticky',
    top: '0',
    zIndex: '999',
    height: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 20px',
    marginBottom: "20px",
};
const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    borderRadius: '50%',
    width: '130px',
    height: '130px',
    cursor: 'pointer',
    marginRight: '10px',
    color: "white"
};
const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(()=>{
        const onClickHandler = () => {
            setIsMenuOpen(false);
        }
        window.addEventListener("click",onClickHandler);
        return ()=>{
            window.removeEventListener("click",onClickHandler);
        }
    },[]);
const handleMenuToggle = (e:MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
};

const menuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '60px',
    right: '20px',
    width: '200px',
    background: 'rgba(85, 85, 85, 0.8)',
    border: '1px solid #D9E4DD',
    borderRadius: '20px',
    padding: '10px',
    display: isMenuOpen ? 'block' : 'none',
};

const menuItemStyle: React.CSSProperties = {
    padding: '10px 0',
    color: "white"
};
return (
    <header style={headerStyle}>
        <button style={buttonStyle} onClick={handleMenuToggle}>
        {/* ボタンの内容、例: "☰" */}
        ☰
        </button>
        {isMenuOpen && (
        <div style={menuStyle} onClick={(e)=>e.stopPropagation()}>
            <div style={menuItemStyle}>Signed in as {mockUser.name}</div>
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