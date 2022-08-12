/* eslint-disable */

import React from 'react'
import {render} from '@testing-library/react'
import Exhibitions from './components/exhibitions';
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Exhibitions />)
    
    expect(asFragment(<Exhibitions />)).toMatchSnapshot()
   });