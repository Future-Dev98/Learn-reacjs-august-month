import {
    Col,
    Row,
    Input,
    Typography,
    Radio,
    Select,
    Tag
} from 'antd';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {statusFilterChange, searchFilterChange, prioritiesFilterChange} from '../../../redux/actions';

const {Search} = Input;

export default function Filters() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('All');
    const [priority, setPriority] = useState(['Medium', 'High', 'Low']);

    /**
     * Handle search field
     * 
     * @param object e 
     */
    const handleSearchOnChange = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilterChange(e.target.value));
    }

    /**
     * Handle status field
     * 
     * @param object e
     */
    const handleStatusOnChange = (e) => {
      setStatus(e.target.value);
      dispatch(statusFilterChange(e.target.value))
    }

    /**
     * Handle Priority field
     * 
     * @param array e
     */
    const handlePrioritiesOnChange = (value) => {
        setPriority(value);
        dispatch(prioritiesFilterChange(value))
      }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10
                    }}>
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder='input search text'
                    value={searchText}
                    onChange={handleSearchOnChange}/>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10
                    }}>
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group onChange={handleStatusOnChange} value={status} >
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10
                    }}>
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear="allowClear"
                    placeholder='Please select'
                    value={priority}
                    onChange={handlePrioritiesOnChange}
                    style={{
                        width: '100%'
                    }}>
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
            </Col>
        </Row>
    );
}
