import * as React from "react";
import { IButtonChangeProps, IButtonChangeStyleProps, IButtonChangeStyles } from './ButtonChange.types';
import { classNamesFunction, FontIcon } from 'office-ui-fabric-react';
import { HashRouter as Router, Link } from 'react-router-dom'
const getClassNames = classNamesFunction<IButtonChangeStyleProps, IButtonChangeStyles>();


export class ButtonChangeBase extends React.Component<IButtonChangeProps, {}>{
   render() {
      const {
         className,
         styles
      } = this.props;
      const classNames = getClassNames(styles, { className });
      return (
         <Router>
            <div className={classNames.buttonItem}>
             
                  <button className={classNames.root}>
                     <FontIcon iconName='Home' className={classNames.iconClass}>
                     </FontIcon>
                  </button>
               
               <Link to = '/#'>
                  <button className={classNames.root}>
                     <FontIcon iconName='Contact' className={classNames.iconClass}>
                     </FontIcon>
                  </button>
               </Link>
               
               <button className={classNames.root}>
                  <FontIcon iconName='People' className={classNames.iconClass}>
                  </FontIcon>
               </button>
               <button className={classNames.root}>
                  <FontIcon iconName='Settings' className={classNames.iconClass}>
                  </FontIcon>
               </button>
               <button className={classNames.root}>
                  <FontIcon iconName='Chart' className={classNames.iconClass}>
                  </FontIcon>
               </button>
            </div>
         </Router>
      );
   }
}