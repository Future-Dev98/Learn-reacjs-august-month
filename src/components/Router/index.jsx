import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MagicBox from '../MagicBox';
import Count from '../Count';
import PostList from '../PostList';
import Clock from '../Clock';
import Todo from '../../Features/Todo';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/magic_box" element={<MagicBox />} />
                <Route path="/count" element={<Count />} />
                <Route path="/post_list" element={<PostList />} />
                <Route path="/clock" element={<Clock />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>   
        </div>
    );
}

export default Router;