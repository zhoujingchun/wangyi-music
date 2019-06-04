import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import history from '../../containers/history/history'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import axios from "axios";
class User extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            userId:'',
            profile:''
        }
    }
    render() {

        return (

            <div className='user-container'>
                 <h1>user</h1>


            </div>
        )
    }

    componentDidMount(){
      let user=localStorage.getItem('user')
        console.log(user);
        //判断是否登陆
        if(!user){
             history.push('/login')
        }

        /*axios.get('/login?email=zoujingyu519@163.com&password=Zjy980519.').then(res=>{
       console.log(res.data);
            this.setState({
                userId:res.data.bindings[0].userId,
                profile:res.data.profile
            })
         return res.data.bindings[0].userId
     }).then(userId=>{
         //console.log(data);
         this.getUserDetail(userId);
         this.getUserStore()
         this.getUserAction(userId)
         this.getUserSongList(userId)
     });*/


    }

    //获得用用户详情
    getUserDetail(userId){

       // let userId=this.state.userId;
        ///user/subcount

        axios.get('/user/detail?uid='+userId).then(res=>{
            console.log(res.data)
        })
    }

    //获取用户信息 , 歌单，收藏，mv, dj 数量
    getUserStore(userId){

       // let userId=this.state.userId;
        ///user/subcount

        axios.get('/user/subcount').then(res=>{
            console.log(res.data)
        })
    }
    //获取用户动态
    getUserAction(userId){
        // let userId=this.state.userId;
        ///user/subcount
        axios.get('/user/event?uid='+userId).then(res=>{
            console.log(res.data)
        })
    }
    //获取用户歌单
    getUserSongList(userId){

        axios.get('user/playlist?uid='+userId).then(res=>{
            console.log(res.data)
        })
    }



}


function mapStateToProps(state) {

    return {
        data:state.playList
    }
}

function mapDispatchToProps(dispatch) {


    return {

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(User);