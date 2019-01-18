import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Fade to black', duration: '5:43' },
        { title: 'One', duration: '25:10' },
        { title: 'Master of puppets', duration: '8:30' },
        { title: 'Enter sandman', duration: '4:30' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

const rootReducer = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});

export default rootReducer;
