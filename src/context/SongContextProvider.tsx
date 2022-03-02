import { SongContext } from './SongContext';
import { useState } from 'react';

interface SongContextProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const SongContextProvider = ({children}: SongContextProviderProps) => {

  const [mp3, setMp3] = useState('')
  const [imgPath, setImgPath] = useState('')
  const [artist, setArtist] = useState('')
  const [songName, setSongName] = useState('')

  return (
    <SongContext.Provider value={{
        mp3, setMp3,
        imgPath, setImgPath,
        artist, setArtist,
        songName, setSongName
    }}>
        {children}
    </SongContext.Provider>
  )
}
