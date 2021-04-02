import {
  CommandBar,
  DefaultButton,
  initializeIcons,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import { observer } from "mobx-react";
import { classNamesFunction } from "@fluentui/react";
import * as React from "react";
import {
  IPanelAddUserProps,
  IPanelAddUserStyleProps,
  IPanelAddUserStyles,
} from "./panelAddUser.types";
import { Panel } from "../../Panel";
import { getIsOpen } from "../selector/getIsOpen";
import { openPanelAddUser } from "../mutatorAction/setOpenPanelAddUser";
import { getStore } from "../store/panelAddUserStore";

const getClassNames = classNamesFunction<
  IPanelAddUserStyleProps,
  IPanelAddUserStyles
>();
const buttonStyles = { root: { marginRight: 8 } };

initializeIcons();
@observer
export class PanelAddUserBase extends React.Component<
  IPanelAddUserProps,
  {}
> {
  render() {
    const { className, styles } = this.props;
    const classNames = getClassNames(styles, { className });
    const onRenderFooterContent = () => (
      <div>
        <PrimaryButton
          onClick={() => console.log("save ne")}
          styles={buttonStyles}
        >
          Save
        </PrimaryButton>
        <DefaultButton onClick={() => console.log("cancel ne")}>
          Cancel
        </DefaultButton>
      </div>
    );
    return (
      <>
        <Panel
          name="Add User"
          iconClose="Close"
          footerContent={onRenderFooterContent}
          isFooterBottom={true}
          openPanel={getIsOpen()}
          onClose={() => openPanelAddUser()}
        >
          <TextField
            label="Display Name"
            placeholder="Please enter displayName here"
            ariaLabel="Required without visible label"
            required
            // onChange={}
            name="displayname"
          />
          <TextField
            label="User Name"
            placeholder="Please enter displayName here"
            ariaLabel="Required without visible label"
            required
            // onChange={}
            name="username"
          />
          <TextField
            label="Email"
            placeholder="Please enter displayName here"
            ariaLabel="Required without visible label"
            required
            // onChange={}
            name="email"
          />
        </Panel>
      </>
    );
  }
}
