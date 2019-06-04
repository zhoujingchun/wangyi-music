import React from 'react';
import axios from 'axios'
//import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css';

const changeNumber=function (data) {
    var num='';
    if(data>100000000){
        num=parseInt(data/100000000)+'亿'
    }else if(data>10000){
        num=num=parseInt(data/10000)+'万'
    }else {
        num=data
    }

    return num
};
//解析 事件
const  parseTime=function (time) {
    // 220000
    time=time/1000;
    var min=parseInt(time/60),
        s=time%60;
    time='0'+min+':'+s;
    return time

};
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

        let data=this.props.data;
        return (
            <div className='item-border'>
                    <div className='mv-item'>

                        <img src={data.picUrl} alt=""/>
                        <p className='bofang'><i className='icon-bofang'></i></p>
                        <p className='count'><i className='icon-icon-'></i> <i>{changeNumber(data.playCount)}</i> </p>
                        <p className='shichang'><i className='icon-paihangbang'></i><i>{parseTime(data.duration)}</i></p>
                    </div>
                    <div className='mv-detail'>
                        <p className='mv-item-name' >{'《'+data.name+'》'}</p>

                        <p> 作者：{data.artistName}</p>
                    </div>
            </div>

        )
    }




}

export default  Item;