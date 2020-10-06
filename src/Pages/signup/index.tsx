import React from 'react';
import image1 from './assets/1.png';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import styled from 'styled-components';
import WindowSize from '@reach/window-size';
import FormInput from './FormInput';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  width: 100vw;
  flex-direction: row;
`;

const Wrapper2 = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  width: 100vw;
  padding-left: 2em;
  flex-direction: column;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  padding-left: 3em;
  padding-bottom: 5em;
  padding-top: 5em;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Right = styled.div`
  flex: 1.3;
  display: flex;
  padding-right: 3em;
  padding-bottom: 5em;
  padding-top: 5em;
  background-color: #4d44aa;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export default function SignUp() {
  return (
    <div>
      <WindowSize>
        {({ width, height }) =>
          width > 550 ? (
            <Wrapper>
              <Left>
                <div
                  style={{
                    display: 'flex',
                    boxShadow:
                      ' 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2em',
                  }}
                >
                  <FormInput />
                </div>
              </Left>
              <Right>
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
                <div
                  style={{
                    display: 'flex',
                    boxShadow:
                      ' 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={image1}
                    alt='face'
                    width={width * 0.35}
                    height={height * 0.5}
                  />
                </div>
              </Right>
            </Wrapper>
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
              <Wrapper2>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={image1}
                    alt='face'
                    width={width * 0.6}
                    height={height * 0.3}
                  />
                </div>
                <FormInput />
              </Wrapper2>
            </>
          )
        }
      </WindowSize>
    </div>
  );
}
