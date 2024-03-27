// Import necessary dependencies and components
"use client"
import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../_store/store';
import Cookies from 'js-cookie';
import styles from './login.module.css'; 

// Login component
const Login = () => {
  // Initialize router from Next.js
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Use Zustand hook to get and set username
  const setUsername = useAuthStore((state) => state.setUsername);

  // Function to verify user credentials through API
  const verifyuser = async (username, password) => {
    try {
      // Make API call to login endpoint
      setLoading(true);
      const { data } = await axios.post('https://charityserver-1.onrender.com/login', { username, password });
      let { token } = data;
      Cookies.set('jwttoken', token, { path: '/' }); // Adjust options as needed
      // Store token in localStorage
      localStorage.setItem('token', token);

      // If token is present, show success notification and redirect after 2 seconds
      if (token) {
        toast.success('Login successful');
         router.push('/admin')
      }
    } catch (error) {
      // Show error notification when login fails
      toast.error('Login failed');
      console.error('Error fetching data:', error);
    }finally {
      setLoading(false);
    }
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.username) {
        errors.username = 'Username is required';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
    onSubmit: (values) => {
      // Update username state using Zustand
      setUsername(values.username);
      // Call verifyuser function with username and password
      verifyuser(values.username, values.password);
    },
  });

  return (
    <>
      {loading ? ( // Render loading screen if loading is true
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className={styles.loader}></div>
      </div>
        // Apply CSS class for loading animation
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Login</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="mt-1 p-2 w-full border border-red-300 rounded-lg"
                  {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 p-2 w-full border border-red-300 rounded-lg"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
                  disabled={loading}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;