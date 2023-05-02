import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const TourCrad = ({tour}) => {
  return (
    <div>
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
src={tour.image}    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{tour.name}</Heading>

      <Text py='2'>
        {tour.info}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        {tour.price}
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>
  )
}

export default TourCrad
