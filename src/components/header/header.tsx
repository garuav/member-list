import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../../assets/imgs/logo.png';
import './header.scss';
const header = () => {
    return(
        <>
         <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
       
        className="d-inline-block  align-top"
      />{' '}
     
    </Navbar.Brand>
  </Navbar>
      
      </>
    )
}
export default header;