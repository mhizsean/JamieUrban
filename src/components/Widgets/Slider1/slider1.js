import React, { Component } from 'react';
import Slider from "react-slick";
import './slider1.css';



class Responsive extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }
      ]
    };
        return (
          <div className="slider">
            <h2 className="brand">Olabanji Jamie Urban </h2>
            <Slider {...settings}>
              <div>
                <h3 className="imag1"> 
                <img alt= "jamie logo" src="/images/single2.jpg"/>   
                </h3>
              </div>
              <div>
                <h3 className="imag2"><img alt= " 1" src="/images/couples2.jpg"/>   </h3>
              </div>
              <div>
                <h3 className="imag3"><img alt= "2" src="/images/shoes.jpg"/>   </h3>
              </div>
              <div>
                <h3 className="imag4"><img alt= "3" src="/images/engage2.jpg"/>   </h3>
              </div>
              <div>
                <h3 className="imag5"><img alt= "4" src="/images/sweat.jpg"/> </h3>
              </div>
              <div>
                <h3 className="imag6"><img alt= "5" src="/images/singlemale.jpg"/> </h3>
              </div>
            </Slider>
          </div>
        );
      }
    }
export default Responsive;