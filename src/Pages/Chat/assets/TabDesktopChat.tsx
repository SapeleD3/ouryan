import React, { useState } from 'react';
import { Wrapper } from '../../../styles/globals';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
// import logo from './assets/logo.png';
import '../chat.css';
import logo2 from './logo2.png';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Left = styled.div`
  flex: 1;
  width: 285px;
  display: flex;
  padding-bottom: 2em;
  padding-top: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #4d44aa;
`;
type RightProps = {
  tab: string;
};

const Right = styled.div`
  flex: 3;
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: ${({ tab }: RightProps) => tab};
  justify-content: ${({ tab }: RightProps) => tab !== '0' && 'center'};
  align-items: ${({ tab }: RightProps) => tab !== '0' && 'flex-start'};
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  background: white;
  outline: none;
  font-size: 15px;
  font-family: 'Comfortaa', cursive;
`;

const Input2 = styled.input`
  width: 100%;
  outline: none;
  font-size: 15px;
  font-family: 'Comfortaa', cursive;
`;

const ChatInput = styled.div`
  border: 1px solid #4d44aa;
  width: 90%;
  padding: 6px 15px;
  border-radius: 30px;
  margin-left: 1em;
  margin-bottom: 10px;
  background: white;
  display: flex;
`;

const Search = styled.div`
  border: 1px solid #4d44aa;
  padding: 6px 12px;
  border-radius: 30px;
  margin-left: 0.5em;
  margin-right: 0.5em;
  background: white;
  display: flex;
`;
type TextProps = {
  mobile: string;
};

const H2 = styled.h2`
  font-size: ${({ mobile }: TextProps) => mobile};
  font-weight: bold;
  color: #e5e5e5;
  margin-left: 1em;
  margin-right: 0.5em;
  margin-top: 1em;
  font-family: 'Comfortaa', cursive;
`;

const H = styled.h2`
  font-size: ${({ mobile }: TextProps) => mobile};
  font-weight: bold;
  margin-left: 0.5em;
  font-family: 'Comfortaa', cursive;
`;

const H1 = styled.h2`
  font-size: ${({ mobile }: TextProps) => mobile};
  font-weight: bold;
  margin-left: 0.5em;
  margin-top: 13px;
  color: #4d44aa;
  font-family: 'Comfortaa', cursive;
`;

type RoomProps = {
  active: string;
};
const Room = styled.div`
  padding-left: 0.5em;
  padding-top: 1.5em;
  color: white;
  background: ${({ active }: RoomProps) => active};
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background: #7f77d2;
  }
  /* background-color: #7f77d2; */
`;

const H3 = styled.h3`
  font-size: ${({ mobile }: TextProps) => mobile};
  font-weight: bold;
  color: white;

  margin-left: 0.5em;
  margin-right: 0.5em;
  font-family: 'Comfortaa', cursive;
`;

const Message = styled.div`
  color: white;
  display: flex;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding-right: 10px;
`;

const P = styled.p`
  flex: 1;
  font-weight: light;
  color: #e5e5e5;
  margin-bottom: 0;
  font-size: 14px;
`;

const P2 = styled.p`
  font-weight: bold;
  color: #e5e5e5;
  font-size: 14px;
  margin-right: 3px;
`;

const MessageCount = styled.div`
  display: flex;
  background-color: #f95959;
  border-radius: 100%;
  padding: 5px;
  height: 5px;
  width: 5px;
  margin: 2px;
  justify-content: center;
  align-items: flex-start;
`;

const UserCard = styled.div`
  display: flex;
  margin-left: 1em;
  color: ${({ color }: { color: string }) => color};
  /* padding: 10px; */
  height: 55px;
  width: 55px;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  padding-left: 0.5em;
  width: 100%;
  background-color: #e5e5e5;
  height: 0.5px;
`;

const rooms = [
  {
    link:
      'https://mail.google.com/mail/u/0/#search/roland/FMfcgxwJZJZlTRPGmtMDwfxqjbchxBjx',
    message: 'Aboi you dey fuck up oh well abeg no go they loose gaurd',
  },
  {
    link:
      'https://mail.google.com/mail/u/0/#search/roland/FMfcgxwJZJZlTRPGmtMDwfxqjbchxBjx',
    message: 'Aboi you dey fuck up oh well abeg no go they loose gaurd',
  },
  {
    link:
      'https://mail.google.com/mail/u/0/#search/roland/FMfcgxwJZJZlTRPGmtMDwfxqjbchxBjx',
    message: 'Aboi you dey fuck up oh well abeg no go they loose gaurd',
  },
  {
    link:
      'https://mail.google.com/mail/u/0/#search/roland/FMfcgxwJZJZlTRPGmtMDwfxqjbchxBjx',
    message: 'Aboi you dey fuck up oh well abeg no go they loose gaurd',
  },
  {
    link:
      'https://mail.google.com/mail/u/0/#search/roland/FMfcgxwJZJZlTRPGmtMDwfxqjbchxBjx',
    message: 'Aboi you dey fuck up oh well abeg no go they loose gaurd',
  },
];

