import React from 'react';

//import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'
import Item from './Item'




class Recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
           let data=this.props.data;
           data=data.splice(0,6);
           return (

               <div id="recommend">
                <div>
                    <h4>推荐歌单</h4>
                </div>

                <div style={{margin:"0 auto"}}>
                    <div className='recommend-list'>
                    {
                        data.map((data,index)=>{
                            return <Item  data={data} key={index} />
                        })

                    }

                    </div>
                 </div>
               </div>


        )}



}

export default Recommend;