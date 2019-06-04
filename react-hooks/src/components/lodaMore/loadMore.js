import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//import './style.css'

class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore?<span>加载中</span>:
                        <span onClick={this.LoadMoreHand.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    LoadMoreHand(){


        this.props.LoadMoreData()
    }

    componentDidMount() {
        //向下滚动是加载更多
        const wrap=this.refs.wrapper;


        const {isLoadingMore,LoadMoreData}=this.props;
        //运用节流  不让scroll 一直触发

        let timeoutId;
        let callback=function(){

            //getBoundingClientRect().top  调用api 获得元素离视窗距离
            const top=wrap.getBoundingClientRect().top;
            const windowHeight = window.screen.height;



            if (top-16 < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                LoadMoreData()
            }

        };

        window.addEventListener('scroll',()=>{
            if(isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId=setTimeout(callback,50)

        })



    }

}

export default LoadMore
