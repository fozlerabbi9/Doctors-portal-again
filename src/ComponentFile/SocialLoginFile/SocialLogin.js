import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Social.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // const googleSignIn = () => {
    //     signInWithGoogle();
    // }
    return (
        <div>
            <div className='or-style'>  <p>or</p> </div>
            {
                error && <p className='text-red-500 text-xs mb-2'>{error.message}</p>
            }
            <input className=' bg-yellow-200 ' onClick={() => signInWithGoogle()} type="button" value="Google Sign-In" />
            {/* <input className=' bg-yellow-200 ' onClick={googleSignIn} type="button" value="Google Sign-In" /> */}
        </div>
    );
};

export default SocialLogin;