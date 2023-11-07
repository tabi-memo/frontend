import { extendTheme } from '@chakra-ui/react';
import { customColors } from '@/theme/color';

export const customTheme = extendTheme({
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
  colors: customColors,
});
