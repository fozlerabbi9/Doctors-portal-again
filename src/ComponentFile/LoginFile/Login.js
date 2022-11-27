import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SocialLogin from '../SocialLoginFile/SocialLogin';
import './Login.css';

const Login = () => {


    // const [pass, setPass] = useState(false)
    // console.log(pass)
    // const loginFormFun = e => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email);
    //     console.log(password);
    // }
    // const SigninFormFun = e => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const password = e.target.password.value;
    //     const repeatPassword = e.target.repeatPassword.value;
    //     const email = e.target.email.value;

    //     let registerData;
    //     if (password !== repeatPassword) {
    //         // alert("password was not matched please try again");
    //         setPass(true);
    //         return
    //     } else {
    //         registerData = {
    //             name: name,
    //             password: password,
    //             repeatPassword: repeatPassword,
    //             email: email
    //         }
    //         setPass(false);
    //     }

    //     console.log(registerData);
    //     // console.log(name);
    //     // console.log(password);
    //     // console.log(repeatPassword);
    //     // console.log(email);
    // }
    return (
        <div className="main-div">

            <div className="form-div flex  lg:mt-24 lg:mx-10 ">
                <div className="info-text text-left lg:w-2/3 lg:mr-64">
                    <h2>Doctors Portal</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate corporis laudantium vel tenetur ex labore qui dolorem! Commodi et alias architecto voluptatum officia expedita.</p>
                </div>
                <div className="form lg:w-1/3">
                    {/* <Outlet></Outlet> */}
                    <form className='' action="">
                        <h2 className='w-full mb-4 bg-white py-1 font-bold text-xl rounded-lg'>Login hera</h2>
                        <input className='input-style w-full mb-6 px-2 py-1' name='email' type="email" placeholder='Email' /> <br />
                        <input className='input-style w-full mb-6 px-2 py-1' name='password' type="password" placeholder='password' /> <br />
                        <input className='login-butto w-full mb-1 px-4 p-1  font-bold text-xl rounded-lg' type="button" value="SUBMIT" />
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-white'>don't have an account? <br /> <span> <Link to="/register">sign-Up</Link> </span> here</p>
                </div>
            </div>

            {/* <div className="login-card">
                <div className="login-box">
                    <div className="login-snip">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Login</label >
                        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label >
                        <div className="login-space">
                            <div className="login">

                                <form onSubmit={loginFormFun} action="">
                                    <div className="group ">
                                        <label for="email" className="label">Email</label>
                                        <input name='email' id="email" type="email" className="input  " placeholder="Enter your Email" />
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Password</label>
                                        <input name='password' id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="group">
                                        <input id="check" type="checkbox" className="check" checked />
                                        <label for="check"><span className="icon"></span> Keep me Signed in</label>
                                    </div>
                                    <div className="group">
                                        <input type="submit" className="button" value="Sign In" />
                                    </div>
                                </form>

                                <div className="hr"></div>
                                <div className="foot">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>

                            <div className="sign-up-form">
                                <form onSubmit={SigninFormFun} action="">
                                    <div className="group">
                                        <label for="user" className="label">Username</label>
                                        <input name='name' id="user" type="text" className="input" placeholder="Create your Username" />
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Password</label>
                                        <input name='password' id="pass" type="password" className="input" data-type="password" placeholder="Create your password" />
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Repeat Password</label>
                                        <input name='repeatPassword' id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" />
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Email Address</label>
                                        <input name='email' id="pass" type="text" className="input" placeholder="Enter your email address" />
                                    </div>
                                    {
                                        pass ? <p>password was not matched please try again</p> : ""
                                    }
                                    <div className="group">
                                        <input type="submit" className="button" value="Sign Up" />
                                    </div>
                                </form>
                                <div className="hr"></div>
                                <div className="foot">
                                    <label for="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Login;