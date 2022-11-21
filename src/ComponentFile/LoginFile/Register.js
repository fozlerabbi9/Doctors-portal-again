import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [changeStyle, setChangeStyle] = useState(false);
    const [passValue, setPassValue] = useState("");
    const [passCount, setPassCunt] = useState(passValue);
    // console.log(passValue);

    const focusFun = (e) => {
        e.preventDefault();
        const password = e.target.value;
        setPassValue(password)

        if (password.length < 6) {
            setChangeStyle(true);
        }
        else if (password.length >= 6) {
            setPassCunt(passCount - 1)
            setChangeStyle(false)
        }
    }



    const registerFun = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const againPassword = e.target.againPassword.value;

        createUserWithEmailAndPassword(email, password)


        console.log(name, email, password, againPassword);
    }



    return (
        <div className='main-div'>
            <div className="form-div flex justify-between lg:mt-24 lg:mx-10 ">
                <div className="info-text text-left lg:w-2/3 lg:mr-64">
                    <h2>Doctors Portal</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate corporis laudantium vel tenetur ex labore qui dolorem! Commodi et alias architecto voluptatum officia expedita.</p>
                </div>
                <div className="form lg:w-1/3">
                    {/* <Outlet></Outlet> */}
                    <form className='' action="" onSubmit={registerFun}>
                        <h2 className='w-full mb-4 bg-white py-1 font-bold text-xl rounded-lg'>Register hera</h2>
                        <input className='input-style w-full mb-6 px-2 py-1' name='name' type="text" placeholder='Full Name' /> <br />
                        <input className='input-style w-full mb-6 px-2 py-1' name='email' type="email" placeholder='Email' /> <br />
                        <input onChange={focusFun} onFocus={focusFun} className='input-style w-full mb-6 px-2 py-1' name='password' type="password" placeholder='password' /> <br />
                        {
                            changeStyle && <p className='text-white'>Type menimum {passValue ? `${passCount}` : "6"} carecters</p>
                        }
                        <input className='input-style w-full mb-6 px-2 py-1' name='againPassword' type="password" placeholder='Again password' /> <br />
                        <input className='login-butto w-full mb-6 px-4 p-1  font-bold text-xl rounded-lg' type="submit" value="SUBMIT" />
                    </form>
                    <p className='text-white'>Already have an account? <br /> <span> <Link to="/login">Login</Link> </span> here</p>
                </div>
            </div>
        </div>
    );
};

export default Register;