import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';

import { IIconProps, INavLinkGroup } from 'office-ui-fabric-react';

export interface INavAppProps
{
   className?: string;
   styles?: IStyleFunctionOrObject<INavAppStyleProps, INavAppStyles>;
   disabled?: boolean;
   checked?: boolean;
   navLinkGroups: INavLinkGroup[];
   iConNavProps?:IIconProps;
}

export interface INavAppStyleProps
{
   className?: string;
   width?: number;
   isExpanded?:boolean;
 
  
}

export interface IExpandableItem
{
   key: string | undefined;
   isExpanded: boolean | undefined;
}

export interface INavAppStyles
{
   root?: IStyle;
   buttonIcon?: IStyle;
   hidden?: IStyle;
   buttonHidden?: IStyle;
   iconStyle?: IStyle;
}


