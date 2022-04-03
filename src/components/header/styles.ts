import { SxProps } from '@mui/material';
import { themeColors } from '../../theme/themeColors';

export const styles: {
  border: SxProps;
} = {
  border: {
    borderBottom: '5px solid',
    borderImage: `linear-gradient(to right, ${themeColors.blue} 50%, ${themeColors.yellow} 50%)`,
    borderImageSlice: 1,
  },
};
