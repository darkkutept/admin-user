import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@fluentui/react';


export interface IPanelChangeNameProps
{
 
   className?: string;
   styles?: IStyleFunctionOrObject<IPanelChangeNameStyleProps, IPanelChangeNameStyles>;
   children?: JSX.Element;
   displayname?:string
   
}

export interface IPanelChangeNameStyleProps
{
   className?: string;
   
}


export interface IPanelChangeNameStyles
{
   root?: IStyle;

}