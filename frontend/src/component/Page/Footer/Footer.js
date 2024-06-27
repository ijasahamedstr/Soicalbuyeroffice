import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <>
            <div className="Footer" style={{marginTop:'50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-6" style={{marginBottom:'30px'}}>
                            <h3 style={{color:'rgb(97, 100, 255)'}}><span>WALEED</span>CODES</h3>
                            <p style={{fontFamily:'Noto Kufi Arabic'}}>
                            منصة يوزر
                            هي أفضل منصة لبيع وشراء حسابات مواقع التواصل الأجتماعي بسهولة تامة وأمان عالي وهي تابعة لشركة تطبيق دُكان لتقنية المعلومات المسجلة في وزارة التجارة بالمملكة العربية السعودية</p>
                            {/* <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                            <p><i class="fa-solid fa-envelope"></i> waleedishfaq1515@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>© USR.GG Platform, Powered By Ijas Ahamed L.L.C 2024</p>
            </div>
        </>
    )
}

export default Footer;