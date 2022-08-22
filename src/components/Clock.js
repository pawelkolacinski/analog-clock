import React from 'react'
import './Clock.css'

export default function Clock({hour, minute, second}) {

  const rotateHourArrow = hour % 12 * 30 + minute/60 * 30
  const rotateMinuteArrow = minute * 6 + second /60 * 6
  const rotateSecondArrow = second * 6

  //generating hours to display on the clock shield
  const displayHours = [...Array(12).keys()].map(e => e + 1)
  const displayHoursRadius = 32
  //now we can compute how to transform clock labels
  const computeHourTransformation = hour => `translate(calc( -50% + ${displayHoursRadius * Math.sin(hour * Math.PI/6)}vmin ),calc(-50% + ${-displayHoursRadius * Math.cos(hour * Math.PI/6) }vmin))`

  return (
    <>
        
        <div className="clock">
            

                <div className="arrows">
                  <div className="arrow-hour"   style={{transform: `rotate(${rotateHourArrow}deg)`}}></div>
                  <div className="arrow-minute" style={{transform: `rotate(${rotateMinuteArrow}deg)`}}></div>
                  <div className="arrow-second" style={{transform: `rotate(${rotateSecondArrow}deg)`}}></div>
                </div>
                <div className="middle-circle"></div>
                <div className="hour-labels">
                  {displayHours.map(hour => 
                  <div 
                    key={hour}
                    style={{transform: computeHourTransformation(hour) }}
                    >
                      {hour}
                    </div>
                  )}
                </div>
            
        </div>
    </>
  )
}
