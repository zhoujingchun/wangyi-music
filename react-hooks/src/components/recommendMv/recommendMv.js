import React from 'react';
import axios from 'axios'
//import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './item'
import './style.css';



class RecommendMv extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let data=this.props.data;
        return (
            <div id='recommend-mv'>
                    <h4>热门mv</h4>
                    { data.map((data,index)=>{
                            return <Item data={data} key={index} />
                        })
                    }
                    </div>)
    }
}

export default  RecommendMv;