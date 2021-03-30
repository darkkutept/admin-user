import * as React from "react";
import { INavAppProps, INavAppStyleProps, INavAppStyles } from './NavApp.types';
import { classNamesFunction } from 'office-ui-fabric-react';
import { NavStyles } from './NavApp.styles'
import {  INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { observer } from "mobx-react";
import { press } from "../mutatorActions/pressing"
import { IconButton, IIconProps } from 'office-ui-fabric-react';
import getStore from '../store/store';
import { Nav } from "@fluentui/react";
import { ButtonChange } from "../../buttonChange/components";



const getClassNames = classNamesFunction<INavAppStyleProps, INavAppStyles>();


const GlobalNavButton: IIconProps = { iconName: 'GlobalNavButton' };


@observer
export class NavBase extends React.Component<INavAppProps, {}>{

  render() {
    const {
      className,
      styles,
      navLinkGroups,
      iConNavProps,
    } = this.props;

    let isExpanded = getStore().isExpanded
    const classNames = getClassNames(styles, { className, isExpanded });
    return (
      <div className={classNames.root}>
        <IconButton
          iconProps={iConNavProps}
          className={classNames.buttonIcon}
          onClick={() => _toggleNavigation(navLinkGroups)}>
        </IconButton>

        <Nav
          styles={NavStyles}
          groups={navLinkGroups}
        />
        <ButtonChange className={classNames.buttonHidden}></ButtonChange>
      </div>
    );
  }
}



function _toggleNavigation(navLinkGroups: INavLinkGroup[]): void {
  //press button icon to close nav
  press();


  if (getStore().isExpanded === false) {
    navLinkGroups.map(groupLink => {
      groupLink.links.map(link => {
        link.isExpanded = getStore().isExpanded;
      });
    });
  }
}


