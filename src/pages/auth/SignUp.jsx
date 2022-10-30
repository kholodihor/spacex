import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/auth_bg.webp';
import './SignUp.scss';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/rideshare');
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="SignUp Page">
      <div className="SignUp__image">
        <img src={background} alt="space" />
      </div>
      <div className="SignUp__inner">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <h3>{error}</h3>
          <Input
            placeholder={'enter random email'}
            label={'email'}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={'enter random password'}
            label={'password'}
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            title={'signup'}
            style={{
              paddingLeft: '2rem',
              paddingRight: '2rem',
              width: '30%',
              margin: '1rem auto 0.5rem',
            }}
          />
        </form>
        <span>Already have an account?</span>
        <span className="link">
          <Link to="/auth/login">login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
