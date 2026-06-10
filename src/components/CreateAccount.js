import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Eye, EyeOff, Info } from 'lucide-react';

const CreateAccount = () => {
  const navigate = useNavigate();
  
  // Form state management
  const [formData, setFormData] = useState({
    firstName: 'James Brown',
    lastName: 'James Brown', 
    email: 'james@gmail.com',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Password validation logic
  const isValidPassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasMinLength = password.length >= 8;
    return hasUpperCase && hasNumber && hasMinLength;
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      isValidPassword(formData.password) &&
      formData.password === formData.confirmPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // TODO: Add API call for account creation
      navigate('/portal');
    }
  };

  return (
    <div className="create-account-container">
      <form className="create-account-form" onSubmit={handleSubmit}>
        <div className="profile-icon">
          <User size={32} color="#3b82f6" />
        </div>
        
        <h1 className="form-title">Create your account</h1>
        <p className="form-subtitle">
          Set up your KOJO partner account to start<br />
          accessing leads
        </p>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              placeholder="James Brown"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              placeholder="James Brown"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Email Address<span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="james@gmail.com"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Password<span className="required">*</span>
          </label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••••"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="password-requirements">
            <Info size={12} />
            <span>Must contain 1 uppercase letter, 1 number, min. 8 characters.</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Confirm Password<span className="required">*</span>
          </label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••••"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="continue-button"
          disabled={!isFormValid()}
        >
          Continue →
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;