import { Typography, Divider } from 'antd';
import 'antd/dist/antd.css';
import Filters from './Filters';
import TodoList from './TodoList';
import React from 'react';

const { Title } = Typography;

function Redux(props) {
    return (
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '90vh',
                textAlign: 'center'
            }}
        >
            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
}

export default Redux;