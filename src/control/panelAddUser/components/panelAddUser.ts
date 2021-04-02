
import { styled } from '@fluentui/react';
import { PanelAddUserBase } from "./panelAddUser.base";
import { getStyles } from "./panelAddUser.styles";
import { IPanelAddUserProps,IPanelAddUserStyleProps, IPanelAddUserStyles } from "./panelAddUser.types";

export const PanelAddUser = styled<IPanelAddUserProps, IPanelAddUserStyleProps, IPanelAddUserStyles>(
  PanelAddUserBase,
    getStyles
  );