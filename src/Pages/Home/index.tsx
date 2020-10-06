import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import image1 from './assets/1.png';
import logo from './assets/logo.png';
import styled from 'styled-components';
import WindowSize from '@reach/window-size';
import './home.css';

import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/icons/Link';
import Add from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import copy from 'copy-text-to-clipboard';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  width: 100vw;
  flex-direction: row;
`;

const Right = styled.div`
  flex: 1.5;
  display: flex;
  height: 100vh;
  width: 100vw;
  padding-left: 4em;
  padding-top: 4em;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 60px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  padding-right: 3em;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
`;

const H2 = styled.h2`
  padding-top: 1em;
  font-size: 1.5em;
  font-weight: light;
  color: grey;
  font-family: 'Comfortaa', cursive;
`;

const P = styled.p`
  font-weight: light;
  color: grey;
  font-family: 'Comfortaa', cursive;
  margin-top: 20px;
`;
const P2 = styled.p`
  font-weight: light;
  font-family: 'Comfortaa', cursive;
  margin-top: 20px;
`;

const P3 = styled.p`
  font-weight: light;
  font-family: 'Comfortaa', cursive;
  color: grey;
  margin-top: 20px;
  font-size: 12px;
`;

const LinkDisplay = styled.div`
  -webkit-box-align: center;
  box-align: center;
  align-items: center;
  background: #f1f3f4;
  border-radius: 4px;
  color: #5f6368;
  display: flex;
  padding-left: 12px;
`;

const StyledMenu = withStyles({
  paper: {},
})((props: MenuProps) => <Menu {...props} />);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      borderColor: 'white',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [link] = React.useState('http://oyan/rando-no1');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const copyCodeToClipboard = () => {
    console.log(link);
    copy(link);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <P2 id='simple-modal-description'>Heres a link to your chat room</P2>
      <P3 id='simple-modal-description'>
        Copy this link and send it to people you want to talk with anonymously,
        Be sure to save it so you can use it later.
      </P3>
      <LinkDisplay>
        <div style={{ flex: 1 }}>
          <P3 id='simple-modal-description'>http://oyan/rando-no1</P3>
        </div>
        <IconButton
          color='inherit'
          aria-label='copy link'
          onClick={copyCodeToClipboard}
        >
          <Link />
        </IconButton>
      </LinkDisplay>
      <P3 id='simple-modal-description'>
        <span style={{ color: '#4d44aa', fontWeight: 'bold' }}>PS.</span>{' '}
        messages on link are cleared after 24hrs. please login to have
        persisting messages
      </P3>
    </div>
  );
  return (
    <div>
      <WindowSize>
        {({ width, height }) =>
          width > 550 ? (
            <Wrapper>
              <Right>
                <H1>Aboii how you wan take yan the matter</H1>
                <H2>na area matter ?</H2>
                <button
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                  className='btn btn1'
                >
                  New Chat
                </button>
                <StyledMenu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleOpen}>
                    <ListItemIcon>
                      <Link fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Get a chat link to share' />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Add fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Create instant chat room' />
                  </MenuItem>
                </StyledMenu>
                <Modal
                  open={open}
                  onClose={handleCloseModal}
                  aria-labelledby='simple-modal-title'
                  aria-describedby='simple-modal-description'
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {body}
                </Modal>
                <H2>abi na inside yan ?</H2>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '70%',
                  }}
                >
                  <button className='btn btn1' style={{ marginRight: 5 }}>
                    Login
                  </button>
                  <button className='btn btn2'>join</button>
                </div>
                <P>
                  <span style={{ color: '#4d44aa', fontWeight: 'bold' }}>
                    Learn more
                  </span>{' '}
                  about Oyan
                </P>
              </Right>
              <Left>
                <img
                  style={{
                    top: 0,
                    position: 'absolute',
                    right: 0,
                    marginRight: 20,
                    marginTop: 19,
                  }}
                  src={logo}
                  alt='face'
                  width={180}
                  height={80}
                />
                <img
                  src={image1}
                  alt='face'
                  width={width * 0.35}
                  height={height * 0.5}
                />
              </Left>
            </Wrapper>
          ) : (
            <></>
          )
        }
      </WindowSize>
    </div>
  );
}
