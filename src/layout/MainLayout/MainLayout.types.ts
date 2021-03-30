import { IStyleFunctionOrObject } from '@uifabric/utilities';
import { IStyle } from '@uifabric/styling';


export interface IMainLayoutProps
{
   history: History;
   className?: string;
   styles?: IStyleFunctionOrObject<IMainLayoutStyleProps, IMainLayoutStyles>;
   children?: JSX.Element;
}

export interface IMainLayoutStyleProps
{
   className?: string;
}

export interface IMainLayoutStyles
{
   root: IStyle;
   appHeaderContainer?: IStyle;
   bodyContainer?: IStyle;
   navContainer?: IStyle;
   contentContainer?: IStyle;
   content?: IStyle;
}