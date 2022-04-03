import { SxProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const combineSxProps = (props: Array<SxProps<any> | boolean | undefined>) => {
  return props.filter((prop) => prop) as SxProps;
};
