import React , { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import {RunwayLogo, UserLine,Envelope, Phone } from '../Common/Icons';

function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userId === 'admin' && password === '1111') {
      navigate('/administration');
    } else {
      alert('아이디랑 패스워드가 틀립니다');
    }
  };

    return (
      <div className="Login">
        <div className="LoginForm">
            <ul className="LogoImg">
            <li><img src={process.env.PUBLIC_URL + '/bgwlogo.png'} alt="보험개발원 로고" /></li>
            <li><RunwayLogo /></li>
            </ul>
         
            <ul className="Input">
                <li><input type="text" placeholder="Enter Your ID" value={userId}
              onChange={(e) => setUserId(e.target.value)}></input></li>
                <li><input type="password" placeholder="Enter Password"  value={password}
              onChange={(e) => setPassword(e.target.value) }></input></li>
                <li><button onClick={handleLogin}>Login</button></li>
            </ul>
            </div>
            <div className="Bottomuserinfo">
            <ul>
                <li> <span><UserLine /></span>홍길동</li>
                <li> <span><Envelope/></span>abcdefg@ac.co.kr</li>
                <li> <span><Phone/></span>010-1234-4567</li>
            </ul>
            </div>
      </div>
    );
  }
  
  export default Login;