import React from 'react';
import "./rightbar.css"
import { Users } from "../../DummyData";
import Online from '../online/Online';


export default function Rightbar({ profile }) {

  const HomeRightBar = () => {
    return (<>
      <div className="birthdayContainer">
        <img src="/assets/gift.png" alt="" className="birthdayImg" />
        <div className="birthdayText"><b>Stefan Jones</b> and <b>3 others </b>have birthday today.</div>
      </div>

      <img src="/assets/ad.png" alt="" className="rightBarAd" />
      <h4 className='rightbarTitle' >Online Frineds</h4>
      <ul className="friendList">
        {Users.map(u => (
          <Online key={u.id} user={u} />
        ))}

      </ul>
    </>);
  };

  const ProfileRightbar = () => {
    return (<>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City:</div>
          <div className="rightbarInfoValue">New York</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From:</div>
          <div className="rightbarInfoValue">Madrid</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">Relationship Status: Single</div>
          <div className="rightbarInfoValue"></div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey"></div>
          <div className="rightbarInfoValue"></div>
        </div>
      </div>

      <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
    </>

    )
  }




  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
        {profile? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  );
}
