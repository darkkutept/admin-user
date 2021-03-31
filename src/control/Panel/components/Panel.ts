import { styled } from '@uifabric/utilities';
import { IPanelProps, IPanelStyles1, IPanelStylesProps  } from './Panel.types';
import {PanelBase } from './Panel.base';
import { getStyles } from './Panel.styles';

export const Panel = styled<IPanelProps, IPanelStylesProps, IPanelStyles1>(
    PanelBase,
   getStyles
);
