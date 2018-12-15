import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Brand from'../../assets/images/brand.svg';

import Css from './menu.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      isOpen: false,
      lastScrollY : 0,
      navBarClass : 'sticky-top',
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
     window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {

    let {lastScrollY,navBarClass} = this.state;

    console.log('last',lastScrollY)
    console.log('current', window.scrollY)

    if(window.scrollY > lastScrollY && lastScrollY !== window.scrollY){
      if(navBarClass !== 'd-none')
        this.setState({navBarClass : 'sticky-top'});
    }

    if(window.scrollY < lastScrollY && lastScrollY !== window.scrollY){
      if( window.scrollY == 0 && lastScrollY > 0){
        if(navBarClass !== 'start')
          this.setState({navBarClass : 'sticky-top'});
      }
      else{
        if(navBarClass !== 'sticky-top')
          this.setState({navBarClass : 'sticky-top'}); 
      }  
    }
    
    if(lastScrollY !== window.scrollY){
          this.setState({lastScrollY : window.scrollY});
    }

  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    let {navBarClass} = this.state;
    let {lastScrollY} = this.state;
    let brand_height, brand_width;
    if(lastScrollY > 100){
      brand_height ="32px";
      brand_width = "75px";
    }else{
      brand_height ="64px";
      brand_width = "150px";
    }
    return (
        <Navbar color="dark" dark expand="md" className="fixed-top top-bar"   style={{backGroundColor : 'black', opacity : '.9'}}>
          <NavbarBrand href="/"><img className="ml-5" src={Brand} alt="brand" height={brand_height} width={brand_width}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Nosotros</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Soluciones
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">Marketing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Soporte</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contacto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}