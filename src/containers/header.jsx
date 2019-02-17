import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import SideNav from './sidenav.jsx';

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange(event, value) {
    this.setState({value});
  }

  render() {
    return (
    <Tabs value={this.state.value} 
          textColor="inherit" 
          onChange={this.handleChange.bind(this)}>
      <Tab textColor="inherit" label="Home" component={Link} to="/"/>
      <Tab textColor="inherit" label="About" component={Link} to="/about/"/>
      <Tab textColor="inherit" label="Users" component={Link} to="/users/"/>
      <Tab textColor="inherit" label="Usage" />
    </Tabs>
  )}
}

const Header = () => (
  <section>
    <AppBar position="static">
      <Toolbar>
        <SideNav/>

        <Typography className="layout-flexgrow" variant="title" color="inherit">
          Basic React App
        </Typography>

        <Button color="inherit">Login</Button>
      </Toolbar>

      <NavTabs/>
    </AppBar>
  </section>
)

export default Header;