import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    address: '',
    phoneNumber: '',
    aadhar: '',
    voterId: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if all fields except middleName are non-empty
    const isValid = Object.keys(formData).every(key => 
      key === 'middleName' || formData[key].trim() !== ''
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/Vote', { state: formData });
    }
  };

  return (
    <div className='form'>
      <h1>Details</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label htmlFor="firstName" className='label'>First Name</label>
        <input type="text" id="firstName" name="firstName" className='input' value={formData.firstName} onChange={handleChange} required />
        <br />

        <label htmlFor="middleName" className='label'>Middle Name (Optional)</label>
        <input type="text" id="middleName" name="middleName" className='input' value={formData.middleName} onChange={handleChange} />
        <br />

        <label htmlFor="lastName" className='label'>Last Name</label>
        <input type="text" id="lastName" name="lastName" className='input' value={formData.lastName} onChange={handleChange} required />
        <br />

        <div className='dob'>
          <label htmlFor="dob" className='label'>Date of Birth</label>
          <input type="date" id="dob" name="dob" className='input' value={formData.dob} onChange={handleChange} required />
        </div>

        <div className='address'>
          <label htmlFor="address" className='label'>Address</label>
          <input type="text" id="address" name="address" className='input' value={formData.address} onChange={handleChange} required />
        </div>

        <div className='phone-number'>
          <label htmlFor="phoneNumber" className='label'>Number</label>
          <input type="number" id="phoneNumber" name="phoneNumber" className='input' value={formData.phoneNumber} onChange={handleChange} inputMode="numeric" required />
        </div>

        <div className='aadhar'>
          <label htmlFor="aadhar" className='label'>Aadhar number</label>
          <input type="number" id="aadhar" name="aadhar" className='input' value={formData.aadhar} onChange={handleChange} inputMode="numeric" required />
        </div>

        <div className='vote-id'>
          <label htmlFor="voterId" className='label'>Voter's Id</label>
          <input type="text" id="voterId" name="voterId" className='input' value={formData.voterId} onChange={handleChange} required />
        </div>

        <button type='submit' className='button' disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
};

export default Details;
