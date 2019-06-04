import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import './style.css'

const changeNumber=function (data) {
    var num='';
    if(data>100000000){
        num=parseInt(data/100000000)+'亿'
    } else if(data>10000){
        num=num=parseInt(data/10000)+'万'
    }else {
        num=data
    }

    return num
};


class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
         this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
         let data=this.props.data;


         //coverImgUrl

        /*{
                   {   pathname:"/detail/"+data.id,  //路径
                             state:{data:data}       //要传递的参数  this.props.location.state.data;
                    }  }*/
        return (
            <div  className='recommend-item'  >
                {   data.picUrl?  <Link to={'/gedan/'+data.id}> <img src={data.picUrl} alt=""/>   </Link> :
                    <Link to={{ pathname:'/gedan/'+data.id ,state:'/gedan'}}>   <img src={data.coverImgUrl} alt=""/> </Link>
                }


                        <p className='item-playCount'> <i className='icon-icon-'></i>  <i>{changeNumber(data.playCount)}</i></p>
                        <p className='item-font'> {data.name}</p>


            </div>


        )}



}

export default Item;