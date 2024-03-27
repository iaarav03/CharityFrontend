"use client"
import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './register.module.css'
import Link from 'next/link';

const Register = () => {
  // ... (rest of the code remains the same)
  const [error, setError] = useState(null);
  const router = useRouter();
  const [loading,setLoading]=useState(false);



  // const handleAxiosError = (error) => {
  //   setError('Failed to register user');
  //   console.error('Error registering:', error); 

  //   if (error.response && error.response.data === 'username already exists') {
  //     toast.error('Username already exists');
  //   }  else {
  //     toast.error('Registration Error');
  //   }
  // }

  const fetchData = async (values) => {
    try {
      setLoading(true);
      toast.info('Registering...', { autoClose: false });

      const response = await axios.post('https://charityserver-1.onrender.com/register', values);
       
      const {username,email}=values;
     
      const text="Welcome in  Kuch acha karte hai club";
      const sub="Yogdaan-charity donation"
      toast.dismiss(); 

      if (response.status===201) {
        toast.error('Username already exists');

      } else if(response.status===202){
        toast.error('email already exists');
        const res = await axios.post('https://charityserver-1.onrender.com/registermail', {
  username,
  useremail:email,
  text,
  sub,
});

      }else {
        toast.success('Registration successful ');

        const res = await axios.post('https://charityserver-1.onrender.com/registermail', {
          username,
          useremail:email,
          text,
          sub,
        });



        router.push('/login') // Replace with your actual route
      }
    } catch (error) {
      handleAxiosError(error); 
    }finally{
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      Address: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.Address) {
        errors.Address = 'Address is required';
      }

      return errors;
    },
    onSubmit: (values) => fetchData(values),
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
          <h2 className="text-2xl font-bold text-red-700 mb-4">Register</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">{/* Username */}
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="mt-1 p-2 w-full border border-red-300 rounded-lg text-black"
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm">{formik.errors.username}</div>
              ) : null}
            </div>

            <div className="mb-4">{/* Password */}
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 p-2 w-full border border-red-300 rounded-lg text-black"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="mb-4">{/* Email */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email" // Use type="email" for email fields
                className="mt-1 p-2 w-full border border-red-300 rounded-lg text-black"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">{/* Address */}
              <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="Address"
                type="text"
                className="mt-1 p-2 w-full border border-red-300 rounded-lg text-black"
                {...formik.getFieldProps('Address')}
              />
              {formik.touched.Address && formik.errors.Address ? (
                <div className="text-red-500 text-sm">{formik.errors.Address}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
              >
                Register
              </button>
            </div>

            <div className="text-center text-blue-800 text-lg">
             
              <Link href='/login'>  Already Registered? Go to Login Page</Link>
              
             
            </div>
            {/* ... rest of the form (button, etc.) ... */}
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      )}
      <ToastContainer />
      
    </>
  );
};

export default Register;
