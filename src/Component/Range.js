import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React from 'react'

const Range = ({setPrice, price}) => {
  return (
    <div>
    <h4>Price range</h4>
    <div className='range'><span>0$</span><span>5000$</span></div>
      <Slider defaultValue={0} min={0} max={100} step={20} onChange={(e)=> price<5000? setPrice(price+1000):price}>
  <SliderTrack bg='red.100'>
    <Box position='relative' right={10} />
    <SliderFilledTrack bg='tomato' />
  </SliderTrack>
  <SliderThumb boxSize={6} />
</Slider>
    </div>
  )
}

export default Range
