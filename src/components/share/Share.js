import React from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import './share.css'

export default function Share() {
    return (

        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareImg" />
                    <input className='shareInput' placeholder="What's on you mind Ankit ? "></input>
                </div>
                <hr className="shareHr" />

                <div className="shareBotton">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className='shareOptionIcon' />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label className='shareOptionIcon' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room className='shareOptionIcon' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className='shareOptionIcon' />
                            <span className="shareOptionText">Emotion</span>
                        </div>
                        <button className='shareButton'>Share</button>

                    </div>
                </div>

            </div>
        </div>
    )
}
