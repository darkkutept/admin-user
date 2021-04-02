
import { styled } from '@fluentui/react';
import { PanelChangeNameBase } from "./PanelChangeName.base";
import { getStyles } from "./PanelChangeName.styles";
import { IPanelChangeNameProps, IPanelChangeNameStyleProps, IPanelChangeNameStyles } from "./PanelChangeName.types";

export const PanelChangeName = styled<IPanelChangeNameProps, IPanelChangeNameStyleProps, IPanelChangeNameStyles>(
  PanelChangeNameBase,
    getStyles
  );