import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';


export interface IAddUsersProps
{
   className?: string;
   styles?: IStyleFunctionOrObject<IAddUsersStyleProps, IAddUsersStyles>;
}

export interface IAddUsersStyleProps
{
   className?: string;
}

export interface IAddUsersStyles
{
   root?: IStyle;
   buttonItem?: IStyle;
   iconClass?:IStyle;
   buttonName?:IStyle;
}