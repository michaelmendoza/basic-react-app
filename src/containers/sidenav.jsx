import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open:false };
  } 

  toggleDrawer() {
    const open = !this.state.open;
    this.setState({open:open});
  }

  render() {
    const sideList = (
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> 
      )  

    return (
      <span>
        <IconButton color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer()}>
          <MenuIcon />
        </IconButton>

        <Drawer open={this.state.open} onClose={() => this.toggleDrawer()}>
          <div tabIndex={0} role="button" onClick={() => this.toggleDrawer()} onKeyDown={() => this.toggleDrawer()}>
            {sideList}
          </div>
        </Drawer>

      </span>
  )}

}

export default SideNav;