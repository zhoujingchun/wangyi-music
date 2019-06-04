import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9

//import './style.css'
import { Carousel } from 'antd-mobile';


class SearchHistory extends Component {
    constructor(props,contex){
        super(props,contex);

    }
    render() {
        // console.log(this.props.location.pathname);
        ///console.log(this.props.location.pathname.replace('/search/',""));
        let historyList=localStorage.getItem('history');
        // 获取历史列表，并将其转化为数组形式
        historyList=JSON.parse(historyList);
        return (

            <div className='search-history'>
                <div className='search-title'>
                    <h5 id='title-'>
                        历史纪录
                    </h5>
                    <p className='icon-shanchu' onClick={()=>{this.props.deleteHistory()}}></p>
                </div>
                <div className='search-history-list'>
                    {

                        /* <Carousel
              autoplay={true}
              infinite
              selectedIndex={1}
              afterChange={index => {this.setState({index:index});  }}
          >*/
                        historyList?
                            <Carousel selectedIndex={1} infinite autoplay={true}>
                                <ul className='search-list-ul'>

                                    {
                                        historyList.map((data,index)=>{
                                            return   <li key={index}> {data}</li>
                                        })}

                                </ul>
                            </Carousel>

                            :''
                    }

                </div>

            </div>

        )
    }




}





export default SearchHistory;