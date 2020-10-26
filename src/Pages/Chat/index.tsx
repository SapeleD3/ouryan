import React, { useState } from 'react';
import WindowSize from '@reach/window-size';
import styled from 'styled-components';
import { Wrapper3 } from '../../styles/globals';
// import logo from './assets/logo.png';
import './chat.css';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ArrowBack from '@material-ui/icons/ArrowBack';
import logo2 from './assets/logo2.png';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import TabDesktop from './assets/TabDesktopChat';
dayjs.extend(relativeTime);

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

type TextProps = {
  mobile: string;
};

const P = styled.p`
  flex: 1;
  font-weight: light;
  color: #e5e5e5;
  margin-bottom: 0;
  font-size: 14px;
`;

const Input2 = styled.input`
  width: 100%;
  outline: none;
  font-size: 15px;
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
export default function Chat() {
  const [message] = useState(initialMessage);
  return (
    <WindowSize>
      {({ width, height }) =>
        width > 950 ? (
          <TabDesktop screen={1} />
        ) : width > 550 ? (
          <TabDesktop screen={2} />
        ) : (
          <>
            <img
              style={{
                top: 0,
                position: 'absolute',
                right: 0,
                marginRight: 10,
                marginTop: 12,
              }}
              src={logo2}
              alt='face'
              width={130}
              height={60}
            />
            <Wrapper3>
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    height: 60,
                    margin: '20px 0 20px 0',
                  }}
                >
                  <IconButton
                    color='inherit'
                    aria-label='send'
                    style={{ outline: 'none', height: 44 }}
                    // onClick={copyCodeToClipboard}
                  >
                    <ArrowBack />
                  </IconButton>
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
                      <H mobile='0.7em'>
                        last seen: {dayjs(lastSeen).fromNow()}
                      </H>
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
            </Wrapper3>
          </>
        )
      }
    </WindowSize>
  );
}
