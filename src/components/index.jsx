import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PostList from './PostList';
import queryString from 'query-string';
import SearchForm from './SearchForm';
import Clock from './Clock';

function Posts(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 100
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10
    });
    function handlePageChange(newpage) {
        const newFilter = {
            ...filters,
            _page: newpage,
        };
        setFilters(newFilter);
    }

    function hanleFilterSearch(value) {
        const newFilters = {
            ...filters,
            _page: 1,
            title_like: value.value
        }

        setFilters(newFilters);
    }

    try {
        useEffect(() => {
            async function fetchPostList() {
                const paramString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const resoure = await fetch(requestUrl);
                const resoureJOSN = await resoure.json();
                const { data, pagination } = resoureJOSN;
                setPostList(data)
                setPagination(pagination)
            }

            fetchPostList();
        }, [filters]);
    } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
    }
    return (
        <div>
            <Clock />
            <SearchForm onSubmit={hanleFilterSearch} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default Posts;