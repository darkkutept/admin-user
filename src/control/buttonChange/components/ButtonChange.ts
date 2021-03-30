import { styled } from '@uifabric/utilities';
import { IButtonChangeProps, IButtonChangeStyleProps, IButtonChangeStyles } from './ButtonChange.types';
import { ButtonChangeBase } from './ButtonChange.base';
import { getStyles } from './ButtonChange.styles';

export const ButtonChange = styled<IButtonChangeProps, IButtonChangeStyleProps, IButtonChangeStyles>(
   ButtonChangeBase,
   getStyles
);