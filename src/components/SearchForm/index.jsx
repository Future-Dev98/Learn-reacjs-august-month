import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    onSubmit: PropTypes.func
};

SearchForm.defaultProps = {
    onSubmit: null
}

function SearchForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    const tyingTimeOutRef = useRef(null)
    function hanleSubmit(e) {
        e.preventDefault();
    }

    function hanleOnChange(e) {
        const value = e.target.value;
        setValue(value);
        if (!onSubmit) 
            return;
        
        if (tyingTimeOutRef.current) {
            clearTimeout(tyingTimeOutRef.current)
        }

        tyingTimeOutRef.current = setTimeout(() => {
            const formValue = {
                value: value
            }
            onSubmit(formValue)
        }, 300)
    }
    return (
        <form onSubmit={hanleSubmit}>
            <input type="text" value={value} onChange={hanleOnChange}/>
        </form>
    );
}

export default SearchForm;