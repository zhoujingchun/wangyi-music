import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom'
//import Item from './item'

var liArr=[];


var  getStyle=function(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}


    class GeDanCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
           arr:[
               {width:200, top:30, left:20, opacity:60, zIndex:3},
               {width:250, top:20, left:120, opacity:100, zIndex:4},
               {width:200, top:30, left:195, opacity:60, zIndex:3}
           ],
            flag:true,


        }
    }

    render() {
        const  data=this.props.data;
        return (
            <div className="slide" id="slide" >
                 <ul id='ul'  ref='ul'>{data.map((data,index)=>{
                     return  (
                            <li className='liList'  ref={(node) => (this._move())}   onClick={this.handlClick.bind(this,index)} key={index}>
                                <img src={data.coverImgUrl} alt=""/>
                                <p>  <i>{data.name}</i></p>
                            </li>
                            )
                    }) }
                    </ul>

            </div>
        )
    }

    componentDidMount(){
        let {arr}=this.state;


    }
    handlClick(index){
         let flag=this.state;
         //console.log(index)
        if(index === 0){
            if(flag){
                //点击之后将flag设置为false，这样在这个样式完全显示之前点击按钮没有变化
              this.setState({
                  flag:false
              });
                this._move(true);
            }

        }else if (index === 2) {
            if(flag){
                this.setState({
                    flag:false
                });
                this._move(false);
            }
        }

    }

    _move(bool){

        let slide = document.getElementById('slide');
        let ul = document.getElementById('ul');
        let liArr = ul.getElementsByTagName('li');
          let {arr}=this.state;
          //console.log(arr.push())


        for(var i=0;i<liArr.length;i++){


            //利用数组中的JSON语句，给图片设置样式
            this._animate(liArr[i],arr[i],function(){

                this.setState({
                    flag:true,
                })


            }.bind(this));

        }
       // console.log('dada')

        if(bool === true || bool === false){
            if(bool){
                //上一张，将第一个样式删除放到数组的最后位置
                arr.push(arr.shift());
                this.setState({
                    arr:arr
                })
            }else{

                //下一张，将最后一个样式删除放在数组的最前面
               arr.unshift(arr.pop());
                this.setState({
                    arr:arr
                })

            }
        }


    }
    _animate(ele,json,fn){
        this._getanimate(ele,json,fn)

    }
    _getanimate(ele,json,fn){
        //先清定时器
            clearInterval(ele.timer);

            ele.timer = setInterval(function () {
                //开闭原则
                var bool = true;
                //遍历属性和值，分别单独处理json
                //attr == k(键)    target == json[k](值)
                for(var k in json){
                    //四部

                    var leader;
                    //判断如果属性为opacity的时候特殊获取值
                    if(k === "opacity"){
                        leader = getStyle(ele,k)*100 || 1;
                    }else{
                        leader = parseInt(getStyle(ele,k)) || 0;
                    }

                    //1.获取步长
                    var step = (json[k] - leader)/10;
                    //2.二次加工步长
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    //3.赋值
                    //特殊情况特殊赋值
                    if(k === "opacity"){
                        ele.style[k] = leader/100;
                        //兼容IE678
                        ele.style.filter = "alpha(opacity="+leader+")";
                        //如果是层级，一次行赋值成功，不需要缓动赋值
                        //为什么？需求！
                    }else if(k === "zIndex"){
                        ele.style.zIndex = json[k];
                    }else{

                        ele.style[k] = leader + "px";
                    }
                    //4.清除定时器
                    //判断: 目标值和当前值的差大于步长，就不能跳出循环
                    //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
                    if(json[k] !== leader){
                        bool = false;
                    }
                }
                //console.log(1);
                //只有所有的属性都到了指定位置，bool值才不会变成false；
                if(bool){
                    clearInterval(ele.timer);
                    //所有程序执行完毕了，现在可以执行回调函数了
                    //只有传递了回调函数，才能执行
                    if(fn){
                        fn();
                    }
                }
            },25)
        }



}
export default GeDanCategory

