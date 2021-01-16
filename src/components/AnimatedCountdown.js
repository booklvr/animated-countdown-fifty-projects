import React, { Fragment, useState, useEffect } from 'react'

const AnimatedCountdown = () => {
  const [showCounter, setShowCounter] = useState(true)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [counter, setCounter] = useState(3)
  const [animateIn, setAnimateIn] = useState(false)

  // let counter = 6

  const decrement = () => {
    setAnimateIn(true)

    setTimeout(() => {
      setAnimateIn(false)
    }, 500)
    setTimeout(() => {
      if (counter === 0) {
        return
      } else {
        console.log('counter', counter)
        setCounter((counter) => {
          if (counter > 0) {
            decrement()
            return counter - 1
          } else {
            setShowCounter(false)
            setShowFinalMessage(true)
          }
        })
      }
    }, 1000)
  }

  useEffect(() => {
    // start animation
    decrement()
  }, [])

  // useEffect(() => {
  //   // increment()
  // })

  return (
    <Fragment>
      <div className={showCounter ? 'counter' : 'counter hide'}>
        <div className='nums'>
          <span className={animateIn ? 'in' : 'out'}>{counter}</span>
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={showFinalMessage ? 'final show' : 'final'}>
        <h1>GO</h1>
        <button
          id='replay'
          onClick={() => {
            setCounter(3)
            setShowFinalMessage(false)
            setShowCounter(true)
            decrement()
          }}
        >
          Replay
        </button>
      </div>
    </Fragment>
  )
}

export default AnimatedCountdown
