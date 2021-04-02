import { IPanelProps } from '@fluentui/react';
import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';
import { IRenderFunction } from 'office-ui-fabric-react';
import { FormEvent, SyntheticEvent } from 'react';

export interface IPanelStyles1 {
  root?: IStyle;
  hieu?: IStyle;
  main?: IStyle;
}

export interface IPanelStylesProps{
    className?: string;
}

export interface IPanelProps1{
    className?:string;
    styles?:IStyleFunctionOrObject<IPanelStylesProps, IPanelStyles1>;
    name: string;
    iconClose:string;
    footerContent:IRenderFunction<IPanelProps>;
    isFooterBottom?:boolean;
    openPanel:boolean;
    onClose: ((ev?: SyntheticEvent<HTMLElement, Event> | KeyboardEvent | undefined) => void) | undefined;
   
}

export interface IPanelState{
  id?:any
  displayname?: any,
  username?:any,
  email?: string,
}

