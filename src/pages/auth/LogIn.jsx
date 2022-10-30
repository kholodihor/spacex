import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import background from '../../assets/auth_bg.webp';
import { useUserAuth } from '../../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import './LogIn.scss';

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/rideshare');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Login Page">
      <div className="Login__image">
        <img src={background} alt="space" />
      </div>
      <div className="Login__inner">
      <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <h3>{error}</h3>
          <Input
            placeholder={'enter your email'}
            label={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={'enter your password'}
            label={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <Button
              title={'login'}
              style={{
                paddingLeft: '3rem',
                paddingRight: '3rem',
                width: '30%',
                margin: '1rem auto 0.5rem',
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
