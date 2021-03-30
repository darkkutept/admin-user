import { ILineSeperatorStyleProps, ILineSeperatorStyles, LineStyles } from './LineSeperator.types';
import { getTheme } from '@uifabric/styling';

const theme = getTheme();
export const styles = ( props: ILineSeperatorStyleProps ): ILineSeperatorStyles =>
{
  const {
    className,
    lineColor = theme.palette.neutralTertiaryAlt,
    lineHeight = "1px",
    lineWidth = "100%",
    lineStyle = LineStyles.solid,
  } = props;
  return {
    root: [
      className,
      {
        display: "block",
        // marginTop: "30px",
        width: lineWidth,
        border: "none",
        borderTop: [ lineColor, lineHeight, lineStyle ].join( " " ),
      }
    ]
  };
}