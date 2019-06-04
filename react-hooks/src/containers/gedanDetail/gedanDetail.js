import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'
import Head from  '../../components/head/head'
import TopHead from '../../components/gedanDetail/head'
import SongList from '../../components/songList/songList'


class GedanDetail extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]

        }
    }
    render() {
        let data=this.state.data;
        let backRouter


        if(this.props.location.state){
             backRouter= this.props.location.state
        }

        //  console.log(this.props)
       // console.log(this.props.match.params.id);//获取id
        return (
            <div   style={{height:"100%",width:"100%"}}>
                {
                    data.length===undefined?   <div style={{height:"100%",width:"100%"}}>
                        <Head name='歌单' backRouter={backRouter}/>
                        <TopHead data={data} />
                        <SongList  data={data.tracks} subscribedCount={data.subscribedCount}/>

                    </div>:''


                }
            </div>
        )
    }
    componentDidMount(){
        const  id=this.props.match.params.id;
        this._getGedanDetail(id)
    }
    _getGedanDetail(id){
        axios.get('/playlist/detail?id='+id).then(res=>{
            //console.log(res.data)
           // console.log(res.data.playlist.tracks)
            this.setState({
                data:res.data.playlist
            })


        })

    }




}

export default GedanDetail;