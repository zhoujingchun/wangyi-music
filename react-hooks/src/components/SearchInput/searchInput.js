import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  axios from 'axios';

import './style.css'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: '',
            searchSong:[]
        }
    }
    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                onKeyUp={this.enterKeyUp.bind(this)}
            />
        )
    }
    componentDidMount(){
        this.setState({
            value:this.props.value||'',

        })
    }
    onChange(e){
        this.setState({
            value:e.target.value
        })
    }
    enterKeyUp(e){
        if(e.keyCode!==13){
            return ;
        }
        //用localStorage 储存
        var historyList=JSON.parse(localStorage.getItem('history'));
        //如果没有 history 创建一个空数组
        if(!historyList){
            historyList=[]
        }
        historyList.unshift(e.target.value);
         //把新的历史纪录放在前面，并且去重
        localStorage.setItem('history',JSON.stringify([... new Set(historyList)]));

        let value=e.target.value


         axios.get('/search?keywords= '+e.target.value).then(res=>{
             this.setState({searchSong:res.data.result.songs})

             if(this.props.enterHander){
                 this.props.enterHander(value,this.state.searchSong)
             }
             if(this.props.enterHandle){
                 this.props.enterHandle(value,this.state.searchSong)
             }


         });



    }



}

export default SearchInput