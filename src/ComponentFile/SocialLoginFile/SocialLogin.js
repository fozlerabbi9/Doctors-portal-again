import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../LoadingFile/Loading';
import './Social.css';

const SocialLogin = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    if (gloading) {
        return <div class="flex justify-center items-center">
            <p className='text-white'>Loading...</p>
            <div class="w-4 h-4 border-l-2 ml-2 border-white rounded-full animate-spin"></div>
        </div>

    }
    // const googleSignIn = () => {
    //     signInWithGoogle();
    // }
    return (
        <div>
            <div className='or-style'>  <p>or</p> </div>
            {
                gerror && <p className='text-red-500 text-xs mb-2'>{gerror.message}</p>
            }
            <input className=' bg-yellow-200 ' onClick={() => signInWithGoogle()} type="button" value="Google Sign-In" />
            {/* <input className=' bg-yellow-200 ' onClick={googleSignIn} type="button" value="Google Sign-In" /> */}
        </div>
    );
};

export default SocialLogin;