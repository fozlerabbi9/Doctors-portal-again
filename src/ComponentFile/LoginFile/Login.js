import React from 'react';
import './Login.css';

const Login = () => {

    const loginFormFun = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
        console.log(password);
    }

    const SigninFormFun = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const repeatPassword = e.target.repeatPassword.value;
        const email = e.target.email.value;
        console.log(name);
        console.log(password);
        console.log(repeatPassword);
        console.log(email);
    }


    return (
        <div>
            {/* <h2>this is login page</h2> */}
            {/* <div className="row"> */}
            {/* <div className=""> */}
            <div className="login-card">
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
            </div>
            {/* </div> */}
            {/* </div> */}


        </div>
    );
};

export default Login;