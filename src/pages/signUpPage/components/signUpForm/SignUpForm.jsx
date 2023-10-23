import React from 'react';
import TextFieldInput from '../../UI/TextFieldInput';
import googleIcon from './../../../../assets/img/google.svg';
import { useForm } from 'react-hook-form';
import { registration } from "../../../../db/registration";

const SignUpForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (userData) => {
        try {
            await registration(userData);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form className='signUp__form' onSubmit={handleSubmit(onSubmit)}>
            <TextFieldInput type={'email'} label={'Email'} name={'email'} register={register}/>
            <TextFieldInput type={'text'} label={'Username'} name={'username'} register={register}/>
            <TextFieldInput type={'password'} label={'Password'} name={'password'} register={register}/>
            <TextFieldInput type={'password'} label={'Password confirm'} name={'passwordConfirm'} register={register}/>
            <button className='signUp__form-btn' type='submit'>
                Create account
            </button>
            <div className='signUp__form-additional'>
                <div className='signUp__form-additional-line'></div>
                <span>Or Sign up with</span>
                <div className='signUp__form-additional-line'></div>
            </div>
            <div className='signUp__form-google'>
                <img src={googleIcon} alt="" />
            </div>
        </form>
    );
}

export default SignUpForm;
