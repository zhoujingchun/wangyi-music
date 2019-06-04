import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import history from '../../containers/history/history'



import SearchInput from '../SearchInput/searchInput'

import './style.css'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-prev"></i>
                </span>
                <div className="input-container">
                    &nbsp;
                    <SearchInput   value={this.props.keyword || ''} enterHander={this.enterHandle.bind(this)}/>
                </div>

            </div>
        )
    }

    clickHandle() {
        history.push('/')
    }
    enterHandle(value,list) {
        history.push(
            { pathname:'/search/' + encodeURIComponent(value),
                data:list

        });

       }


}

export default SearchHeader