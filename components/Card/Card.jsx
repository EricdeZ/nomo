import React, {useEffect, useRef} from 'react'

function getBoundingBox (element) {
    const box = element.getBoundingClientRect()
    const ret = { }

    for (const prop in box) {
        ret[prop] = box[prop]
    }

    ret.xCenter = (box.left + box.right) / 2
    ret.yCenter = (box.top + box.bottom) / 2

    return ret
}

function throttle(callback, interval) {
    let enableCall = true;

    return function(...args) {
        if (!enableCall) return;

        enableCall = false;
        callback.apply(this, args);
        setTimeout(() => enableCall = true, interval);
    }
}

const Card = () => {

    const card = useRef()
    const card_container = useRef()

    useEffect(() => {
        card_container.current.addEventListener('mousemove', throttle(rotate, 10));
    }, [])


function rotate(e){
    if(e.target.matches('div.card-container *') || e.target.matches('div.card-container')) {
        card.current.style.transform = 'rotateX(0deg) rotateY(0deg)  rotate(0deg)';
    } else {
        const box = getBoundingBox(card.current)
        const { xCenter, yCenter } = box
        const force = 5;
        const offsetY = -(e.clientY -  yCenter)/force;
        const offsetX = (e.clientX -  xCenter)/force;
        card.current.style.transform = 'rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg) rotate(0deg)';
    }
}

    return(
        <div ref={card_container}  id='card'>
            <div ref={card} className="card-container" id="card-container">
                <div className="top"/>
                <div className="left"/>
                <div className="right"/>
                <div className="bottom"/>
            </div>
        </div>
    )
}

export default Card