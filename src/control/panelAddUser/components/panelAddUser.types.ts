import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@fluentui/react';


export interface IPanelAddUserProps
{
 
   className?: string;
   styles?: IStyleFunctionOrObject<IPanelAddUserStyleProps, IPanelAddUserStyles>;
   children?: JSX.Element
   
}

export interface IPanelAddUserStyleProps
{
   className?: string;
   
}


export interface IPanelAddUserStyles
{
   root?: IStyle;

}