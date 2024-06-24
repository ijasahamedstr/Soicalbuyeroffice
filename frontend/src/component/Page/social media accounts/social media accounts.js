import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


function Soicalaccount() {
  const marginLeftValue = '15px', marginTopValue = '50px',marginBottomValue = '50px';
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://usr.dokan-cdn.com/instagram.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="p-3">
        <div className='feature'>
        <Card style={{ width: '18rem',border:'none'}}>
          <Card.Body>
            <Card.Title className='feature' style={{ display: 'flex'}}><span className='feature__icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg></span><div className='eature__title'>المحفظة</div></Card.Title><br></br>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            يمكنك سحب مبالغ المبيعات الخاصة بك من خلال طريقة الدفع المفضلة لديك كالتحويل البنكي والعملات الرقمية وبايبال
            </Card.Text>
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