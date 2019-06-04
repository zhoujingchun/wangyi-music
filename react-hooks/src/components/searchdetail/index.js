import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import {bindActionCreators} from "redux";
import * as userInfoActionsFromOtherFile from "../../action/player";
import connect from "react-redux/es/connect/connect";
import './style.css'
import axios from "axios";




class SearchList extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]

        }
    }
    render() {
        let data=this.props.data;
        console.log(data);
        return (
            <div className='search-song-list-container'>
                <div className='search-song-list-head'>

                    <div className='search-song-list-head-left'>
                        <i className='icon-bofang'> </i>
                        <p>播放全部 <span>共({data.length})首</span></p>
                    </div>

                    <div className='search-song-list-head-right'>
                        <p>  收藏 </p>
                    </div>
                </div>

                <div className='search-song-list'>
                    {
                        data.map((data,index)=>{

                            return (

                                <div key={index}  onClick={this.handleClick.bind(this,data,index)}  className='search-song-list-item' >
                                    <p className='search-song-list-item-name'>{data.name<15?data.name:data.name.slice(0,30)}</p>
                                    <p className='search-song-list-item-ar' >{data.artists[0].name}</p>
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
    componentWillReceiveProps(nextProps){
       //console.log(nextProps)


    }

   handleClick(data,index){
        console.log(index)
        axios.get('/song/url?id='+data.id).then(res=>{
            /*let data2=this.props.updateData;
            data2.song=res.data.data;
            data2.arist=data;
             data2.currentIndex=-1;
             data2.playList=[]*/

            this.props.updateData.update(
                {   arist:data,
                    song:res.data.data,
                    currentIndex:index,
                    playList:this.props.data,
                    mood:1})

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

export default connect(mapStateToProps,mapDispatchToProps)(SearchList);