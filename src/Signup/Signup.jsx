import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import foodlogo from '../images/foodlogo.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
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
    <div className='Signup'>

      
    
    <div className="Signup-form-container">
  
      
      <form className="Signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleInputChange}
        />
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
        <button type="submit">Signup</button>
      </form>

    
    </div>
    <div className='Signuplink'>
    <Link to="Login">
<h3>Already Have an Account</h3>
</Link>
    </div>
 
    </div>
  );
};

export default Signup;
