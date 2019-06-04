import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import './style.css'

class SearchHot extends Component {
    constructor(props,contex){
        super(props,contex);
          this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
           let data=this.props.data;

        return (

            <div className='search-hot-container'>

                {
                    <ul className='search-hot-list'>
                        {data.map((data,index)=>{
                            return  <li     key={index} className={index<3?'search-hot-item hot-active':'search-hot-item '}>
                                             { <span>{index+1} </span>}

                                             {  <span onClick={(e)=>{this.props.getHotValue(e)}}>{data.first} </span>}
                                         </li>
                        })}

                </ul>

                }
            </div>
        )
    }

    componentDidMount(){


    }









}

export default SearchHot;