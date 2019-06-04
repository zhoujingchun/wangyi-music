import React from 'react';
import axios from 'axios'
//import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import './style.css'






class Icon extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {


        return (
            <div style={{margin:"0 auto"}}>


            <div id='Icon'>

                <ul>
                    <li> <Link to='/dayRecommend'><i className='icon-rili'></i>  </Link></li>
                    <li> <Link to='/gedan'> <i className='icon-gedan'></i></Link> </li>
                    <li> <Link to='/rank'><i className='icon-paihangbang'></i></Link>    </li>
                    <li>  <Link to=''><i className='icon-diantai'></i></Link>        </li>
                </ul>

                <ul id='font-command'>
                    <li>每日推荐</li>
                    <li>歌单</li>
                    <li>排行榜</li>
                    <li>电台</li>
                </ul>


            </div>
            </div>
        )
    }




}

export default Icon;