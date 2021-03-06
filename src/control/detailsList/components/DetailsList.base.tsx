/* eslint-disable import/no-anonymous-default-export */
import {
  classNamesFunction,
  Fabric,
  Text,
  Announced,
  TextField,
  MarqueeSelection,
  DetailsList,
  IColumn,
  Selection,
  ITextFieldStyles,
  DetailsListLayoutMode,
  ThemeProvider,
} from "@fluentui/react";
import { observer } from "mobx-react";
import * as React from "react";
import { openPanelName } from "../../panelChangeName/mutatorAction/setOpenPanelChangeName";
import { addArrToLocal, getArrWords, loadState } from "../selectors/getStoreFromLocal";
import getStore from "../store/store";
import {
  IDetailsListBasicExampleState,
  IDetailsListBasicProps,
  IDetailsListBasicStyleProps,
  IDetailsListBasicStyles,
} from "./DetailsList.types";
const getClassNames = classNamesFunction<
  IDetailsListBasicStyleProps,
  IDetailsListBasicStyles
>();
export const store = getStore();

const textFieldStyles: Partial<ITextFieldStyles> = {
  root: { maxWidth: "300px" },
};
@observer
export default class DetailsListBase extends React.Component<
  IDetailsListBasicProps,
  IDetailsListBasicExampleState
> {
  private _selection: Selection;
  private _columns: IColumn[];

  constructor(props: any) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () =>
        this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    // Populate with items for demos.

    this._columns = [
      {
        key: "column1",
        name: "ID",
        fieldName: "id",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
      {
        key: "column2",
        name: "Display name",
        fieldName: "displayname",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
      {
        key: "column3",
        name: "User name",
        fieldName: "username",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
      {
        key: "column4",
        name: "Email",
        fieldName: "email",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
    ];

    this.state = {
      selectionDetails: this._getSelectionDetails(),
      mang: getArrWords(),
    };
  }
  componentDidUpdate(){
  
    console.log('Component DID UPDATE!')
  }

  componentWillUpdate() {
    console.log('Component WILL UPDATE!');
 }

  public render(): JSX.Element {
    const { styles, className } = this.props;
    const classNames = getClassNames(styles, { className });
    const { selectionDetails } = this.state;


    return (
      <ThemeProvider>
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={getArrWords()}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </ThemeProvider>
    );
  }
  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " +
          (this._selection.getSelection()[0] as IDetailsListBasicProps)
            .displayname
        );
      default:
        return `${selectionCount} items selected`;
    }
  }

  // private _onFilter = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
  //   this.setState({
  //     items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems,
  //   });
  // };

  private _onItemInvoked = (item: IDetailsListBasicProps): void => {
    // alert(`??ang ch???n: ${item.displayname}`);
    openPanelName();
  };
}
