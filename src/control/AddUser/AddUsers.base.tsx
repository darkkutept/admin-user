import * as React from "react";
import {  } from './AddUsers.types';
import { classNamesFunction } from 'office-ui-fabric-react';
import { IButtonChangeProps, IButtonChangeStyleProps, IButtonChangeStyles } from "../buttonChange/components";

const getClassNames = classNamesFunction<IButtonChangeStyleProps, IButtonChangeStyles>();


export class AddUsersBase extends React.Component<IButtonChangeProps, {}>{
   render() {
      const {
         className,
         styles
      } = this.props;
      const classNames = getClassNames(styles, { className });
      return (

            <div>
             
            </div>
     
      );
   }
}