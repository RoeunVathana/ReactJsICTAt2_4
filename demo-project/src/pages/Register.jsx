import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchAxios from "../fetchApi/AxiosCustom";

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
        isActive: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetchAxios("/users", "POST", formData);
            // console.log(formData)
            alert("Account created successfully!");
            navigate("/login"); // Adjust to your login route
        } catch (error) {
            alert(error?.response?.data?.message || "Failed to register user!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
                <h3 className="text-center mb-4">Register</h3>

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Alice Customer"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="alice@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Role Field */}
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            className="form-select"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* isActive Switch */}
                    <div className="form-check form-switch mb-4">
                        <input
                            id="isActive"
                            name="isActive"
                            type="checkbox"
                            className="form-check-input"
                            checked={formData.isActive}
                            onChange={handleChange}
                        />
                        <label htmlFor="isActive" className="form-check-label">
                            Active Account
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;