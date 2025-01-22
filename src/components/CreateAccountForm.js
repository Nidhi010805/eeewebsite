import React, { useState } from "react";

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    enrollmentNumber: "",
    department: "",
    year: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, password: value });

    if (value.length < 6) setPasswordStrength("Weak");
    else if (value.length < 10) setPasswordStrength("Moderate");
    else setPasswordStrength("Strong");
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Invalid email format.";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords must match.";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Form Data Submitted: ", formData);
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    color:" solid bold #b65d0b",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "#e6e2d6",
     
    boxShadow: "0 4px 6px rgba(236, 31, 31, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color:"black",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#c95211",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.9em",
    marginTop: "5px",
  };

  const strengthStyle = {
    fontSize: "0.9em",
    marginTop: "5px",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Create Your Account</h2>

      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        {errors.fullName && <div style={errorStyle}>{errors.fullName}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handlePasswordChange}
          style={inputStyle}
          required
        />
        <div style={strengthStyle}>
          {passwordStrength && <span>Password Strength: {passwordStrength}</span>}
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        {errors.confirmPassword && (
          <div style={errorStyle}>{errors.confirmPassword}</div>
        )}
      </div>

      <div>
        <label htmlFor="enrollmentNumber">Enrollment Number</label>
        <input
          type="text"
          id="enrollmentNumber"
          name="enrollmentNumber"
          value={formData.enrollmentNumber}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <div>
        <label htmlFor="department">Department</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Department</option>
          <option value="computer-science">Computer Science</option>
          <option value="mechanical">Mechanical</option>
          <option value="civil">Civil</option>
          <option value="electrical">Electrical</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <div>
        <label htmlFor="year">Year of Study</label>
        <select
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

      <button type="submit" style={buttonStyle}>
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
