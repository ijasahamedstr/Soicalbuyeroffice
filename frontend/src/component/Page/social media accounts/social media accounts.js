import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './social media account.css';


function Soicalaccount() {
  const marginLeftValue = '15px', marginTopValue = '50px',marginBottomValue = '20px';
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <>
      <div className="container">
      <div className="row">
      <div className="slider-container">
      <div style={{ marginLeft: marginLeftValue,marginTop:marginTopValue,marginBottom:marginBottomValue}}><h2>🔥 حسابات تواصل إجتماعي مميزة</h2></div>
      <Slider {...settings}>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="p-3">
          <div className='feature'>
          <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/instagram.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
          </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/snapchat.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/tiktok.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/instagram.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/tiktok.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/snapchat.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem', backgroundColor:'#F2F3F4'}}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/instagram.png" />
            <Card.Body>
              <Card.Title>@Ijas Ahamed</Card.Title>
              <Card.Text>
              <span><div class="card__author  card__author--verified  ">
              <img src="https://usr.dokan-cdn.com/public/avatars/e334bb8a73397609e060efed2fb27f96.gif" alt="" /><a href="https://usr.gg/meshari">@Ijas Ahamed</a></div></span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#"><div className='card__likes'><span className='card__likes1'>🚀بوست</span></div></Card.Link>
              <Card.Link href="#">
              <div class="card__price">
              <span>السعر</span>
              <span dir="rtl">
              <span class="account_price_previe">499$</span>
              </span>
              </div>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
      </Slider>
    </div>
    </div>
    </div>
      </>
    );
  }
  
  export default Soicalaccount;