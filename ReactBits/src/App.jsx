import React from 'react'
import './App.css'
import Particles from '../src/components/Particles';

const App = () => {
  return (
    <>
      <div style={{backgroundColor:'black' ,height:'100vh',width:'100vw'}}>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
    </>
  )
}

export default App