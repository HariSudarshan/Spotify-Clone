import React, { useState, useEffect } from 'react';
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from 'react-icons/fa';
import { Songs } from "../components/Songs";
import { MusicPlayer } from './MusicPlayer';

function Audiolist() {
    const [songs, setSongs] = useState(Songs);
    const [currentSong, setCurrentSong] = useState(Songs[0].song);
    const [currentImg, setCurrentImg] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const songElements = document.querySelectorAll(".songs");

        function changeMenuActive() {
            songElements.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }

        songElements.forEach((n) => n.addEventListener('click', changeMenuActive));

        // Cleanup event listeners on component unmount
        return () => {
            songElements.forEach((n) => n.removeEventListener('click', changeMenuActive));
        };
    }, []);

    const changeFavourite = (id) => {
        const updatedSongs = songs.map(song => 
            song.id === id ? { ...song, favourite: !song.favourite } : song
        );
        setSongs(updatedSongs);
    };

    const setMainSong = (songSrc, imgSrc) => {
        setCurrentSong(songSrc);
        setCurrentImg(imgSrc);
    };

    return (
        <div className='audiolist'>
            <h2 className='title'>
                The List <span id='length'>{songs.length}
                    <span id='s'> songs</span>
                </span>
            </h2>

            <div className='songContainer'>
                {songs.map((song, index) => (
                    <div className='songs' key={song.id}
                        onClick={() => setMainSong(song.song, song.imgSrc)}>
                        <div className='count'>
                            <p>{`#${index + 1}`}</p>
                        </div>
                        <div className='song'>
                            <div className='imgBox'>
                                <img src={song.imgSrc} alt={song.songName} />
                            </div>
                            <div className='section'>
                                <p className='songName'>
                                    {song.songName}
                                    <span className='spanArtist'>{song.artist}</span>
                                </p>
                                <div className='hits'>
                                    <p className='hit'>
                                        <i><FaHeadphones /></i>
                                        {song.listeners}
                                    </p>
                                    <p className='duration'>
                                        <i><FaRegClock /></i>
                                        {song.duration}
                                    </p>
                                    <div className='favourite' onClick={(e) => {
                                        e.stopPropagation(); // To prevent triggering the setMainSong
                                        changeFavourite(song.id);
                                    }}>
                                        {song.favourite ? (
                                            <i><FaHeart /></i>
                                        ) : (
                                            <i><FaRegHeart /></i>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <MusicPlayer song={currentSong} imgSrc={currentImg} />
        </div>
    );
}

export { Audiolist };
