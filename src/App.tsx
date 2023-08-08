import { useHuddle01 } from '@huddle01/react';
import { useEffect } from 'react';
import getRoomId from './helpers/getRoomId';
import Button from './components/Button';
 
const App = () => {
  console.log(import.meta.env.VITE_HUDDLE_PROJECT_ID as string)
  const { initialize, isInitialized } = useHuddle01();

  const handleClick = async() => {
    console.log(await getRoomId(['0x9425833104AB4C46ff0660BBeb023dA04d276FED']))
  }
 
  useEffect(() => {
    initialize(import.meta.env.VITE_HUDDLE_PROJECT_ID as string);
  }, []);

  const HomeView = () =>{
    return(
      <div>
       <Button handleClick={handleClick} label='Click'/>
      </div>
    )
  }
 
  return <div>{isInitialized ? <HomeView/> : 'Please initialize'}</div>;
};

export default App