import React, { useState } from 'react';

const Signup = () => {
  const [user, setuser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
  });
  const { fname, lname, email, password, password2 } = user;
  const onClick = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setuser({ fname: '', lname: '', email: '', password: '', password2: '' });
  };

  return (
    <form className='signup-form' onSubmit={onSubmit}>
      <h2>Create your account</h2>
      <h4>
        Get in touch with the best medical <br /> specialists in the national
        territory
      </h4>
      <input
        type='text'
        placeholder='First Name'
        name='fname'
        vale={fname}
        onClick={onClick}
        required
      />
      <input
        type='text'
        placeholder='Last Name'
        name='lname'
        vale={lname}
        onClick={onClick}
        required
      />
      <input
        type='email'
        placeholder='Email Address'
        name='email'
        vale={email}
        onClick={onClick}
        required
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        vale={password}
        onClick={onClick}
        required
      />
      <input
        type='password'
        placeholder='Confirm Password'
        name='password2'
        vale={password2}
        onClick={onClick}
        required
      />
      <input type='submit' value='SIGN UP' />
    </form>
  );
};

export default Signup;
