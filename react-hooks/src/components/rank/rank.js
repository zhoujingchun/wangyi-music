import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import  Item from   './item'
import  ItemRecommend from   './item-recommend'

class DayRecommend extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
             const  data=this.props.data;
             const data1=data.splice(0,4);
             const data2=data.splice(0,6)


             return (
            <div>
                  <h3>官方推荐</h3>
                {
                    data1.map((data,index)=>{
                     return    <Item data={data} key={index}/>
                    })
                }
                <h3 className='recommend-head'>推荐榜</h3>

                 <div className='rank-recommend'>
                     {
                         data2.map((data,index)=>{
                            return  <ItemRecommend data={data} key={index} />
                         })

                     }
                     </div>

                <h3 className='recommend-head'>更多榜单</h3>

                <div className='rank-recommend'>
                    {
                        data.map((data,index)=>{
                            return  <ItemRecommend data={data} key={index} />
                        })

                    }
                </div>



            </div>
        )
    }

}





export default DayRecommend;