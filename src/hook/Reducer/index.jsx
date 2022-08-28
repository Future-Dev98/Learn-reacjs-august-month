import React, { useEffect, useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action) {
        case 'TANG' :
            return state + 1;
        case 'GIAM' :
            return state - 1;
        case 'DELETE_ALL':
            return 0;
        default:
            return state;
    }
}

const reducer2 = (state, action) => {
    switch (action.type) {
        case 'GAN_GIA_TRI' :
            return action.value;
        default:
            return state;
    }
}

const initState = {
    loading: false,
    error: false,
    data: []
}

const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST' :
            return {
                ...state,
                loading: true
            }
        case 'GET_USER_SUCCESS' :
            return {
                ...state,
                loading: false,
                data:action.data
            }
        case 'GET_USER_ERROR' :
            return {
                ...state,
                loading: false,
                error: action.data,
                data: []
            }
        default: return state;
    }
}

function Reducer(props) {
    const [count, dispath] = useReducer(reducer, 0);
    const [count2, dispath2] = useReducer(reducer2, 0);
    const [user, userDispath] = useReducer(userReducer, initState);
    const handleOnClick = () => {
        userDispath({
            type: 'GET_USER_REQUEST'
        });
        setTimeout(() => {
            fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                userDispath({
                    type: 'GET_USER_SUCCESS',
                    data: res
                })
            })
            .catch(err => {
                userDispath({
                    type: 'GET_USER_ERROR',
                    data: err
                })
            })
        },1500)
        
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispath('TANG')}>Tăng</button>
            <button onClick={() => dispath('GIAM')}>Giảm</button>
            <button onClick={() => dispath('DELETE_ALL')}>Xoá tất cả</button>
            <p>Count 2: {count2}</p>
            <button onClick={() => dispath2({type:'GAN_GIA_TRI', value: 10})}>Gán giá trị</button>
            <button onClick={handleOnClick} >Get API</button>
            <p>{ user.loading ? 'loading...' : JSON.stringify(user.data)}</p>
        </div>
    );
}

export default Reducer;