import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaUsers } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import "../css/registrationForm.css";

function RegistrationForm({selectedCategoryName, selectedCategoryEmojie, setOpenRegistrationForm, selectedTitle, selectedDateTime}) {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: "", userEmail: "", phone: "", guestsCount: ""
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Your Name is required"),
            userEmail: Yup.string().required("Your Email is required"),
            phone: Yup.string().required("Your Phone is required"),
            guestsCount: Yup.string().required("Your Guests Count are required"),
        }),
        onSubmit: async (values) => {
            try {
                const data = { fullName: values.fullName, userEmail: values.userEmail, phone: values.phone, guestsCount: values.guestsCount, eventCategory: (selectedCategoryName + " " + selectedCategoryEmojie), eventTitle: selectedTitle, eventDateTime: selectedDateTime };
                setIsLoading(true);
                const response = await axios.post(`http://localhost:3012/register-customer`, data, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (response.status === 201) {
                    setIsLoading(false);
                    alert("Registration Successfully Done ✅")
                    console.log("Customer registered successfully");
                    setOpenRegistrationForm(false);
                }
            }
            catch (error) {
                console.log("Something went wrong : ", error);
                setIsLoading(false);
            }
        },
        validateOnMount: true
    })
    return (
        <>
            <div className="registration-field-wrapper">
                <div className="registration-container">
                    <div className="registration-header">
                        <h2 className="registration-title">Customer Resistration Form for {selectedCategoryName + " " + selectedCategoryEmojie} </h2>
                        <p className="registration-subtitle">Book your seats for this event</p>
                        <div className="divider"></div>
                    </div>

                    <div className="form-wrapper">
                        <form onSubmit={formik.handleSubmit} method='post'>
                            <div className="form-grid">
                                {/* Name Field */}
                                <div className="form-group">
                                    <label className="input-label">
                                        <FaUser className="input-icon" />
                                        <span>Full Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className={`form-input ${formik.touched.fullName && formik.errors.fullName ? 'error' : ''}`}
                                        placeholder="Enter your Full Name here..."
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="input-label">
                                        <FaPhone className="input-icon" />
                                        <span>Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className={`form-input ${formik.touched.phone && formik.errors.phone ? 'error' : ''}`}
                                        placeholder="Enter your phone here..."
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="form-group">
                                    <label className="input-label">
                                        <FaEnvelope className="input-icon" />
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        className={`form-input ${formik.touched.userEmail && formik.errors.userEmail ? 'error' : ''}`}
                                        placeholder="Enter Your Email here..."
                                        value={formik.values.userEmail}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="form-group">
                                    <label className="input-label">
                                        <FaUsers className="input-icon" />
                                        <span>Number of Guests</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="guestsCount"
                                        className={`form-input ${formik.touched.guestsCount && formik.errors.guestsCount ? 'error' : ''}`}
                                        placeholder="Enter Event Location..."
                                        value={formik.values.guestsCount}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                            </div>

                            <div className="registrationForm-btn">
                                <button onClick={() => setOpenRegistrationForm(false)} className='cancel-btn'>Cancel Registration</button>
                                <button
                                    type="submit"
                                    className="register-btn"
                                    disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? (
                                        <span className="submit-loading">
                                            <span className="spinner"></span>
                                            Processing...
                                        </span>
                                    ) : (
                                        "Register"
                                    )}
                                </button>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm;