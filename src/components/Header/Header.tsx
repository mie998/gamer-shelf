import { Flex, FlexProps, Text, Button } from '@chakra-ui/react';
import { ThemeContext, css } from '@emotion/react';
import { useContext } from 'react';

export const Header = () => {
  const theme = useContext(ThemeContext);
  const steamColorPalette = ['#171a21', '#1b2838', '#2a475e', '#66c0f4'];
  const steamWordColor = '#c7d5e0';
  const headerContainer = css({
    width: '100%',
    height: '3.5rem',
    position: 'fixed',
    background: `linear-gradient(${steamColorPalette[0]}, ${steamColorPalette[1]}, ${steamColorPalette[2]},${steamColorPalette[2]})`,
  });
  const headerItem = css({
    backgroundColor: 'none',
    color: `${steamWordColor}`,
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
      <Button
        css={headerItem}
        _hover={{ bg: `${steamColorPalette[2]}` }}
        variant="ghost"
      >
        Gamer-shelf
      </Button>
    </Flex>
  );
};
