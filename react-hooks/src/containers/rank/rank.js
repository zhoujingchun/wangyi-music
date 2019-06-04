import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'
import  Rank from  '../../components/rank/rank'
import Head from '../../components/head/head'

class DayRecommend extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            topList:[],
            topListDetail:[]
        }
    }
    render() {
            let data=this.state.topListDetail;

        return (
            <div>
                <Head name='排行榜'/>
                {
                   data.length>0? <Rank data={data}/>:
                       <h1>数据加载中</h1>
                }
            </div>
        )
    }
    componentDidMount(){
       // this._getRank();
        this._getRankDetail()

    }
    _getRank(){
        axios.get('/toplist').then(res=>{
            return res.data.list
        }).then(data=>{
            console.log(data);

        })}

        _getRankDetail(){
           axios.get('/toplist/detail').then(res=>{
                return res.data.list
            }).then(data=>{
               this.setState({
                   topListDetail:data
               })

            })
        }


}





export default DayRecommend;