import React from 'react'
import './Videos.css'
import Avatar from '@material-ui/core/Avatar'

function Videos({videoImage,channelImage,title,views,timestamp,channelName}) {
    return (
        <div className='videos'>
           <img src={videoImage} alt=''/>
           <div className='videos__info'>
                <Avatar src={channelImage} alt='' className='videos__avatar'/>
                <div className='videos__text'>
                    <h4> {title}</h4>
                    <p>{channelName}</p>
                    <p>{views} views.{timestamp}</p>
                </div>
           </div>
        </div>
    )
}

export default Videos
