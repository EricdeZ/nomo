import React from 'react'
import {WavesSvg} from "../../assets/waves/Svg";

const Waves = () => {
    return(
        <div id='waves'>
            <div className="scale-container">
                <WavesSvg fill={'#1e429b'}/>
                <WavesSvg fill={'#0085ca'}/>
                <WavesSvg fill={'#49b8c1'}/>
                <WavesSvg fill={'#a4d8d1'}/>
                <WavesSvg fill={'#fdeddf'}/>
            </div>
        </div>
    )
}

export default Waves