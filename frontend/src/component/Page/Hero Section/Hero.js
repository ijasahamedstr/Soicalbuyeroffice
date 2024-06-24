import React from 'react';
import './Hero.css';
import Button from 'react-bootstrap/Button';


function HeroImage() {
  const mystyle = {
    fontFamily: "Noto Kufi Arabic",
    fontWeight: '400',
    textShadow: "0px  0px  10px  Red" 
  };

  const mystyle1 = {
    fontFamily: "Noto Kufi Arabic", 
    color: '#6164ff',
    fontWeight: '500',
    textShadow: "0px  0px  10px  black"  
  };

  const mystyle2 = {
    fontFamily: "Noto Kufi Arabic", 
    fontSize: 16,
    fontWeight: '400',
    position: 'relative',
    textShadow: "0px  0px  10px  Red"
  };

  const btn = {
    backgroundColor:'#6164ff',
    color :'#fff',
    marginTop: '20px',
    marginRight: '20px',
    minWidth: '140px',
    height: '45PX'
  };

  const btn1 = {
    color :'#fff',
    marginTop: '20px',
    marginRight: '20px',
    minWidth: '140px',
    height: '45PX'
  };

 return (
   <div className="p-7 text-center w-screen h-screen text-white" style={{
    backgroundImage: "url('https://usr.dokan-cdn.com/img/home/home.png')", height: 500, 
    backgroundColor: "#3D3D3D",marginTop: -24, paddingTop: '45px',fontFamily:'Noto Kufi Arabic'}}>
     <div class="container mx-auto flex py-24 items-center justify-center flex-col">
       <div class="text-center lg:w-5/12 w-full">
         <h1 style={mystyle}  className="my-4 text-5xl font-bold leading-tight">
         أفضل منصة
         </h1>
         <h1 style={mystyle1}  className="my-4 text-5xl font-bold leading-tight">
         لبيع وشراء المنتجات الرقمية
         </h1>
         <p style={mystyle2}  className="text-2xl mb-8">
         من خلال منصة يوزر يمكنك بيع وشراء المنتجات الرقمية بأمان وسلاسة
         </p>
       </div>
     </div>
     <div  className='btn'>
        <Button style={btn} variant="outline-primary">شراء حساب تواصل اجتماعي</Button>{' '}
        <Button style={btn} variant="outline-secondary">شراء حساب لعبة</Button>{' '}
        <Button  style={btn}  variant="outline-success">شراء خدمة</Button>{' '}
        <Button style={btn1} variant="outline-warning">بيع خلال المنصة</Button>{' '}
     </div>
       
   </div >
 );
}

export default HeroImage;