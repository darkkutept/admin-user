import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';
import { FormEvent } from 'react';

export interface IPanelStyles1 {
  root?: IStyle;
  hieu?: IStyle;
  main?: IStyle;
}

export interface IPanelStylesProps{
    className?: string;
}

export interface IPanelProps{
    className?:string
    styles?:IStyleFunctionOrObject<IPanelStylesProps, IPanelStyles1>;
   
}

export interface IPanelState{
  displayname?: any,
  username?:any,
  email?: string,
}

