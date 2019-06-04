import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import history from '../../../containers/history/history'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style.css'
import axios from "axios";
class Login extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={

        }
    }
    render() {
        return (

            <div className='user-container'>
                <h1>Login</h1>
            </div>
        )
    }

    componentDidMount(){



    }




}


function mapStateToProps(state) {

    return {
        data:state.playList
    }
}

function mapDispatchToProps(dispatch) {


    return {

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Login);