import { useHuddle01 } from '@huddle01/react';
import { useEffect } from 'react';
 
const App = () => {
  console.log(import.meta.env.VITE_HUDDLE_PROJECT_ID as string)
  const { initialize, isInitialized } = useHuddle01();
 
  useEffect(() => {
    initialize(import.meta.env.VITE_HUDDLE_PROJECT_ID as string);
  }, []);
 
  return <div>{isInitialized ? 'Hello World!' : 'Please initialize'}</div>;
};

export default App