const initialMessage = [
  {
    user: 2,
    name: 'joseph',
    message: 'aboi i hear say you they hold back on that cash',
    sentAt: new Date(),
    read: false,
  },
  {
    user: 2,
    name: 'joseph',
    message: 'answer me na i know say you they read my chat',
    sentAt: new Date(),
    read: false,
  },
  {
    user: 1,
    name: 'Moses',
    message: 'aboi wida you na',
    sentAt: new Date(),
    read: false,
  },
];

const name = 'joseph Hugh';
const lastSeen = new Date();
const getInitials = (name: string): string => {
  if (name.indexOf(' ') >= 0) {
    const second = name.substr(name.indexOf(' ') + 1);
    return `${name.substring(0, 1).toUpperCase()}${second
      .substring(0, 1)
      .toUpperCase()}`;
  }
  return name.substring(0, 1).toUpperCase();
};

export default function TabDesktop({ screen }: { screen: number }) {
  console.log(screen);
  const [message] = useState(initialMessage);
  const [active, setActive] = useState<any>(null);
  return (
    <Wrapper>
      <Left>
        <div
          style={
            screen === 1
              ? {
                  boxShadow:
                    ' 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 20,
                  padding: '2em',
                }
              : {}
          }
        >
          <UserCard color='white'>
            <h2>MO</h2>
          </UserCard>
          <Search>
            <Input type='Search' name='Search' placeholder='Search' />
            <SearchIcon />
          </Search>
          <H2 mobile='1em'>Rooms</H2>
          {rooms.map(({ link, message }, i) => (
            <Room
              className='room'
              active={active === i ? '#7f77d2' : 'none'}
              key={i}
              onClick={() => setActive(i)}
            >
              <H3 mobile='0.9em'>
                {link.length > 29 ? `${link.substring(0, 29)}...` : link}
              </H3>
              <Message>
                <P2>Me: </P2>
                <P>
                  {message.length > 25
                    ? `${link.substring(0, 25)}...`
                    : message}
                </P>
                <MessageCount></MessageCount>
                <P2>2</P2>
              </Message>
              <Line></Line>
            </Room>
          ))}
        </div>
      </Left>
      <Right tab={screen === 1 ? '2em 0 2em 0' : '0'}>
        <div
          style={
            screen === 1
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow:
                    ' 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
                  height: '100%',
                  width: '85%',
                }
              : {
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }
          }
        >
          <img
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
            }}
            src={logo2}
            alt='face'
            width={110}
            height={50}
          />
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                display: 'flex',
                height: 60,
                margin: 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  background: 'white',
                  border: '1px solid #4d44aa',
                  paddingTop: 5,
                  width: 60,
                  borderRadius: '100%',
                  color: '#4d44aa',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h2 style={{ fontSize: 30 }}>{getInitials(name)}</h2>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <H1 mobile='1em'>{name}</H1>
                </div>
                <div style={{ flex: 1 }}>
                  <H mobile='0.7em'>last seen: {dayjs(lastSeen).fromNow()}</H>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            {message.map(({ user, message, sentAt }, i) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: user === 1 ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  key={i}
                  style={
                    user === 1
                      ? {
                          background: 'grey',
                          maxWidth: '75%',
                          marginTop: 5,
                          paddingTop: 5,
                          paddingLeft: 20,
                          paddingBottom: 20,
                          paddingRight: 10,
                        }
                      : {
                          background: '#4d44aa',
                          maxWidth: '75%',
                          marginTop: 5,
                          paddingTop: 5,
                          paddingLeft: 20,
                          paddingBottom: 20,
                          paddingRight: 10,
                        }
                  }
                >
                  <P style={{ textAlign: user === 1 ? 'right' : 'left' }}>
                    {dayjs(sentAt).format('h:mm A')}
                  </P>
                  <div>
                    <P>{message}</P>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', marginTop: 10 }}>
            <ChatInput>
              <Input2 placeholder='message..' />
              <IconButton
                color='inherit'
                aria-label='send'
                style={{
                  outline: 'none',
                  height: 34,
                }}
                // onClick={copyCodeToClipboard}
              >
                <SendIcon />
              </IconButton>
            </ChatInput>
            <IconButton
              color='inherit'
              aria-label='send'
              style={{ outline: 'none', marginLeft: 10, height: 44 }}
              // onClick={copyCodeToClipboard}
            >
              <PhotoCamera />
            </IconButton>
          </div>
        </div>
      </Right>
    </Wrapper>
  );
}
