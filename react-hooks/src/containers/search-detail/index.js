import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import history from '../../containers/history/history'
import SearchInput from "../../components/SearchInput/searchInput";
import SearchList from '../../components/searchdetail/index'



class SearchDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            songList:[]
        }

    }
    render() {

        let   songList;
        if(this.state.songList.length){
            console.log(this.state.songList.length)
            songList=this.state.songList
        }else{

            songList=this.props.location.data
        }

        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-prev"></i>
                </span>
                <div className="input-container">
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''}  enterHandle={this.enterHandle.bind(this)} />
                </div>
                <div className='search-song-list'>
                    <SearchList data={songList} />
                </div>


            </div>
        )
    }

    clickHandle() {
        history.push('/search')
    }
    enterHandle(value,list) {
        console.log('dada')
        this.setState({
            songList:list
        })

    }



}

export default SearchDetail