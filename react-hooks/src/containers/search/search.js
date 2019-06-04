import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from "axios";
import SearchHead from '../../components/searchHead/index'
import './style.css'
import { Carousel } from 'antd-mobile';
import SearchHot from   '../../components/search-hot/searchHot'
import SearchHistory from '../../components/search-history/index'
import history from "../history/history";


class Search extends Component {
    constructor(props,contex){
        super(props,contex);
         this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
             searchDetail:[],
              change:false,
               searchHot:'',
               hotValue:''
        }
    }
    render() {
       // console.log(this.props.location.pathname);
        ///console.log(this.props.location.pathname.replace('/search/',""));
        let historyList=localStorage.getItem('history');
         // 获取历史列表，并将其转化为数组形式
        historyList=JSON.parse(historyList);
        console.log(historyList)

        return (
              <div className='search-container'>
                  <SearchHead />
                  <SearchHistory    deleteHistory={this.deleteHistory.bind(this)}/>
                  <h4>热搜榜</h4>
                  {
                      this.state.searchHot?
                          <SearchHot
                              getHotValue={this.getHotValue.bind(this)}
                          data={this.state.searchHot} />:''
                  }


            </div>
        )
    }

    componentDidMount(){
        this.getSearchHot()
    }
    getSearchHot(){
          axios.get('/search/hot').then(res=>{
               console.log(res.data.result.hots)
              this.setState({searchHot:res.data.result.hots})
          })

    }

    deleteHistory(){
        localStorage.removeItem('history');
        this.setState({change:!this.state.change})
    }
    getHotValue(e){
        let value=e.target.innerText
        axios.get('/search?keywords= '+value).then(res=>{
            history.push(
                { pathname:'/search/' + encodeURIComponent(value),
                    data:res.data.result.songs

                });

        });

    }



}





export default Search;
