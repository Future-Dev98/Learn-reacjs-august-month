import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './Pages/DetailPage';
import ListPage from './Pages/ListPage';

function Todo(props) {
    const match = useRouteMatch(); //nested Routing
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
            </Switch>
        </div>
    )
}

export default Todo;