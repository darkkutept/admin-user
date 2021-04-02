import * as React from "react";
import {
  IPanelProps1,
  IPanelState,
  IPanelStyles1,
  IPanelStylesProps,
} from "./Panel.types";
import { classNamesFunction } from "office-ui-fabric-react";
import {
  DefaultButton,
  Panel,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import { observer } from "mobx-react";
import { getStore } from "../store/panelStore";
import { openPanel } from "../mutatorAction/openPanel";
import { PanelStyles } from "./Panel.styles";
import { addUser } from "../action/addUser";
import getStoreDetails from "../../detailsList/store/store";
import { addToArray } from "../../detailsList/mutatorAction/addToArray";
import {
  addArrToLocal,
  saveState,
} from "../../detailsList/selectors/getStoreFromLocal";

const getClassNames = classNamesFunction<IPanelStylesProps, IPanelStyles1>();

const store = getStore();

@observer
export class PanelBase extends React.Component<IPanelProps1, IPanelState, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: getStoreDetails().arrWords.length + 1,
      displayname: "",
      username: "",
      email: "",
    };
  }

  public render(): JSX.Element {
    const {
      className,
      styles,
      name,
      iconClose,
      footerContent,
      isFooterBottom,
      openPanel,
      onClose,
    } = this.props;
    const classNames = getClassNames(styles, { className });

    return (
      <div>
        <Panel
          headerText={name}
          isOpen={openPanel}
          onDismiss={onClose}
          closeButtonAriaLabel={iconClose}
          styles={PanelStyles}
          onRenderFooterContent={footerContent}
          isFooterAtBottom={isFooterBottom}
        >
          {this.props.children}
        </Panel>
      </div>
    );
  }
  private handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  private handleSubmit = (e: any) => {
    e.preventDefault();
    addToArray(this.state);
    openPanel();
  };

    //   lưu trữ trên local store

  // private addToLocalStorage = () => {
  //   // Get the existing data
  //   var existing:any = JSON.parse(localStorage.getItem("state")!);

  //   existing = existing.concat(this.state)

  //   // Save back to localStorage
  //   localStorage.setItem("state", JSON.stringify(existing));
  // };

}



  
