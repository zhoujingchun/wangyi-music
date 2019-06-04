import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import './static/css/common.css'  //引人css
//import './static/css/font.css'
import './static/css/font1.css'


import {Provider} from 'react-redux'
import {Router, Route} from 'react-router-dom';
import history from './containers/history/history'
import Home from './containers/home/home';
import DayRecommend from './containers/day-Recommend/index'
import Gedan from './containers/gedan/gedan'
import Rank from './containers/rank/rank'
import Search from './containers/search/search'
import SearchDetail from './containers/search-detail/index'
import GedanDetail from './containers/gedanDetail/gedanDetail'
import User from './containers/user/user'
import Login from './containers/user/login/login'


import configureStore from './store/configureStore'



//创建Redux store 对象
const  store=configureStore();


ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <App >
            <Route  exact={true} path="/" component={Home}/>
            <Route   path="/dayRecommend" component={DayRecommend}/>
            <Route   path="/gedan" exact={true} component={ Gedan}/>
            <Route   path="/gedan/:id"  component={GedanDetail}/>
            <Route   path="/search"  exact={true} component={Search}/>
            <Route   path="/search/:detail"  exact={true} component={SearchDetail}/>
            <Route   path="/rank" component={Rank}/>
            <Route   path="/user" component={User}/>
            <Route   path="/login" component={Login}/>
        </App>
    </Router>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
