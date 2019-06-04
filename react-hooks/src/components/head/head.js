import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'
import history from '../../containers/history/history'

import './style.css'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header">

              <span className="back-icon" >
                    <i className="icon-chevron-left" onClick={this.HandClick.bind(this)}></i>
                </span>
                <h1>{this.props.name}</h1>
            </div>
        )
    }

    HandClick(){
        if(this.props.backRouter){
            history.push(this.props.backRouter)
        }else{
            history.push('/')
        }
    }

}

export default Header