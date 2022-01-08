
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Showcase.css'
export const Showcase = () => (
  <div>
  <div className='bigcom'>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
    </div> <br/>
    
    <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and ready!
  </div>
)

export default Showcase
