import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'
import './style.css'



class ItemRecommend extends Component {
    constructor(props,contex){
        super(props,contex);

    }
    render() {
        let data=this.props.data;


        return (
            <div className='rank-recommend-item'>
                <img src={data.coverImgUrl} alt=""/>
                 <p className='rank-recommend-time'>{data.updateFrequency}</p>
                <p>{data.name}</p>

            </div>
        )
    }


}





export default ItemRecommend;