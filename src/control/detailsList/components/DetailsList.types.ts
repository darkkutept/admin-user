import { IStyle } from '@fluentui/react';
import { IStyleFunctionOrObject } from '@fluentui/react';

export interface IDetailsListBasicProps {
  className?: string;
  styles?: IStyleFunctionOrObject<IDetailsListBasicStyleProps, IDetailsListBasicStyles>;
  displayname?:string
  email?:string
}

export interface IDetailsListBasicExampleState {
  items?: IDetailsListBasicProps[];
  selectionDetails?: string;
  displayname?:string
  mang?:any
}

export interface IDetailsListBasicStyleProps {
  className?: string;
}

export interface IDetailsListBasicStyles {
  rightRoot?: IStyle;
  exampleChildClass?: IStyle;
}
