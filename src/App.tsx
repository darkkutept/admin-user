import React from "react";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  FontIcon,
  mergeStyles,
} from "office-ui-fabric-react";

import logo from "./fabric.png";
import { NavApp } from "./control/nav/components";
import { NavItemIconStyle } from "./control/nav/components/NavApp.styles";
import { initializeIcons } from "@fluentui/react";
import { MainLayout } from "./layout/MainLayout";


initializeIcons()
export const App: React.FunctionComponent = () => {
  return (
    <div>
     <MainLayout history = {history}></MainLayout>
    </div>
  );
};
