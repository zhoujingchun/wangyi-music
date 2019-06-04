import React from 'react';
import axios from 'axios'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'
import Head from  '../../components/home-header/header'
import Category from  '../../components/Category/Category'
import Icon from  '../../components/Icon/Icon'
import Recommend from  '../../components/recommend/recommend'
import RecommendMv from '../../components/recommendMv/recommendMv'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
       this.state={
           recommend:[],
           recommendMv:[]
       }

    }
    render() {
        return (
            <div id='container'>

                 <Head/>
                 <Category/>
                  <Icon/>
                <div>  {/*歌单组件*/}
                    {this.state.recommend.length>0?
                        <Recommend data={this.state.recommend} />
                        :<h3> 加载中...</h3>
                    }
                </div>

                <div>  {/*推荐mv组件*/}
                    {this.state.recommendMv.length>0?
                        <RecommendMv data={this.state.recommendMv} />
                        :<h3> 加载中...</h3>

                    }
                </div>
            </div>
        )
    }
     componentDidMount(){
        this.getRecommendSongList(); //推荐歌单
         this.getRecommendMv()   //推荐mv

    }
    getRecommendSongList(){
        axios.get('/personalized').then(res=>{
            this.setState({
                recommend:res.data.result
            })
        })
    }
    getRecommendMv(){
        axios.get('/personalized/mv').then(res=>{
            this.setState({
                recommendMv:res.data.result
            })

        })

    }



}

export default Home;