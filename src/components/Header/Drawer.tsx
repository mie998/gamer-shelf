import React, { useState, useContext } from 'react';
import { css } from '@emotion/react';
import { gamerShelfThemeContext } from '../../contexts';
import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gamerShelfTheme = useContext(gamerShelfThemeContext);
  const drawerButtonTheme = css({
    fontSize: '1.8rem',
    padding: '0 auto',
    marginTop: '0.5rem',
    marginRight: '2rem',
    marginLeft: 'auto',
    color: `${gamerShelfTheme.colors.steamWordColor}`,
  });

  return (
    <>
      <Button colorScheme="ghost" onClick={onOpen} css={drawerButtonTheme}>
        <HamburgerIcon />
      </Button>
      <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <p>unchi</p>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};
