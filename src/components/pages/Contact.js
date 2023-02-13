import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    setUserName('');
    setEmail('');
  };

  return (
    <div class="container">
      <p>Hello {userName}</p>
      <form class="container" className="form">
        <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input class="form-control" id="exampleFormControlInput1" 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Name</label>
        <input class="form-control" id="exampleFormControlTextarea1" rows="3"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <input class="form-control" id="exampleFormControlTextarea1" rows="3"
          value="message"
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

    // <div>
    //   <h2>Contact Me</h2>
    //   <form class="container">
    //   <div class="form-group">
    //       <label for="exampleFormControlTextarea1">Name</label>
    //       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleFormControlInput1">Email address</label>
    //       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleFormControlTextarea1">Message</label>
    //       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //     </div>
    //     <button type="submit" class="btn btn-primary">Submit</button>
    //   </form>
    // </div>
  );
}


