import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'

class DayRecommend extends Component {
    constructor(props,contex){
        super(props,contex);
          this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
               333
            </div>
        )
    }
    componentDidMount(){

    }
    _getSongList(){
        
    }
}





export default DayRecommend;