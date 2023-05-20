import React, { useState } from 'react';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const handleSignUp = () => {
        // ユーザーが入力した情報をバックエンドに送信する処理を追加
        console.log('Name:', name);
        console.log('Password:', password);
        console.log('Password (again):', passwordAgain);
        // ここにバックエンドとの通信や処理を追加する
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
    const boxStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '600px',
        height: '650px',
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
    }
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
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={textStyle} />
                <div style={fontStyle}>Password</div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={textStyle} />
                <div style={fontStyle}>Password (again)</div>
                <input type="password" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} style={textStyle} />
                <button onClick={handleSignUp} style={buttonStyle}>Sign up</button>
            </div>
        </div>
    );
};

export default SignUp;