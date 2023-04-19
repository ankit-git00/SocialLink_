import React from 'react';
import "./sidebar.css"
import {RssFeed,Chat, Bookmark,HelpOutline, WorkOutline, Event, School, Book} from "@material-ui/icons";
import { Users } from '../../DummyData';
import CloseFriend from '../closefriend/CloseFriend';
export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarWrapper">
     <ul className="sidebarList">
        <li className="sidebarListitem">
        <RssFeed className='sidebarIcon'/>
        <span className="sidebarListitemText">Feed</span>
        </li>
        <li className="sidebarListitem">
        <Chat className='sidebarIcon'/>
        <span className="sidebarListitemText">Chats</span>
        </li>
        <li className="sidebarListitem">
        <Bookmark className='sidebarIcon'/>
        <span className="sidebarListitemText">Bookmarks</span>
        </li>
        <li className="sidebarListitem">
        <HelpOutline className='sidebarIcon'/>
        <span className="sidebarListitemText">Questions</span>
        </li>
        <li className="sidebarListitem">
        <WorkOutline className='sidebarIcon'/>
        <span className="sidebarListitemText">Jobs</span>
        </li>
        <li className="sidebarListitem">
        <Event className='sidebarIcon'/>
        <span className="sidebarListitemText">Events</span>
        </li>

        <li className="sidebarListitem">
        <RssFeed className='sidebarIcon'/>
        <span className="sidebarListitemText">Feed</span>
        </li>

     </ul> 

     <button className='sidebarButton'>Show More</button>  
     <hr className='sidebarHr'></hr>

     <ul className="sidebarFriendList">
        {Users.map( u => (
            <CloseFriend key={u.id} user={u} />
        ))}

     </ul>
     </div>
    </div>

  )
}
