import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd-mobile';


import { connect } from 'react-redux';
import './style.css';
const src1="http://p1.music.126.net/wqcx36lB0mOMiOI5UPc4HA==/109951164040701983.jpg" ;
const src2="http://p1.music.126.net/TaRhZ-Ra8UID-BUX5ywguA==/109951164040745655.jpg" ;
const src3="http://p1.music.126.net/iheFD5LyYDqcuPzA3YXBnQ==/109951164040734168.jpg" ;


    class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index:''
        };
    }


    render() {
        return (
              <div style={{margin:"0 auto"}}>


            <div id="repertoire">

                  <div className="banner">

                <Carousel
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    afterChange={index => {this.setState({index:index});  }}
                >

                    <Link

                        to=''
                        style={{ display: 'inline-block', width: '100%'}}>
                        <img
                            src={src1}
                            alt=""
                            className="banner-img"
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </Link>

                    <Link

                        to=''
                        style={{ display: 'inline-block', width: '100%'}}>
                        <img
                            src={src2}
                            alt=""
                            className="banner-img"
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </Link>

                    <Link

                        to=''
                        style={{ display: 'inline-block', width: '100%'}}>
                        <img
                            src={src3}
                            alt=""
                            className="banner-img"
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </Link>


                </Carousel>

                  </div>



                    <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
                </div>


              </div>
        )




    }

}
export default Category