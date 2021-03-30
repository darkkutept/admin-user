import * as React from "react";
import { IIconShowAppProps, IIconShowAppStyleProps, IIconShowAppStyles } from './IconShowApp.types';
import {  classNamesFunction } from 'office-ui-fabric-react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { press } from '../mutatorActions/pressing'
import { observer } from 'mobx-react';
import getStore from '../store/store';

const getClassNames = classNamesFunction<IIconShowAppStyleProps, IIconShowAppStyles>();
@observer
export class IconShowAppBase extends React.Component<IIconShowAppProps, {}>{


   render() {
      const {
         className,
         styles,
         appName,
         iconName,
      } = this.props;
      let isExpanded = getStore().widthShow;
      const classNames = getClassNames(styles, { className, isExpanded });

      return (
         <div className={classNames.HeaderLeft}>
            <FontIcon iconName={iconName} className={classNames.iconHeaderLeft} onClick={this.changeShow}/>
            <div className={classNames.appName}>{appName}</div>
            <div className={classNames.root}>
               <div className={classNames.divTag}>
                  <span>Office</span>
                  <FontIcon iconName="ChromeBackMirrored" className={classNames.iconRight} />
               </div>
            </div>
         </div>



      );
   }
   private changeShow = (): void => {
      press();
   };


}

