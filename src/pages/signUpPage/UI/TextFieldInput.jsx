import React from 'react';
import { TextField } from '@mui/material';
const TextFieldInput = ({type,label,register,name}) => {
    
    return (
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
                {...register(name)}
                color='warning'
                variant="standard"
                required
                className="signUp__form-input"
                label={label}
                type={type}
                onChange={(e)=>{console.log(e.target.value)}}
            />
    );
}

export default TextFieldInput;
