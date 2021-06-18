import { Flex, FlexProps, Text, Button } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Drawer } from './Drawer';
import { gamerShelfThemeContext } from '../../contexts';

export const Header = () => {
  const gamerShelfTheme = useContext(gamerShelfThemeContext);
  const steam = gamerShelfTheme.colors.steamColorPalette;
  const headerContainer = css({
    width: '100%',
    height: '3.5rem',
    position: 'fixed',
    background: `linear-gradient(${steam.deepDarkBlue},${steam.darkBlue},${steam.blue},${steam.lightBlue})`,
  });
  const headerItem = css({
    backgroundColor: 'none',
    color: `${gamerShelfTheme.colors.steamWordColor}`,
    marginLeft: '5rem',
    height: '100%',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
    borderRadius: '0',
  });

  return (
    <Flex as="header" css={headerContainer}>
      <Link href="/">
        <Button
          css={headerItem}
          _hover={{ bg: `${steam.blue}` }}
          variant="ghost"
        >
          <Image
            src="/images/gamershelf-logo-reshape.png"
            height={60}
            width={90}
          ></Image>
        </Button>
      </Link>
      <Drawer />
    </Flex>
  );
};
