import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lyric from 'lyric-parser'
import { TransitionGroup } from 'react-transition-group'

import './style.css'
  let touch={},currentShow;
class App extends Component {
    constructor(props,contex){
        super(props,contex);
        //  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)

        this.state={
            opacity:true

        }

    }
    render() {
            const {changeFullScreen,currentLyric,currentLineNum,fullScreen}=this.props
           let data=this.props.data;

           return (

            <div     className={fullScreen?"normal-player":"normal-player hide"}>

                <div className="background">
                    <img  src={data.arist.al?data.arist.al.picUrl:data.arist.album.img1v1Url}/>
                </div>

                <div className="top">
                    <div className="back"  >
                    <i className="icon-chevron-left" onClick={changeFullScreen}></i>
                </div>
                <h3 className="title" >{data.arist.name}</h3>
                    <h3 className="subtitle" > {data.arist.ar?data.arist.ar[0].name:data.arist.artists[0].name}</h3>
            </div>



              <div   className='middle-container' onTouchStart={this.middleTouchStart}
                    onTouchMove={this.middleTouchMove}
                    onTouchEnd={(e)=>(this.middleTouchEnd(e,this))}>
                    <div className="middle">

                        <div  className={this.state.opacity?"middle-l":"middle-l  add-opacity"}   ref="middleL">
                           <div className="cd-wrapper" ref="cdWrapper">
                         <div className="cd" >
                <img className="image" src={data.arist.al?data.arist.al.picUrl:data.arist.album.artist.img1v1Url}/>
                         </div>
                                   </div>
                                        </div>
                                      </div>




                <div className= "middle-r"   ref="lyricList">
            <div className="lyric-wrapper"  >
                {
                   currentLyric?
                       <div >
                           {
                              currentLyric.lines.map((line,index)=>{
                                  return  <p ref="lyricLine"   key={index}
                                             className={ currentLineNum===index?'lyricLine  current':'lyricLine'}> {line.txt}</p>
                               })
                           }

                               </div>:''
                }

            </div>
         </div>

              </div>

                <div className="bottom">
            <div className="dot-wrapper">
                <span className="dot" ></span>
             <span className="dot" ></span>
    </div>
            <div className="operators">

            <p className="i-left1" ><i  className="icon-suijibofang"></i></p>
            <p className=" i-left2" ><i onClick={this.handerClickGoPre.bind(this)}  className="icon-zuobian"></i></p>
            <p className="i-center" ><i className='icon-bofang'></i></p>
            <p className="i-right1" ><i   className="icon-zuo"></i></p>
            <p className="i-right2"><i  onClick={this.handerClick.bind(this)} className="icon-you" ></i></p>
    </div>
    </div>

            </div>
        )
    }
    componentDidMount(){




    }
    handerClick(){
        console.log('aa')
        this.props.goNext()
    }
    handerClickGoPre(){
        console.log('aa')
        this.props.goPre()
    }
    middleTouchStart(e){
       // e.returnValue=false;
        e.returnValue=false;


      // let touch={};
         touch.initiated = true;
            // 用来判断是否是一次移动
           touch.moved = false;
           //console.log(e.touches[0])
        let touches=e.touches[0];
      touch.startX = touches.pageX;
      touch.startY = touches.pageY;


    }
   middleTouchMove(e){


        e.returnValue=false;

       if (!touch.initiated) {
           return
       }
       const touches = e.touches[0];
       const deltaX = touches.pageX - touch.startX;
       const deltaY = touches.pageY - touch.startY;
       if (Math.abs(deltaY) > Math.abs(deltaX)) {
           return
       }
       if (!touch.moved) {
           touch.moved = true
       }
       const left = currentShow === 'cd' ? 0 : -window.innerWidth;
       const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX));
       touch.percent = Math.abs(offsetWidth / window.innerWidth);
       let lyricList=document.getElementsByClassName('lyric-wrapper')[0];
       let middleL=document.getElementsByClassName('middle-l')[0];
        lyricList.style.transform = `translate3d(${offsetWidth}px,0,0)`;
      // console.log(touch);
        lyricList.style.transitionDuration = 0;
       lyricList.style.opacity = 1 - touch.percent
        middleL.style.opacity = 1
        middleL.style.transitionDuration = 0



    }
   middleTouchEnd(e){
        e.returnValue=false;


       if (!touch.moved) {
           return
       }
       let offsetWidth;
       let opacity;

       if (currentShow === 'cd') {
           if (touch.percent > 0.1) {
               offsetWidth = -window.innerWidth;
               opacity = 0;
               currentShow = 'lyric'
           } else {
               offsetWidth = 0;
               opacity = 1
           }
       } else {
           if (touch.percent < 0.9) {
               offsetWidth = 0;
              currentShow = 'cd';
               opacity = 1
           } else {
               offsetWidth = -window.innerWidth;
               opacity = 0
           }
       }

       const time = 300;
       let lyricList=document.getElementsByClassName('lyric-wrapper')[0];
       let middleL=document.getElementsByClassName('middle-l')[0];
       lyricList.style.transform = `translate3d(${offsetWidth}px,0,0)`;
       lyricList.style.opacity = 1;
           //middleL.style.opacity = opacity;
          // middleL.style.opacity = 0.5;
       //middleL.style.transitionDuration = `${time}ms`;
       touch.initiated = false;
       this.setState({opacity:!opacity})



    }






}


function mapStateToProps(state) {
    return {

         }}

function mapDispatchToProps(dispatch) {
      return {

         }}
export default connect(mapStateToProps,mapDispatchToProps)(App);