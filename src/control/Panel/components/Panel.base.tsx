import * as React from "react";
import { IPanelProps, IPanelState, IPanelStyles1, IPanelStylesProps } from "./Panel.types";
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

const getClassNames = classNamesFunction<IPanelStylesProps, IPanelStyles1>();
const buttonStyles = { root: { marginRight: 8 } };
const store = getStore();

@observer
export class PanelBase extends React.Component<IPanelProps,IPanelState, {}> {
  constructor(props:any) {
    super(props);
    this.state = {
      displayname: '',
      username: '',
      email: ''
    }}

  public render(): JSX.Element {
    
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

    return (
      <div>
        <Panel
          headerText="Add User"
          isOpen={store.isOpen}
          onDismiss={() => openPanel()}
          // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
          closeButtonAriaLabel="Close"
          styles={PanelStyles}
          onRenderFooterContent={onRenderFooterContent}
          // Stretch panel content to fill the available height so the footer is positioned
          // at the bottom of the page
          isFooterAtBottom={true}
        >
          <TextField
            label="Display Name"
            placeholder="Please enter displayName here"
            ariaLabel="Required without visible label"
            required
          
            onChange = { this.handleChange}
            name ='displayname'
          />
          <TextField
            label="User Name"
            placeholder="Please enter user here"
            required
          
            onChange = { this.handleChange}
            name='username'
          />
          <TextField
            label="Email"
            placeholder="Please enter email here"
            required
            type='email'
          
            onChange = {this.handleChange}
            name='email'
          />
        </Panel>
      </div>
    );
  }
  private handleChange = (e:any) => {
    this.setState({
      [e.target.name]:e.target.value,
    });
  }

  private handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(this.state);
    
  }
}

