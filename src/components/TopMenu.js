import React, { useState } from 'react';
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
  DropdownItem
} from 'reactstrap';

import logo from "../img/logo.jpg";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="TopMenu">
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">
              <img src={logo} height="50" alt="loading..." />
          </NavbarBrand>
          <h2>THE LION</h2>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">TRANG CHỦ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SẢN PHẨM</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">BLOG</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  LIÊN HỆ
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="#lien-he">Địa chỉ</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#lien-he">Email</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="#lien-he">Phone</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Example;