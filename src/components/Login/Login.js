import React, { useState } from 'react';
import "./Login.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Login(props) {

    const [username, setuserame] = useState();
    const [password, setpassword] = useState();

    let navigate = useNavigate();

    const ValidateLogin = async(data) => {
        console.log("working", username, password)
        // fetch(`https://newblog2500.herokuapp.com/user/login/?email=${username}&password=${password}`, {
        //     method: 'get',
        //     // query: JSON.stringify({
        //     //     "email": username,
        //     //     "password": password
        //     // }),
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //         if (responseJson.token) {
        //             return navigate('/home')
        //         }
        //         else {
        //             alert("Invalid credential")
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        try {
            const res = await axios.post(`http://localhost:5001/login`,{
                email:username,
                password:password
            } ,{
                headers: {
                    "Content-Type": "application/json"
                },
            })
            localStorage.setItem("token", res.data.token)
            // setmsg(res.data.message)
            return navigate('/home')
            
        } catch (err) {
            console.log(err);
        }
        
    };

    

    return (
        <div className="container">
            <div class="login">
                <label className='label-name' for="chk" aria-hidden="true">Login</label>
                <input className='input-name' type="email" name="email" placeholder="Email" required="" onChange={(text) => setuserame(text.target.value)} />
                <input className='input-name' type="password" name="pswd" placeholder="Password" required="" onChange={(text) => setpassword(text.target.value)} />
                <button className='loginbutton' onClick={() => ValidateLogin("working")}>Login</button>
                <Link to="/signup">
                    <button className='signuplink' >Sign Up</button>
                </Link>
            </div>

        </div>
    );
}

export default Login;
