import "./topbar.css";
import {Search,Person, Chat, Notifications}  from '@material-ui/icons';

import React from 'react';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">SocialApp</span>
        </div>

        <div className="topbarCenter">
            <div className="searchBar">
                <Search/>
                <input placeholder="Search for Friends, Posts or Videos" className="searchInput" />
            </div>
        </div>

        <div className="topbarRight">
            <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
            </div>

            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>

            <img src="/assets/person/1.jpeg" className="topbarImg"/>
        </div>
    </div>
  )
}
