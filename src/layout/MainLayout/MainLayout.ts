import { styled } from '@uifabric/utilities';
import { IMainLayoutProps, IMainLayoutStyleProps, IMainLayoutStyles } from './MainLayout.types';
import { MainLayoutBase } from './MainLayout.base';
import { getStyles } from './MainLayout.styles';

export const MainLayout = styled<IMainLayoutProps, IMainLayoutStyleProps, IMainLayoutStyles>(
   MainLayoutBase,
   getStyles
);