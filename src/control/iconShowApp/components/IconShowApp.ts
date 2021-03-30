import { styled } from '@uifabric/utilities';
import { IIconShowAppProps, IIconShowAppStyleProps, IIconShowAppStyles } from './IconShowApp.types';
import {IconShowAppBase } from './IconShowApp.base';
import { getStyles } from './IconShowApp.styles';

export const IconShowApp = styled<IIconShowAppProps, IIconShowAppStyleProps, IIconShowAppStyles>(
    IconShowAppBase,
   getStyles
);