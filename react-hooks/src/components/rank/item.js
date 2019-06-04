import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import axios from  'axios'
import './style.css'


/*
*
* (3) [{…}, {…}, {…}]
0: {first: "别叫我达芬奇", second: "Lil Ghost小鬼"}
1: {first: "归去来兮", second: "花粥"}
2: {firs
* */

class Item extends Component {
    constructor(props,contex){
        super(props,contex);

    }
    render() {
            let data=this.props.data;

           // console.log(data.tracks[0].first)


        return (
            <div>
                <div className='rank-head'>
                     <img src={data.coverImgUrl} alt=""/>
                      <div className='rank-title'>
                         <p>{'1.'+data.tracks[0].first+'-'+data.tracks[0].second}</p>
                           <p>{'2.'+data.tracks[1].first+'-'+data.tracks[1].second}</p>
                           <p>{'3.'+data.tracks[2].first+'-'+data.tracks[2].second}</p>
                    </div>
                </div>
            </div>
        )
    }


}





export default Item;