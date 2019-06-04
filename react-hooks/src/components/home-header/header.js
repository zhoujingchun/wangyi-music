import React from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link}  from 'react-router-dom'

import './style.css'
import logo from './logo@2x.png'



class Head extends React.Component {
    constructor(props, context) {
        super(props, context);
       // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {


        return (

            <div className='container'>
                <div className='my'>
                        <Link to='/user'>
                        <p>  <i className='icon-user'></i> </p>
                        </Link>
                    </div>
                <div className='logo'>
                    </div>
                    <div className='font'>
                        <p> Cloud Music</p>
                    </div>

                <Link to='/search'>
                    <div className='icon-search icon'></div>
                </Link>

            </div>

        )
    }
}

export default  Head;