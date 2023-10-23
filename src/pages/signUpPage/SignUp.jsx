import React from 'react';
import signUpBackgroundImg from '../../assets/img/7b6e580de3a2f7678ee62c8a03488098.png';
import SignUpForm from '../../components/signUpForm/SignUpForm';
const SignUp = () => {

    return (
        <div className='signUp'>
            <div className='signUp__container'>
                <div className='signUp__wrapper'>
                    <div className='signUp__left-side'>
                        <div className='signUp__top-block'>
                            <div className='signUp__title'>Sign up</div>
                            <div className='signUp__return'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_103_474)">
                                        <mask id="mask0_103_474" style={{ "mask-type": "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                            <path d="M20 0H0V20H20V0Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_103_474)">
                                            <path d="M3.46877 10.2762L1.19312 12.5519L3.48848 14.8374" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.8073 5.83334C18.8073 9.54726 15.8027 12.5519 12.0887 12.5519H1.19312" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_103_474">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <SignUpForm />
                    </div>
                    <div className='signUp__right-side'>
                        <img src={signUpBackgroundImg} alt="signUp_Background_Img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
