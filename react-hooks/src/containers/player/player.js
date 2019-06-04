import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'; //性能优越  简介https://www.cnblogs.com/xzqyun/p/9
import NormalPlayer from '../../components/normal-player/index'
import axios from 'axios'


import './sytle.css'
import Lyric from "lyric-parser";

let _this,newSong='' , marginTop=0 ,currentLyric,timeout;   // 设置一个歌词维护属性
class  Player extends Component {
    constructor(props,contex){
        super(props,contex);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            fullScreen:false,
            play:true,
            tlyric:'',
            lyc:'',
            currentLineNum:0,
            currentLyric:'',
            currentIndex:0,
            playList:[],
            song:'',
            a:false
           /* arist:this.props.data.arist,
            song:this.props.data.song[0]*/


        }
    }
    render() {
        let data=this.props.data;
        //console.log(data)
        let arist=data.arist;
        let  {fullScreen,play,currentLineNum, currentLyric}=this.state;
       // console.log(arist.album.arist.img1v1Url)
        //console.log(arist.album.artist.img1v1Url)



        return (
            <div className='player-container'  >


                          <NormalPlayer  goPre={this.pre.bind(this)} goNext={this.next.bind(this)}  fullScreen={this.state.fullScreen} currentLyric={currentLyric} currentLineNum={currentLineNum} data={data} changeFullScreen={this.changeFullScreen.bind(this)}  />
                          <div className='min-player'    >
                                <div  style={{width:"70%",height:"100%"}}  onClick={()=>{this.changeFullScreen()}} >
                              <p className='arist-pic' >     <img src={arist.al?arist.al.picUrl:arist.album.artist.img1v1Url}     alt=""/></p>
                              <p className='song-list-item-name' style={{left:"17%"}}>{arist.name}</p>
                              <p className='song-list-item-ar'   style={{left:"17%",color:' #7f7f7f',marginTop:'2%'}}  >{arist.ar?arist.ar[0].name:arist.artists[0].name}</p>

                                </div>
                              <div className='song-control'>
                              <p className='song-play' onClick={()=>{this.changePlay()}} >
                                  <i className={play?'icon-0006 bofang-playing':'icon-bofang bofang-playing '}></i>
                              </p>

                                  <p className='song-item'><i className='icon-zuo'></i></p>
                              </div>
                          </div>

                <audio  id='audio' src={data.song[0].url}  ></audio>
              </div>

        )
    }
    componentDidMount(){
        this.loop()
    }
    componentWillUpdate(){
        //console.log('dada')
       // this.loop()
    }
    componentWillReceiveProps(nextProps){

        console.log(nextProps.data);

        //let id=this.props.data.song[0].id;
        this.props.data.song[0].id=nextProps.data.song[0].id;
        this.props.data.song[0].url=nextProps.data.song[0].url;

            this.setState({
                a:!this.state.a,
                play:false
            });


        this.loop()

        setTimeout(()=>{
            this.makePlay()
        },1000)

    }
    makePlay(){
        this.setState({
            play:true
        });
        let audio=document.getElementById('audio');
        audio.play();


    }
    shouldComponentUpdate(){
       // console.log('dadadadada')
    }
    loop(){
        let audio=document.getElementById('audio');
        console.log(audio);
        this.playing(audio)
    }


     pre(){
         let  {playList,currentIndex}=this.props.data,index=0;
         console.log(playList[currentIndex-1])//主页信息
         //console.log(currentIndex);
         //获取下一首的url
         let id=playList[currentIndex-1].id;
         this.getUrl(id);
         console.log(this.getUrl(id));
         this.props.data.arist=playList[currentIndex-1];
         this.props.data.currentIndex=currentIndex-1;
         //  this.props.data.song=this.state.song;
         setTimeout(()=>{if(this.state.song){
             let getSongID=this.state.song[0].id;

             if(currentLyric){
                 currentLyric.stop();
             }
             this.getlyric(getSongID);
             let audio=document.getElementById('audio');
             audio.play()
         }},1500);

         this.setState({a:!this.state.a})


     }
      next(){
        let  {playList,currentIndex}=this.props.data,index=0;

          // console.log(playList[currentIndex+1])//主页信息
            //console.log(currentIndex+1);
           //获取下一首的url
          let id=playList[currentIndex+1].id;
             this.getUrl(id);
           //console.log(this.getUrl(id));
          this.props.data.arist=playList[currentIndex+1];
          this.props.data.currentIndex=currentIndex+1;

        //  this.props.data.song=this.state.song;
          //console.log(this.state.song);


          setTimeout(()=>{if(this.state.song){
              let getSongID=this.state.song[0].id;
              if(currentLyric){
                  currentLyric.stop();
              }
              this.getlyric(getSongID)
              let audio=document.getElementById('audio');
              audio.play();

              marginTop=0
          }},1500);
          this.setState({a:!this.state.a})

      }


   getUrl(id){
        axios.get('/song/url?id='+id).then(res=>{
          this.props.data.song=res.data.data;
          this.setState({song:res.data.data})

      });
      }

    changeFullScreen(){
         let {fullScreen}=this.state;
        this.setState({ fullScreen:!fullScreen})
    }
    changePlay(){
        let audio=document.getElementById('audio');
        let {play}=this.state;
        this.setState({ play:!play});
        if(play){
            audio.pause()
        }else{
            audio.play()
        }

    }
    playing(dom){
        if(dom!==null){
            dom.volume=1;
            if(this.state.play){

                console.log(dom.play())
                dom.play();
            }else{

                dom.pause()
            }
            let id=this.props.data.song[0].id;
            this.getlyric(id)


        }
    }
    //获取歌词

    getlyric(id){
        currentLyric=null
        let lyricwrapper=document.getElementsByClassName('lyric-wrapper')[0];
        let _this=this
        lyricwrapper.style.marginTop=0+'px';
        axios.get('/lyric?id='+id).then(res=>{

            if(res.data.lrc)
            {
                currentLyric=new Lyric(res.data.lrc.lyric,(_this)=>{this.handleLyric(_this)});
                console.log(res.data.lrc.lyric);
            }

            //  console.log(currentLyric);
            this.setState({currentLyric:currentLyric});

                if (this.state.play&&currentLyric) {
                    currentLyric.play()
                }else if(!this.state.play&&currentLyric){
                    currentLyric.stop()
                }
        });



    }
   //歌词的回调函数
     handleLyric({lineNum, txt}) {

            let currentNumber=0;
            //console.log(lineNum);
            this.setState({currentLineNum:lineNum});
            //middle-r
            let lyricList=document.getElementsByClassName('middle-r')[0];
            let lyricwrapper=document.getElementsByClassName('lyric-wrapper')[0];
            let lyricLine=document.getElementsByClassName('lyricLine')
            /* console.log(lyricList);
             console.log(lyricLine);*/

            marginTop+=lyricLine[lineNum].clientHeight;
            lyricwrapper.style.marginTop=-lineNum*21+'px'

         /* this.playingLyric = txt*/
          }



}





export default  Player;