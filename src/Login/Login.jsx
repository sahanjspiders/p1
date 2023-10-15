import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login or validation logic here with formData
  };

  return (
    <div className='Login'>
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>

    
    </div >
    <div className='Loginlast'>
    <Link to="/Signup" >
<h3>Create new Account</h3>
</Link>
    </div>
  
    </div>
  );
};

export default LoginForm;
