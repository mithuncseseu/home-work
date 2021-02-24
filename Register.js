import React, { useEffect, useState } from "react";
const Joi = require("joi");
const Register = () => {
  const [user, setUser] = useState({
    temaName: "",
    temaLeaderName: "",
    email: "",
    mobileNo: "",
    challangeType: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  let userModel = {
    temaName: Joi.string().min(3).max(30).required().label("Team Name"),
    temaLeaderName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Team Leader Name"),
    email: Joi.string().min(3).max(30).required().label("Email"),
    mobileNo: Joi.string().min(3).max(30).required().label("Email"),
    challangeType: Joi.string().required().label("Challange"),
    password: Joi.string().min(3).max(30).required().label("Password"),
    confirmPassword: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Confirm Password"),
  };
  function validateProperty({ name, value }) {
    const obj = { [name]: value };
    let schema = Joi.object({
      [name]: userModel[name],
    });
    let result = schema.validate(obj);
    const { error } = result;
    if (!error) return null;
    return error.details[0].message;
  }
  let handleChange = (event) => {
    // this.setState({value: event.target.value});
    var errorstemp = { ...errors };
    const errorMessage = validateProperty(event.currentTarget);
    if (errorMessage) errorstemp[event.currentTarget.name] = errorMessage;
    else delete errorstemp[event.currentTarget.name];
    setErrors(errorstemp);
    let tempUser = { ...user };
    tempUser[event.currentTarget.name] = event.currentTarget.value;
    setUser(tempUser);
  };
  function validate() {
    let userSchema = Joi.object(userModel);
    let result = userSchema.validate(user, { abortEarly: false });
    if (!result.error) return null;
    var errorstemp = {};
    for (let item of result.error.details) {
      errorstemp[item.path[0]] = item.message;
    }
    return errorstemp;
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    let errorstemp = validate();
    setErrors(errorstemp ? errorstemp : {});
    if (errorstemp) return;
    console.log(user);
    console.log("Submitted");
    fetch("http://localhost:3001/register-team", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="register-section section-pading">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="caption text-center">registration</h5>
            <h2 className="heading text-center">Register your team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="registar-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      onChange={handleChange}
                      value={user.temaName}
                      type="text"
                      className="form-control"
                      placeholder="Team Name"
                      name="temaName"
                    />
                    {errors.temaName && (
                      <div className="alert alert-danger">
                        {errors.temaName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <input
                      onChange={handleChange}
                      value={user.temaLeaderName}
                      type="text"
                      className="form-control"
                      placeholder="Team Leader Name"
                      name="temaLeaderName"
                    />
                    {errors.temaLeaderName && (
                      <div className="alert alert-danger">
                        {errors.temaLeaderName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      onChange={handleChange}
                      value={user.email}
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                    {errors.email && (
                      <div className="alert alert-danger">{errors.email}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <input
                      onChange={handleChange}
                      value={user.mobileNo}
                      type="text"
                      className="form-control"
                      placeholder="Mobile No."
                      name="mobileNo"
                    />
                    {errors.mobileNo && (
                      <div className="alert alert-danger">
                        {errors.mobileNo}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className=" col-md-12">
                    <select
                      onChange={handleChange}
                      name="challangeType"
                      value={user.challangeType}
                      id="challangeType"
                      className="form-control"
                    >
                      <option value="0">Select Your Challang</option>
                      <option value="1">1</option>
                    </select>
                    {errors.challangeType && (
                      <div className="alert alert-danger">
                        {errors.challangeType}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      onChange={handleChange}
                      value={user.password}
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                    {errors.password && (
                      <div className="alert alert-danger">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <input
                      onChange={handleChange}
                      value={user.confirmPassword}
                      type="text"
                      className="form-control"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                    />
                    {errors.confirmPassword && (
                      <div className="alert alert-danger">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="combtn regbtn">
                      register now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
