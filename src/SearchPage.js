import React from 'react'
import './SearchPage.css'
import VideoRow from './VideoRow'
import ChannelRow from './ChannelRow'
import FilterIcon from '@material-ui/icons/TuneOutlined'

const SearchPage=()=>{
    return(
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <FilterIcon/>
                <h2>FILTTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image='https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg'
            channel='Tom and Jerry'
            verified
            subs='54K'
            noOfVideos={10}
            description='Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry.'
            />
            <hr/>

            <VideoRow views='2.4M' subs='20K'channel='Tom and Jerry' description='Oh summer! It is time for some exciting adventures in the beach and the park, safely of course! Even if you can not be out right now, Tom and Jerry are here to bring the joy of summer right to you at home' title='Tom and Jerry | Jerry the Trickster'
            image='https://i.ytimg.com/vi/wy2DgqL1P7s/maxresdefault.jpg'/>

            <VideoRow views='1.4M' subs='55K'channel='Tom and Jerry' description='There is nothing better than going on a little adventure during the weekend! And Tom & Jerry are doing just that!' title='Tom & Jerry | Feeling Adventurous! '
            image='https://i.ytimg.com/vi/gaKHGD2vXAI/maxresdefault.jpg'/>

            <VideoRow views='1.4M' subs='55K'channel='Tom and Jerry' description='Enjoy a fun evening with the help of Tom & Jerry!' title='Tom & Jerry | The Evening Fun!'
            image='https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/wb-883316329542-Full-Image_GalleryBackground-en-US-1484348613962._SX1080_.jpg'/>

            <VideoRow views='1.4M' subs='55K'channel='Tom and Jerry' description='Quack! Jerry is always around to help keep Little Quacker out of trouble - especially from Tom!' title='Tom & Jerry | Best of Little Quacker'
            image='https://img.jakpost.net/c/2020/04/22/2020_04_22_93420_1587522578._large.jpg'/>

            <VideoRow views='1.4M' subs='55K'channel='Tom and Jerry' description='Are we seeing this right? Is Jerry taking care of Tom? Oh wait...Catch up with Tom & Jerry as they chase each other, avoid Spike, and play with friends like Little Quacker and Butch the cat.' title='Tom & Jerry | Is Jerry Taking Care of Tom?'
            image='https://movies-b26f.kxcdn.com/wp-content/uploads/2019/10/Tom-and-Jerry-770x470.jpg'/>

            <VideoRow views='1.4M' subs='55K'channel='Tom and Jerry' description='Oh summer! It is time for some exciting adventures in the beach and the park, safely of course! Even if you can not be out right now, Tom and Jerry are here to bring the joy of summer right to you at home' title='Tom & Jerry | The Joy of Summer'
            image='https://img.theweek.in/content/dam/week/leisure/society/images/2018/3/17/tom-and-jerry.jpg'/>

            
        </div>
    )
}
export default SearchPage