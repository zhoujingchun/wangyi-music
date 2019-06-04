import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from 'axios';
import './style.css'
import {bindActionCreators} from "redux";
import * as userInfoActionsFromOtherFile from "../../action/player";
import connect from "react-redux/es/connect/connect";


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

class SongList extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]

        }
    }
       render() {
        let data=this.props.data;
        console.log(data)



        return (
            <div className='song-list-container'>
                <div className='song-list-head'>

                    <div className='song-list-head-left'>
                        <i className='icon-bofang'> </i>
                        <p>播放全部 <span>共({data.length})首</span></p>
                    </div>

                    <div className='song-list-head-right'>
                        <p> + 收藏   ({changeNumber(this.props.subscribedCount)})</p>
                    </div>
                </div>


                <div className='song-list'>
                    {
                        data.map((data,index)=>{

                            return (
                                <div key={index} className='song-list-item' onClick={this.handleClick.bind(this,data,index)}>
                                    <p>{index+1}</p>
                                     <p className='song-list-item-name'>{data.name}</p>
                                    <p className='song-list-item-ar' >{data.ar[0].name}-{data.al.name}</p>
                                </div>

                            )
                        })

                    }

                </div>



            </div>
        )
    }

   componentDidMount(){

        window.addEventListener('scroll',function (e) {
            e.preventDefault()

        })
   }


    handleClick(data,index){
        axios.get('/song/url?id='+data.id).then(res=>{
                       /*let data2=this.props.updateData;
                       data2.song=res.data.data;
                       data2.arist=data;
                        data2.currentIndex=-1;
                        data2.playList=[];*/

                       this.props.updateData.update({arist:data,song:res.data.data,currentIndex:index,playList:this.props.data,mood:1})

            })

    }





}

function mapStateToProps(state) {

    return {
    }
}

function mapDispatchToProps(dispatch) {

    return {
        updateData: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SongList);
