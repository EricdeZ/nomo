import React from 'react'
import Link from "next/link";

const Block = ({index, name, link}) => {
    return (
        <Link href={link}>
            <div className="box" style={{'--i': index}}>
                <div className="front">{name}
                    <div className="left"/>
                    <div className="top"/>
                </div>
            </div>
        </Link>
    )
}

const boxes = [{
    index: 6,
    name: 'Blobs',
    link: '/blobs'
},{
    index: 5,
    name: 'Card',
    link: '/card'
},{
    index: 4,
    name: 'Waves',
    link: '/waves'
},{
    index: 3,
    name: 'GradientBorder',
    link: '/gradientborder'
},{
    index: 2,
    name: 'Buttons',
    link: '/buttons'
},{
    index: 1,
    name: 'Animations',
    link: '/animations'
},
]

const Menu = () => {
    return(
        <div id='menu'>
            {boxes.map(e => {
                return(
                    <Block key={e.index} index={e.index} link={e.link} name={e.name}/>
                )
            })}
        </div>
    )
}

export default Menu