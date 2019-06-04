import React from 'react';
import Item from '../recommend/Item'
import '../recommend/style.css'

class GedanList extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let data=this.props.data;

        return (
            <div className='recommend-list'>
                { data.map((data,index)=>{
                        return <Item  data={data} key={index} />
                    })

                }

            </div>


        )}



}

export default GedanList;