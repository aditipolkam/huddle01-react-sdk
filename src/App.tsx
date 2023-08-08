import { useHuddle01 } from '@huddle01/react';
import { useLobby } from '@huddle01/react/hooks';
import { useEffect, useState } from 'react';
import getRoomId from './helpers/getRoomId';
import Button from './components/Button';
 
const App = () => {
  const { initialize, isInitialized } = useHuddle01();
  const [roomId, setRoomId] = useState<string|null>();
  const { joinLobby } = useLobby();
 
  console.log(joinLobby.isCallable)
  const handleClick = async() => {
    setRoomId(await getRoomId(['0x9425833104AB4C46ff0660BBeb023dA04d276FED']))
  }
 
  useEffect(() => {
    initialize(import.meta.env.VITE_HUDDLE_PROJECT_ID as string);
  }, []);

  const HomeView = () =>{
    return(
      <div>
    
       <Button handleClick={handleClick} label='Create meeting room'/>
       <Button disabled={!joinLobby.isCallable} 
          handleClick={() => joinLobby(roomId as string)} 
          label='Join Lobby'/>
      </div>
    )
  }

 
  return <div>{isInitialized ? <HomeView/> : 'Please initialize'}</div>;
};

export default App