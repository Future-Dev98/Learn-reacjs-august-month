import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/form-controls/inputField';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

CustomForm.propTypes = {
    onSubmit: PropTypes.func,
};

function CustomForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title.').min(5, 'Title is too short'),
      });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleOnSubmit = (values) => {
        console.log('Todo Form:' + values);
    }
    return (
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <InputField form={form} label="Todo" name="title" disabled={false}/>
        </form>
    );
}

export default CustomForm;