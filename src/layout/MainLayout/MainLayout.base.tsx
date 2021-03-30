import { classNamesFunction } from "@uifabric/utilities";
import * as React from "react";

import {
  IMainLayoutProps,
  IMainLayoutStyleProps,
  IMainLayoutStyles,
} from "./MainLayout.types";
import { Home, Foo, Bar } from "../../control/componentContent/Pages";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { NavApp } from "../../control/nav/components";
import { NavItemIconStyle } from "../../control/nav/components/NavApp.styles";
import { Header } from "../../control/header/components";

const getClassNames = classNamesFunction<
  IMainLayoutStyleProps,
  IMainLayoutStyles
>();
export class MainLayoutBase extends React.Component<IMainLayoutProps, {}> {
  render() {
    const { className, styles } = this.props;

    const classNames = getClassNames(styles, { className });
    return (
      <div className={classNames.root}>
        <Header/>
        <div className={classNames.bodyContainer}>
          <div className={classNames.navContainer}>
            <NavApp
              iConNavProps={{
                iconName: "GlobalNavButton",
              }}
              navLinkGroups={[
                {
                  links: [
                    {
                      name: "Home",
                      iconProps: {
                        iconName: "Home",
                        styles: NavItemIconStyle,
                      },
                      url: "/#",
                    },
                    {
                      name: "User",
                      iconProps: {
                        iconName: "Contact",
                        styles: NavItemIconStyle,
                      },
                      url: "",
                      links: [
                        {
                          name: "Active Users",
                          url: "/#/foo",
                          key: "key1",
                          target: "",
                        },
                      ],
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className={classNames.contentContainer}>
            <div className={classNames.content}>
              <Router>
                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/foo" component={Foo} />
                    <Route exact path="/bar" component={Bar} />
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
