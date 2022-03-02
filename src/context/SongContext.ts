import { createContext } from "react";

interface SongContextProps {
    mp3:string;
    setMp3: (mp3:string) => void;
    imgPath:string;
    setImgPath: (imgPath:string) => void;
    artist:string;
    setArtist: (artist:string) => void;
    songName:string;
    setSongName: (songName:string) => void;
}

export const SongContext = createContext({} as SongContextProps);