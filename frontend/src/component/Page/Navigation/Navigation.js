import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar  expand="lg" className="p-3 mb-2 bg-dark  text-white bg-body-tertiary" data-bs-theme="dark">
      <Container className='container-nav'>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>
          <Nav>
          <Nav.Link  href="/ ">الرئيسية</Nav.Link>
            <Nav.Link href="/التواصل الإجتماعي">التواصل الإجتماعي</Nav.Link>
            <Nav.Link href="/الألعاب">الألعاب</Nav.Link>
            <Nav.Link href="/الخدمات">الخدمات</Nav.Link>
            <Nav.Link href="/الأعضاء">الأعضاء</Nav.Link>
            <Nav.Link href="/طلبات المستخدمين">طلبات المستخدمين</Nav.Link>
            <Nav.Link href="/قائمة المتصدرين">قائمة المتصدرين</Nav.Link>
            <Nav.Link href="/متجر المنصة">متجر المنصة</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;