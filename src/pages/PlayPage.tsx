import { Controls, BasicData } from '../components';
import { useContext } from 'react';
import { SongContext } from '../context/SongContext';

export const PlayPage = () => {

  const { mp3 } = useContext(SongContext);
  const audio = new Audio(mp3);
  
  return (
    <div className="container bg-light">
      <BasicData />
      <Controls audio={audio} />
    </div>
  )
}
