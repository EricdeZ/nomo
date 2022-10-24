import React from 'react'

const Tile = () => {
    return (
        <div className='tile animation'>
            <div className="spin"/>
        </div>
    )
}

const Car = () => {
    return (
        <div className='car animation'>
            <div className="bike"/>
            <div className="bg"/>
            <div className="car-element"/>
        </div>
    )
}

const Lightning = () => {
    return (
        <div className='lightning animation'>
            <div className="letter">L</div>
            <div className="letter">I</div>
            <div className="letter">G</div>
            <div className="letter">H</div>
            <div className="letter">T</div>
            <div className="letter">I</div>
            <div className="letter">N</div>
            <div className="letter">G</div>
        </div>
    )
}

const TextBackground = () => {
    return (
        <div className="text-background animation">
            <div className="text">Animation</div>
        </div>
    )
}

const Bouncing = () => {
    return (
        <div className="bouncing animation">
            <div className="ball"/>
            <div className="ball"/>
            <div className="ball"/>
            <div className="ball"/>
            <div className="ball"/>
            <div className="floor"/>
        </div>
    )
}

const Windows = () => {
    return (
        <div className="windows animation">
            <div className="container">
                <div className="square"/>
                <div className="square"/>
                <div className="square"/>
                <div className="square"/>
            </div>
        </div>
    )
}

const Animations = () => {
    return(
        <div id='animations'>
            <Windows/>
            <Bouncing/>
            <Lightning/>
            <TextBackground/>
            <Car/>
            <Tile/>
        </div>
    )
}

export default Animations