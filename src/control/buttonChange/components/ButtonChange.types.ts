import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';


export interface IButtonChangeProps
{
   className?: string;
   styles?: IStyleFunctionOrObject<IButtonChangeStyleProps, IButtonChangeStyles>;
}

export interface IButtonChangeStyleProps
{
   className?: string;
}

export interface IButtonChangeStyles
{
   root?: IStyle;
   buttonItem?: IStyle;
   iconClass?:IStyle;
   buttonName?:IStyle;
}