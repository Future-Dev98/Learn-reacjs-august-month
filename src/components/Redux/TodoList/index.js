import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {addTodo} from '../../../redux/actions';
import { todoListSelector } from '../../../redux/selectors';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(state => todoListSelector(state));
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const hanleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name:todoName,
        completed: false,
        priority: priority
      })
    );
    setTodoName('');
    setPriority('Medium');
  }
  
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo, index) => {
          return <Todo name={todo.name} priority={todo.priority} key={todo.id} />
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={(e) => setPriority(e)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={hanleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}