import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerFooter, DrawerContent, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Navigation = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen} mr={2}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>  
    </div>
  )
}

export default Navigation
