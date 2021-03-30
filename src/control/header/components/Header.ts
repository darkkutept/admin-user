import { styled } from '@uifabric/utilities';
import { IHeaderProps, IHeaderStyleProps, IHeaderStyles } from './Header.types';
import {HeaderBase } from './Header.base';
import { getStyles } from './Header.styles';

export const Header = styled<IHeaderProps, IHeaderStyleProps, IHeaderStyles>(
    HeaderBase,
   getStyles
);