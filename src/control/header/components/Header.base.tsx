import * as React from "react";
import { IHeaderProps, IHeaderStyleProps, IHeaderStyles } from "./Header.types";
import { classNamesFunction } from "office-ui-fabric-react";
import { initializeIcons } from "@fluentui/react";
import { observer } from "mobx-react";
import { IconShowApp } from "../../iconShowApp/components/IconShowApp";

initializeIcons();
const getClassNames = classNamesFunction<IHeaderStyleProps, IHeaderStyles>();
@observer
export class HeaderBase extends React.Component<IHeaderProps, {}> {
  render() {
    const { className, styles } = this.props;

    const classNames = getClassNames(styles, { className });

    return (
      <div className={classNames.root}>
        <IconShowApp appName={"ProptechSoft"} iconName={"AlignLeft"} />

        <div className={classNames.HeaderRight}>
         {this.props.children}
        </div>
      </div>
    );
  }
}
