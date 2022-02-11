import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from './validation';

function Signup() {

    let navigate = useNavigate();

    // Storing Form Field Values
    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    // Flag for Form Submission Status
    const [isSubmit, setIsSubmit] = useState(false);

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();        

        setFormErrorValues(validation(username,email,password));
        console.log(Object.keys(formErrorValues))
       
          
        
    }

   const Signupapi = () =>{
     let baseURL ='http://192.168.1.4:5001/api/signup'
    // fetch('https://blogapp5000.herokuapp.com/api/signup', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         "username": username,
    //         "email": email,
    //         "password": password
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         if (responseJson._id) {
    //             console.log(responseJson)
    //             return navigate('/')
    //         }
    //         else {
    //             alert("Invalid credential")
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         // alert(error)
    //     });

    axios
    .post(baseURL, {
        "username": username,
        "email": email,
        "password": password
    })
    .then((response) => {
        console.log(response)
                    return navigate('/')  });
    }

    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 ) {
            Signupapi()
        }
    }, [formErrorValues]);

    return (

        <div className='containerSignup'>
            {/* {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) : (<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>)} */}

            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                {/* Signup */}
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label className='signuplabel' for="chk" aria-hidden="true">Sign up</label>
                        <input className='signupinput' type="text" name="username" placeholder="User name" required="" onChange={(text) => setusername(text.target.value)} />
                        <p className='error'>{formErrorValues.username}</p>
                        <input className='signupinput' type="email" name="email" placeholder="Email" required="" onChange={(text) => setemail(text.target.value)} />
                        <p className='error'>{formErrorValues.email}</p>
                        <input className='signupinput' type="password" name="password" placeholder="Password" required="" onChange={(text) => setpassword(text.target.value)} />
                        <p className='error'>{formErrorValues.password}</p>
                        <button className='signUpbutton'>Sign up</button>
                        <Link to="/">
                            <button className='loginlink' >Login</button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;