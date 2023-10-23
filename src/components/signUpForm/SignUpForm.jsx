import React from 'react';
import { TextField } from '@mui/material';

const SignUpForm = () => {
    return (
        <div className='signUp__form'>
            <TextField
                sx={{
                    "& .MuiInputLabel-root": {
                        color: "grey",
                    },
                    "& .MuiInput-root": {
                        color: 'darkorange',
                    },
                    '& label.Mui-focused': {
                        color: 'darkorange',
                    },
                }}
                color='warning'

                variant="standard"
                // {...register('firstname')}
                required
                className="signUp__form-input"
                label="Email"
                type="text"
            // onChange={(e) => {setFirstName(e.target.value)}}
            />
            <TextField
                sx={{
                    "& .MuiInputLabel-root": {
                        color: "grey",
                    },
                    "& .MuiInput-root": {
                        color: 'darkorange',
                    },
                    '& label.Mui-focused': {
                        color: 'darkorange',
                    },
                }}
                color='warning'
                variant="standard"
                // {...register('firstname')}
                required
                className="signUp__form-input"
                label="Username"
                type="text"
            // onChange={(e) => {setFirstName(e.target.value)}}
            />
            <TextField
                sx={{
                    "& .MuiInputLabel-root": {
                        color: "grey",
                    },
                    "& .MuiInput-root": {
                        color: 'darkorange',
                    },
                    '& label.Mui-focused': {
                        color: 'darkorange',
                    },
                }}
                color='warning'
                variant="standard"
                // {...register('firstname')}
                required
                className="signUp__form-input"
                label="Password"
                type="password"
            // onChange={(e) => {setFirstName(e.target.value)}}
            />
            <TextField
                sx={{
                    "& .MuiInputLabel-root": {
                        color: "grey",
                    },
                    "& .MuiInput-root": {
                        color: 'darkorange',
                    },
                    '& label.Mui-focused': {
                        color: 'darkorange',
                    },
                }}
                color='warning'
                variant="standard"
                // {...register('firstname')}
                required
                className="signUp__form-input"
                label="Password confirm"
                type="password"
            // onChange={(e) => {setFirstName(e.target.value)}}
            />
            <button className='signUp__form-btn' type='submit'>
                Create account
            </button>
            <div className='signUp__form-additional'>
                <div className='signUp__form-additional-line'></div>
                <span>
                    Or Sign up with
                </span>
                <div className='signUp__form-additional-line'></div>
            </div>
            <div className='signUp__form-google'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                    <path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00" />
                    <path d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z" fill="#4CAF50" />
                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                </svg>
            </div>
        </div>
    );
}

export default SignUpForm;
