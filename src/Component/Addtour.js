import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'


const Addtour = ({tours,setTours}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const[info,setInfo]=useState("")
    const[image,setImage]=useState("")
    const handleClick=()=>{
        setTours([...tours,{name,price,info,image}])
        onClose()
    }

  return (
    <div>
      <Button onClick={onOpen}>Add tour</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>New tour</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <FormControl>
  <FormLabel>Name</FormLabel>
  <Input type='text'  onChange={(e)=>setName(e.target.value)}/>
</FormControl>
<FormControl>
  <FormLabel>Info</FormLabel>
  <Input type='text'  onChange={(e)=>setInfo(e.target.value)}/>
</FormControl>
<FormControl>
  <FormLabel>Image</FormLabel>
  <Input type='text'  onChange={(e)=>setImage(e.target.value)}/>
</FormControl>
<FormControl>
  <FormLabel>Price</FormLabel>
  <Input type='number'  onChange={(e)=>setPrice(e.target.value)}/>
</FormControl>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button  onClick={handleClick} variant='ghost'>Save</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </div>
  )
}

export default Addtour
