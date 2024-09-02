import React, {useEffect, useState} from 'react';
import OBR from '@owlbear-rodeo/sdk';


import Countdown from '../components/Countdown';
import References from '../components/References';
import Tokens from '../components/Tokens';
import styled from 'styled-components';


const  App: React.FunctionComponent = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    OBR.onReady(() => {
      resize();
      setIsReady(true);
    });
  },[]); 

  const resize = () => {
    OBR.action.setWidth(document.body.scrollWidth);
    OBR.action.setHeight(document.body.scrollHeight);
  }

  return (
    <Wrapper>
      {isReady && (
        <>
          <Tokens title="Fear Tokens" attr="fear" iconList={["Skull"]} resize={resize} />
          <Tokens title="Action Tracker" attr="action" iconList={["Sword", "Staff", "Bow", "Shield"]} resize={resize} />
          <Countdown resize={resize} />
          <Divider />
          <References resize={resize} />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
`

const Divider = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid gray;
`

export default App
