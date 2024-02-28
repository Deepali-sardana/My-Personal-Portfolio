import React from 'react'
import './Design.css'

export default function Home() {
  const randomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };
  const stars = Array.from({ length: 400 }, (_, index) => ({
    id: index,
    ...randomPosition(),
  }));
  return (
    <>
      <div className='home'>
      <div className="star-background">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{ left: star.x, top: star.y }}
        ></div>
      ))}
    </div>
    </div>
    </>
  )
}
