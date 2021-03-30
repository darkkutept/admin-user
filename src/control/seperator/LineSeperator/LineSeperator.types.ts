import { IStyleFunctionOrObject } from '@uifabric/utilities';
import { IStyle } from '@uifabric/styling';

export enum LineStyles
{
  dotted = "dotted",
  dashed = "dashed",
  solid = "solid",
  double = "double",
  groove = "groove",
  ridge = "ridge",
  inset = "inset",
  outset = "outset"
}

export interface ILineSeperatorProps
{
  className?: string;
  styles?: IStyleFunctionOrObject<ILineSeperatorStyleProps, ILineSeperatorStyles>;
  lineWidth?: string | number;
  lineHeight?: string | number;
  lineColor?: string;
  lineStyle?: LineStyles;
}

export interface ILineSeperatorStyleProps
{
  className?: string;
  lineWidth?: string | number;
  lineHeight?: string | number;
  lineColor?: string;
  lineStyle?: LineStyles;
}
export interface ILineSeperatorStyles
{
  root: IStyle;
}