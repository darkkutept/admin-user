import * as React from "react";
import {
  IAddUsersProps,
  IAddUsersStyleProps,
  IAddUsersStyles,
} from "./AddUsers.types";
import { classNamesFunction, PrimaryButton } from "office-ui-fabric-react";
import {
  CommandBar,
  DefaultButton,
  IButtonProps,
  ICommandBarItemProps,
  TextField,
} from "@fluentui/react";
import { LineSeperator } from "../../seperator/LineSeperator";
import DetailsListBase from "../../detailsList/components/DetailsList.base";
import { openPanel } from "../../Panel/mutatorAction/openPanel";
import { Panel } from "../../Panel";
import { getStore } from "../../Panel/store/panelStore";
import { observer } from "mobx-react";
import { PanelChangeName } from "../../panelChangeName/components";
import { openPanelName } from "../../panelChangeName/mutatorAction/setOpenPanelChangeName";

const getClassNames = classNamesFunction<
  IAddUsersStyleProps,
  IAddUsersStyles
>();
const overflowProps: IButtonProps = { ariaLabel: "More commands" };
const buttonStyles = { root: { marginRight: 8 } };

@observer
export class AddUsersBase extends React.Component<IAddUsersProps, {}> {
  render() {
    const { className, styles } = this.props;
    const classNames = getClassNames(styles, { className });

    const onRenderFooterContent = () => (
      <div>
        <PrimaryButton onClick={this.handleSubmit} styles={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={() => openPanel()}>Cancel</DefaultButton>
      </div>
    );
    const onRenderPanelAddUser = () => (
      <Panel
        name="Add User"
        iconClose="Close"
        footerContent={onRenderFooterContent}
        isFooterBottom={true}
        openPanel={getStore().isOpen}
        onClose={() => openPanel()}
      >
        <TextField
          label="Display Name"
          placeholder="Please enter displayName here"
          ariaLabel="Required without visible label"
          required
          onChange={this.handleChange}
          name="displayname"
        />
        <TextField
          label="User Name"
          placeholder="Please enter user here"
          required
          onChange={this.handleChange}
          name="username"
        />
        <TextField
          label="Email"
          placeholder="Please enter email here"
          required
          type="email"
          onChange={this.handleChange}
          name="email"
        />
      </Panel>
    );

    return (
      <div>
        <h1 className={classNames.hieu}>Active User</h1>
        <LineSeperator></LineSeperator>
        <CommandBar
          items={_items}
          overflowItems={_overflowItems}
          overflowButtonProps={overflowProps}
          farItems={_farItems}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />
        <div>
          <DetailsListBase></DetailsListBase>
          <PanelChangeName></PanelChangeName>
        </div>
      </div>
    );
  }
  private handleSubmit = (e: any) => {
    e.preventDefault();
    // addToArray(this.state);
    openPanel();
  };

  

  private handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
}

const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "Add a user",
    cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
    iconProps: { iconName: "Add" },
    onClick: () => openPanel(),
  },
  {
    key: "upload",
    text: "Changed Name",
    iconProps: { iconName: "Upload" },
    onclick: openPanelName(),
  },
  {
    key: "share",
    text: "Share",
    iconProps: { iconName: "Share" },
    onClick: () => console.log("Share"),
  },
  {
    key: "download",
    text: "Download",
    iconProps: { iconName: "Download" },
    onClick: () => console.log("Download"),
  },
];

const _overflowItems: ICommandBarItemProps[] = [
  {
    key: "move",
    text: "Move to...",
    onClick: () => console.log("Move to"),
    iconProps: { iconName: "MoveToFolder" },
  },
  {
    key: "copy",
    text: "Copy to...",
    onClick: () => console.log("Copy to"),
    iconProps: { iconName: "Copy" },
  },
  {
    key: "rename",
    text: "Rename...",
    onClick: () => console.log("Rename"),
    iconProps: { iconName: "Edit" },
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: "tile",
    text: "Grid view",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Grid view",
    iconOnly: true,
    iconProps: { iconName: "Tiles" },
    onClick: () => console.log("Tiles"),
  },
  {
    key: "info",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "Info" },
    onClick: () => console.log("Info"),
  },
];
