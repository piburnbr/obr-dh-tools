import React, {useEffect, useState} from 'react';
import OBR from '@owlbear-rodeo/sdk';


import Countdown from './apps/Countdown';
import References from './apps/References';
import RollBuilder from './apps/RollBuilder';
import RollHistory from './apps/RollHistory';
import styled from 'styled-components';
import Tokens from './apps/Tokens';
import CharacterSheet from './apps/CharacterSheet';
import { RollProvider } from './apps/Shared/Contexts/RollContext';
import { RoomProvider } from './apps/Shared/Contexts/RoomContext';
import { PlayerProvider } from './apps/Shared/Contexts/PlayerContext';
import { CharacterProvider } from './apps/Shared/Contexts/CharacterContext';


const  App: React.FunctionComponent = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    OBR.onReady(() => {
      setIsReady(true);
    });
  },[]); 
  
  useEffect(() => {
    if (isReady) {
      return OBR.action.onOpenChange(resize)
    }
  }, [isReady])

  const resize = () => {
    OBR.action.setWidth(document.body.scrollWidth);
    OBR.action.setHeight(document.body.scrollHeight);
  }

  return (
    <Wrapper>
      {isReady && (
        <PlayerProvider>
          <RoomProvider>
            <CharacterProvider>
              <RollProvider>
                <Left>
                    <Tokens />
                    <Countdown />
                    <Divider />
                    <References resize={resize} />
                    <Divider />
                    <RollBuilder />
                    <Divider />
                    <RollHistory />
                </Left>
                <Right>
                    <CharacterSheet/>
                </Right>
              </RollProvider>
            </CharacterProvider>
          </RoomProvider>
        </PlayerProvider>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
`

const Left = styled.div`
  width: 235px;
`

const Right = styled.div`
width: 300px;
`

const Divider = styled.div`
  margin: 5px 0;
  border-bottom: 1px solid gray;
`

export default App
