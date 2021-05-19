import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
