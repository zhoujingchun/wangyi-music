import React, { Component } from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import Player from './containers/player/player'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from './action/player'
import './index.css'
import axios from "axios";
class App extends Component {
    constructor(props,contex){
        super(props,contex);
      //  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {

        let data=this.props.data;
        return (

            <div className='app-container'>
                {this.props.children}

                {
                    data.length===undefined? <Player data={data}/>:''
                }


                </div>
        )
    }

    componentDidMount(){
        localStorage.setItem('user',[])

    }



}


function mapStateToProps(state) {

    return {
            data:state.playList
    }
}

function mapDispatchToProps(dispatch) {


        return {
            getMusicUrl: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
        }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);

