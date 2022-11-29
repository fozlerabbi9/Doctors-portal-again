import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLoginFile/SocialLogin';
import Loading from '../LoadingFile/Loading';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, creatUererror,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, verifysending, error] = useSendEmailVerification(auth);
    const [changeStyle, setChangeStyle] = useState(false);
    const [passValue, setPassValue] = useState("");
    const [passCount, setPassCunt] = useState(passValue);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // console.log(user)
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate])

    // console.log(user);

    if (loading) {
        return <Loading></Loading>
    }

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



    const registerFun = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const againPassword = e.target.againPassword.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification()
        toast("You can login right now")
        signOut(auth)
        navigate("/login")


        // console.log(name, email, password, againPassword);
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
                        <input className='input-style w-full mb-6 px-2 py-1' required name='name' type="text" placeholder='Full Name' /> <br />
                        <input className='input-style w-full mb-6 px-2 py-1' required name='email' type="email" placeholder='Email' /> <br />
                        <input onChange={focusFun} onFocus={focusFun} className='input-style w-full mb-6 px-2 py-1' required name='password' type="password" placeholder='password' /> <br />
                        {
                            changeStyle && <p className='text-white'>Type menimum {passValue ? `${passCount}` : "6"} carecters</p>
                        }
                        <input className='input-style w-full mb-6 px-2 py-1' required name='againPassword' type="password" placeholder='Again password' /> <br />
                        <input className='login-butto w-full mb-1 px-4 p-1  font-bold text-xl rounded-lg' type="submit" value="SUBMIT" />
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-white'>Already have an account? <br /> <span> <Link to="/login">Login</Link> </span> here</p>
                </div>
            </div>
        </div>
    );
};

export default Register;