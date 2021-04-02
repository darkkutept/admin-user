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
  IPanelChangeNameProps,
  IPanelChangeNameStyleProps,
  IPanelChangeNameStyles,
} from "./PanelChangeName.types";
import { Panel } from "../../Panel";
import { getIsOpen } from "../selector/getIsOpen";
import { openPanelName } from "../mutatorAction/setOpenPanelChangeName";

const getClassNames = classNamesFunction<
  IPanelChangeNameStyleProps,
  IPanelChangeNameStyles
>();
const buttonStyles = { root: { marginRight: 8 } };

initializeIcons();
@observer
export class PanelChangeNameBase extends React.Component<
  IPanelChangeNameProps,
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
          name="Change Name"
          iconClose="Close"
          footerContent={onRenderFooterContent}
          isFooterBottom={true}
          openPanel={getIsOpen()}
          onClose={() => openPanelName()}
        >
          <TextField
            label="Display Name"
            placeholder="Please enter displayName here"
            ariaLabel="Required without visible label"
            required
            // onChange={}
            name="displayname"
          />
        </Panel>
      </>
    );
  }
}
