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
    const boxStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '600px',
        height: '500px',
        left: '420px',
        top: '300px',
        background: 'rgba(205, 201, 195, 0.8)',
        border: '5px solid #555555',
        borderRadius: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // 等間隔に配置するために変更
        alignItems: 'center',
        padding: '30px', // 要素間の余白を調整するために追加
    };
    const textStyle: React.CSSProperties = {
        background: '#D9E4DD',
        borderRadius: '20px',
        width: '400px',
        height: '100px',
        marginBottom: '70px', // より狭い間隔にするために追加
    }
    const fontStyle: React.CSSProperties = {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '39px',
        color: '#000',
        width: '209.17px',
        height: '51.77px',
        marginTop: '20px', // name の上に余白を作るために追加
    }
    const buttonStyle: React.CSSProperties = {
        width: '235px',
        height: '75px',
        background: '#8FBB9F',
        borderRadius: '20px'
    }
    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <div style={fontStyle}>Name</div>
                <input type="text" style={textStyle} />
                <div style={fontStyle}>Password</div>
                <input type="text" style={textStyle} />
                <button style={buttonStyle}>Sign in</button>
            </div>
        </div>
    );
};

export default SignIn;