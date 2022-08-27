import { createTheme } from '@mui/material';

import palette from './palette';
import typography from './typography';
import transitions from './transitions';

const theme = createTheme({ palette, typography, transitions });

export default theme;
