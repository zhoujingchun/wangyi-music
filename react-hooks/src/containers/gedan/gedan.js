import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'
import {Carousel} from "antd-mobile";
import {Link} from "react-router-dom";

import Head from '../../components/head/head'
import GeDanCategory  from    '../../components/gedan-Category/Category';
import GeDanList  from    '../../components/getdan-list/gedanList';
import LoadMore from '../../components/lodaMore/loadMore'


class Gedan extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[],
            loadMore:false,
            updateTime:''
        }
    }
    render() {

        let data=this.state.data;
         let  data1=data.splice(0,3);

         return (
            <div>
                <Head name={'歌单广场'}/>
                <GeDanCategory data={data1}/>
                <GeDanList data={data}/>
                <LoadMore LoadMoreData={this._getMoreGeDan.bind(this)} isLoadMore={this.state.loadMore}/>



            </div>
        )
    }
    componentDidMount(){
         this._getGeDanList();

    }

    _getGeDanList(){

         axios.get('/top/playlist?limit=15').then(res=>{
             let updataTime=res.data.playlists.slice(res.data.playlists.length-1)[0].updateTime;


             this.setState({
                 data:res.data.playlists,
                 updateTime:updataTime
             })
         })
    }
    _getMoreGeDan(){

         this.setState({
             loadMore:true
         });

        let {updateTime}=this.state;




        axios.get('/top/playlist/highquality?before'+updateTime+ 'limit=3').then(res=>{
            let updateTime=res.data.playlists.slice(res.data.playlists.length-1)[0].updateTime;
            this.setState({
                data:this.state.data.concat(res.data.playlists),
                updateTime:updateTime
            })
        });

        this.setState({
            loadMore:false
        });
    }
}

export default Gedan;
