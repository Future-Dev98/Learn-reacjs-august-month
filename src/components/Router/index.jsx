import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import MagicBox from '../MagicBox';
import Count from '../Count';
import PostList from '../PostList';
import Clock from '../Clock';
import Todo from '../../Features/Todo';
import NotFound from '../../Pages/NotFound';
import Home from '../../Pages/Home';
import Reducer from '../../hook/Reducer';
import CallBack from '../../hook/CallBack';
import Memo from '../../hook/Memo';
import CustomHook from '../../hook/CustomHook';
import CounterFeature from '../../Features/Counter';
import CssModule from '../Style/Css_Module';
import StyleComponents from '../Style/Style_Components';
import Redux from '../Redux';

function Router() {
    return (
        <div>
            <Switch>
                <Redirect from="/home" to="/" exact="exact"/>
                <Route path="/" component={CounterFeature} exact="exact"/>
                <Route path="/magic" component={MagicBox} exact="exact"/>
                <Route path="/magic_box" component={MagicBox} exact="exact"/>
                <Route path="/count" component={Count} exact="exact"/>
                <Route path="/post_list" component={PostList} exact="exact"/>
                <Route path="/clock" component={Clock} exact="exact"/>
                <Route path="/todo" component={Todo} exact="exact"/>
                <Route path="/reducer" component={Reducer}/>
                <Route path="/redux" component={Redux}/>
                <Route path="/callback" component={CallBack}/>
                <Route path="/memo" component={Memo}/>
                <Route path="/custom-hook" component={CustomHook}/>
                <Route path="/css_module" component={CssModule}/>
                <Route path="/style_component" component={StyleComponents}/>
                <Route component={NotFound}/>
            </Switch>
            {/* Switch chỉ nhận route đầu tiên được khai báo */}
            {/* khi exact=true lúc đó Route sẽ match khi Url=path */}

        </div>
    );
}

export default Router;