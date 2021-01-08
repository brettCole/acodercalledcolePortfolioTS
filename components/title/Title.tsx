import React from 'react';
import BackgroundMacbook from '../../public/OversizedMacbook.svg'

const Title = () => (
  <div className='d-flex flex-column justify-content-center align-items-center vw-100 bg-secondary bg-gradient'>
    <h1 className='display-3 position-absolute text-white' style={{'width':'450px', 'top':'35%', 'textShadow':'0 0 5px'}}>Front End Developer with Full Stack experience</h1>
    <object className='align-self-start' type='image/svg+xml' data={BackgroundMacbook} />
  </div>
)

export default Title