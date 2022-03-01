import axios from 'axios';
import { MusicData } from '../interfaces/Music';

export const getMusicData = async (name: string): Promise<MusicData[]> => {

    name = name.toLocaleLowerCase().replaceAll(' ', '+');

    const options = {
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '6eb78946f6mshfc59c54d3871e2fp1954bdjsna9d80351c957'
        }
    }

    const response = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, options);
    
    return response.data.data;
}   