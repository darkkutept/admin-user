import { styled } from '@uifabric/utilities';
import { INavAppProps, INavAppStyleProps, INavAppStyles } from './NavApp.types';
import { NavBase } from './NavApp.base';
import { getStyles } from './NavApp.styles';

export const NavApp = styled<INavAppProps, INavAppStyleProps, INavAppStyles>(
   NavBase,
   getStyles
);