import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import './style.css'



class TopHead extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={

        }
    }

    render() {
        let data=this.props.data;

        return (
            <div className='gedan-detail-head'>
                <img src={data.coverImgUrl} className='background-img' alt=""/>
               <div className='gedan-detail-mid'>
                   <img src={data.coverImgUrl}  alt=""/>
                 <div className='gedan-detail-right'>
                     <h3 className='name-color'>{data.name}</h3>
                     <img src={data.creator.avatarUrl} alt=""/>
                     <p  className='gedan-detail-name'>{data.creator.nickname}</p>
                     <p  className='gedan-detail-decerise'>{data.description.slice(0,34)+'...'}</p>

                 </div>

               </div>



            </div>
        )
    }





}

export default TopHead;