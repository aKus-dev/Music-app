import { Controls, BasicData } from '../components';
import { useContext } from 'react';
import { SongContext } from '../context/SongContext';
import { Navigate } from 'react-router-dom';

export const PlayPage = () => {

  const { mp3 } = useContext(SongContext);
  const audio = new Audio(mp3);

  if(!mp3) return <Navigate to="/" />
  
  return (
    <div className="container bg-light">
      <BasicData />
      <Controls audio={audio} />
    </div>
  )
}
