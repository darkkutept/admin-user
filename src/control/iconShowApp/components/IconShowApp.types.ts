import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';


export interface IIconShowAppProps
{
 
   className?: string;
   styles?: IStyleFunctionOrObject<IIconShowAppStyleProps, IIconShowAppStyles>;
   appName:string;
   iconName:string;
}

export interface IIconShowAppStyleProps
{
   className?: string;
   isExpanded?: boolean;
}


export interface IIconShowAppStyles
{
   root?: IStyle;
   showApp?: IStyle;
   iconRight?: IStyle;
   divTag?: IStyle;
   iconHeaderLeft?: IStyle;
   appName?: IStyle;
   HeaderLeft?: IStyle;
}