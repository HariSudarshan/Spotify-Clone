import React from 'react';
import '../styles/Leftmenu.css';
import { FaSpotify } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from './MenuList';
import { MenuPlaylist } from './MenuPlaylist';
import { TrackList } from './TrackList';

function Leftmenu() {
  return (
    <div className='leftmenu'>
        <div className='logocontainer'>
            <i>
                <FaSpotify />
            </i>
            <h2>Spotify</h2>
            <i>
               <FaEllipsisH />
            </i>
        </div>
        <div className='searchbox'>
            <input type="text" placeholder='Search...'/>
            <i className='searchicon'>
                <BiSearchAlt />
            </i>
        </div>
    <Menu title={'Menu'} listobject={MenuList} />

    <MenuPlaylist />

    <TrackList />
    </div>
  )
}

export {Leftmenu};