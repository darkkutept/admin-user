import * as React from "react";
import { ILineSeperatorProps, ILineSeperatorStyleProps, ILineSeperatorStyles } from './LineSeperator.types';
import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";

const getClassNames = classNamesFunction<ILineSeperatorStyleProps, ILineSeperatorStyles>();
export class LineSeperatorBase extends React.Component<ILineSeperatorProps, {}>{
  render ()
  {
    const {
      className,
      styles,
      lineColor,
      lineHeight,
      lineWidth,
      lineStyle
    } = this.props;

    const classNames = getClassNames( styles,
      {
        className,
        lineColor,
        lineHeight,
        lineWidth,
        lineStyle
      } );
    return (
      <hr className={ classNames.root } />
    );
  }
}