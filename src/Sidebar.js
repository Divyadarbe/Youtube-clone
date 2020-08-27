import React from 'react'
import './Sidebar.css'
import './SidebarRow'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubcriptionsIcon from '@material-ui/icons/Subscriptions'
import LibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import YourVideosIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import LikedVideoIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ShowMoreIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon}  title='Home'/>
            <SidebarRow Icon={WhatshotIcon} title='Trending'/>
            <SidebarRow Icon={SubcriptionsIcon} title='Subcriptions'/>
            <hr/>
            <SidebarRow Icon={LibraryIcon}  title='Library'/>
            <SidebarRow Icon={HistoryIcon} title='History'/>
            <SidebarRow Icon={YourVideosIcon} title='YourVideos'/>
            <SidebarRow Icon={WatchLaterIcon}  title='WatchLater'/>
            <SidebarRow Icon={LikedVideoIcon} title='Liked Videos'/>
            <SidebarRow Icon={ShowMoreIcon} title='Show More'/>
            <hr/>
        </div>
    )
}

export default Sidebar
