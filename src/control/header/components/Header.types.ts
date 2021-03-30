import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';


export interface IHeaderProps
{
 
   className?: string;
   styles?: IStyleFunctionOrObject<IHeaderStyleProps, IHeaderStyles>;
   children?: JSX.Element
   
}

export interface IHeaderStyleProps
{
   className?: string;
   
}


export interface IHeaderStyles
{
   root?: IStyle;
   HeaderRight?: IStyle;
  iconHeaderRight?:IStyle;
  showApp?:IStyle;
  iconShowApp?:IStyle;
}