import React from 'react'

const Yellow = () => {
    return(
        <div className="yellow button">
            <div className="background"/>
            Hover Me
        </div>
    )
}

const Purple = () => {
    return(
        <div className="purple button">
            <div className="background"/>
            Hover Me
        </div>
    )
}

const Green = () => {
    return(
        <div className="green button">
            <div className="background"/>
            <div className="background two"/>
            Hover Me
        </div>
    )
}

const Red = () => {
    return(
        <div className="red button">
            Hover Me
        </div>
    )
}

const Pink = () => {
    return(
        <div className="pink button">
            <div className="background">
                Click Me
            </div>
            Hover Me
        </div>
    )
}

const Orange = () => {
    return(
        <div className="orange button">
            <div className="background"/>
            Hover Me
        </div>
    )
}

const Aqua = () => {
    return(
        <div className="aqua button">
            <div className="background one">
                Hover Me
            </div>
            <div className="background two">
                Click me
            </div>
        </div>
    )
}

const Blue = () => {
    return(
        <div className="blue button">
            <div className="background">
                Click Me
            </div>
            Hover me
        </div>
    )
}

const LightOrange = () => {
    return(
        <div className="light-orange button">
            <div className="background one"/>
            <div className="background two"/>
            Hover Me
        </div>
    )
}

const Pastel = () => {
    return(
        <div className="pastel button">
            <div className="background one">
                Click me
            </div>
            <div className="background two">
                Hello
            </div>
            <div className="background three">
                Hover Me
            </div>
        </div>
    )
}

const Cadetblue = () => {
    return(
        <div className="cadetblue button">
            <div className="background one">
                Click me
            </div>
            <div className="background two">
                Hover me
            </div>
        </div>
    )
}

const RedBlue = () => {
    return(
        <div className="red-blue button">
            <div className="background one"/>
            <div className="background two"/>
            Hover me
        </div>
    )
}

const LightRed = () => {
    return(
        <div className="light-red button">
            <div className="background one"/>
            <div className="background two"/>
            <div className="background three"/>
            <div className="background four"/>
            Hover Me
        </div>
    )
}

const BluePurple = () => {
    return(
        <div className="blue-purple button">
            <div className="background one"/>
            <div className="background two"/>
            <div className="background three"/>
            <div className="background four"/>
            Hover Me
        </div>
    )
}

const Crimson = () => {
    return(
        <div className="crimson button">
            <div className="background one"/>
            <div className="background two"/>
            Hover Me
        </div>
    )
}

const BigLetter = () => {
    return(
        <div className="big-letter button">
            <div className="background"/>
            <div className="text">
                <span>B</span>utton
            </div>
        </div>
    )
}

const Buttons = () => {
    return(
        <div id='button-container'>
            <BigLetter/>
            <Crimson/>
            <BluePurple/>
            <LightRed/>
            <RedBlue/>
            <Cadetblue/>
            <Yellow/>
            <Pastel/>
            <Purple/>
            <Green/>
            <Red/>
            <Pink/>
            <Orange/>
            <Aqua/>
            <Blue/>
            <LightOrange/>
        </div>
    )
}

export default Buttons