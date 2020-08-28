import React from 'react';
import Wallpaper from './wallpaper';
import venom from '../img/hulk-1.jpg';
import hulk from '../img/venom-1.jpg';
import mavels from '../img/venom-2.jpg'


function SampleWallpaper(){
    return(
        
    
        <div className="sample-wallpaper">
           <Wallpaper src={hulk} alt={'wallpaper #1'} />
           <Wallpaper src={venom} alt={'wallpaper #2'} />
           <Wallpaper src={mavels} alt={'wallpaper #3'} />

        </div>

    );
}


export default SampleWallpaper;