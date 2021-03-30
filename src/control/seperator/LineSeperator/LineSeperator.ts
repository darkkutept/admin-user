import { styled } from '@uifabric/utilities';
import { ILineSeperatorProps, ILineSeperatorStyleProps, ILineSeperatorStyles } from './LineSeperator.types';
import { LineSeperatorBase } from './LineSeperator.base';
import { styles } from './LineSeperator.styles';

export const LineSeperator = styled<ILineSeperatorProps, ILineSeperatorStyleProps, ILineSeperatorStyles>(
  LineSeperatorBase,
  styles
);