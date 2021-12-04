import React from 'react';
import './Navigation.css';
import {Tab, Tabs} from '@mui/material';

const Navigation = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <div className="navigation">
      <Tabs 
          value={value}
          onChange={handleChange}
          sx={{ justifyContent: 'center' }}>
          <Tab className="tab-item" label="Editor's Pick" />
          <Tab className="tab-item" label="Life" />
          <Tab className="tab-item" label="Research" />
          <Tab className="tab-item" label="Contribute" />
          <Tab className="tab-item" label="About" />
      </Tabs>
</div>
  )
}

export default Navigation;
