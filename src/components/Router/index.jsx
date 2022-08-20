import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MagicBox from '../MagicBox';
import Count from '../Count';
import PostList from '../PostList';
import Clock from '../Clock';
import Todo from '../../Features/Todo';

function Router() {
    return (
        <div>
            <Switch>
                <Route path="/magic" component={MagicBox} exact />
                <Route path="/magic_box" component={MagicBox} exact />
                <Route path="/count" component={Count } exact />
                <Route path="/post_list" component={PostList} exact />
                <Route path="/clock" component={Clock } exact />
                <Route path="/todo" component={Todo} />
            </Switch>
        {/* Switch chỉ nhận route đầu tiên được khai báo */}
        {/* khi exact=true lúc đó Route sẽ match khi Url=path */}
            
        </div>
    );
}

export default Router;