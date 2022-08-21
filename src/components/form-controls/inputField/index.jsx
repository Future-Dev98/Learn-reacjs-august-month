import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, ErrorMessage } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
}

function InputField(props) {
    const {form, name, label, disabled} = props;
    const {register, formState:{touchedFields , errors }} = form;
    const hasError = touchedFields[name] && errors[name];
    return (
        <Controller
            control={form.control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
            }) => (
                <TextField 
                    fullWidth 
                    rules={{ required: true }}
                    name={name} 
                    label={label} 
                    disabled={disabled} 
                    error={!!hasError}
                    helperText={error?.message}
                    {...register(name , { required: true })}
                />
            )}
            />
    );
}

export default InputField;