import React from 'react';
import {Avatar} from '@material-ui/core';
import { Dropdown } from 'react-bootstrap';
import './AvatarButton.css';

function AvatarButton() {
  return (
    <Dropdown id="dropdown">
    <Dropdown.Toggle bsPrefix="p-0" id="toggle">
<Avatar id="Avatar" alt="Remy Sharp" src={{ width: 600, height: 200 }}/>

</Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/YourPage">Your Page</Dropdown.Item>
    <Dropdown.Item href="/SubmitContent">Submit Content</Dropdown.Item>
        <Dropdown.Item href="/AccountSettings">Account Settings</Dropdown.Item>
    <Dropdown.Item href="/GignOut">Sign Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

)
}

export default AvatarButton;

//USe this: https://www.npmjs.com/package/react-avatar
