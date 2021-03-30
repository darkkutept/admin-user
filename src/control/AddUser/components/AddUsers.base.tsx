import * as React from "react";
import {} from "./AddUsers.types";
import { classNamesFunction } from "office-ui-fabric-react";
import {
  IButtonChangeProps,
  IButtonChangeStyleProps,
  IButtonChangeStyles,
} from "../../buttonChange/components";
import { CommandBar, IButtonProps, ICommandBarItemProps } from "@fluentui/react";
import { LineSeperator } from "../../seperator/LineSeperator";
import DetailsListBase from "../../detailsList/components/DetailsList.base";

const getClassNames = classNamesFunction<
  IButtonChangeStyleProps,
  IButtonChangeStyles
>();
const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export class AddUsersBase extends React.Component<IButtonChangeProps, {}> {
  render() {
    const { className, styles } = this.props;
    const classNames = getClassNames(styles, { className });
    return (
      <div>
        <h1>Active User</h1>
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
        </div>
      </div>
    );
  }
}

const _items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      text: 'Add a user',
      cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
      iconProps: { iconName: 'Add' },
    },
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      href: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
      key: 'share',
      text: 'Share',
      iconProps: { iconName: 'Share' },
      onClick: () => console.log('Share'),
    },
    {
      key: 'download',
      text: 'Download',
      iconProps: { iconName: 'Download' },
      onClick: () => console.log('Download'),
    },
  ];
  
  const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
  ];
  
  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'tile',
      text: 'Grid view',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Grid view',
      iconOnly: true,
      iconProps: { iconName: 'Tiles' },
      onClick: () => console.log('Tiles'),
    },
    {
      key: 'info',
      text: 'Info',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Info',
      iconOnly: true,
      iconProps: { iconName: 'Info' },
      onClick: () => console.log('Info'),
    },
  ];
