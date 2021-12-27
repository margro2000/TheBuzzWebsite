import React from 'react';
import {Avatar} from '@material-ui/core';
import { Dropdown } from 'react-bootstrap';

function AvatarButton() {
  return (
    <Dropdown>
    <Dropdown.Toggle bsPrefix="p-0">
<Avatar alt="Remy Sharp"/>

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
