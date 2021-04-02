import { styled } from '@uifabric/utilities';
import { IPanelProps1, IPanelStyles1, IPanelStylesProps  } from './Panel.types';
import {PanelBase } from './Panel.base';
import { getStyles } from './Panel.styles';

export const Panel = styled<IPanelProps1, IPanelStylesProps, IPanelStyles1>(
    PanelBase,
   getStyles
);
