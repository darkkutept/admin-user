import { INavAppStyles, INavAppStyleProps } from './NavApp.types';
import { getTheme, IIconStyles, INavStyles } from 'office-ui-fabric-react';
import { FontSizes } from "@uifabric/styling";

const [minWidth, maxWidth] = [38, 230];
const [show, hide] = ['none', 'flex'];


const theme = getTheme();


export const NavItemIconStyle: IIconStyles = {
   root: {
      color: `${theme.palette.black} !important`,
   }
}


export const NavStyles: Partial<INavStyles> =
{
   root: {
      margin: 0,
      overflow: "hidden",
      fontSize: FontSizes.large,
      color: `${theme.palette.black} !important`,
      background: "none",
      width: "100%",
      height: "auto",
      backgroundColor: "none",
      selectors: {
        "&::parent": {
          flexGrow: 1
        }
      },
      
    },
   group: {
      overflowX: 'hidden',
      marginBottom: '-40px'
   },
   navItems: {
      
   },
   navItem: {
      fontSize: FontSizes.medium,
      color: "red",
      selectors: {
        ".ms-Nav-navItems .ms-Nav-compositeLink .ms-Nav-link": {
          paddingLeft: "48px"
        },
        ".ms-Nav-navItems .ms-Nav-compositeLink .ms-Nav-link i": {
          display: "none"
        },
      }
   },
   link: {

   },
   linkText: {

   },
   chevronButton: {
      left: 180,
      // left: "232px",
      top: 0,
      width: "48px",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      background: "none",
      color: theme.palette.black,
      selectors: {
        "&:after": {
          display: "none"
        }
      },
   },
   chevronIcon: {
      position: "static",
      lineHeight: "42px",
      height: "42px",
      color: `${ theme.palette.black } !important`,
      fontSize: FontSizes.medium,
      background: "none"
   },
   compositeLink: {
      background: "none",
      selectors: {
        "&:hover *": {
          background: `${ theme.palette.neutralQuaternaryAlt } !important`,
          color: 'black'
        }
      }
   },
   groupContent: {
      
   }
}



export const getStyles = (props: INavAppStyleProps): INavAppStyles => {
   const {
      className,
      isExpanded
   } = props;

   const styles: INavAppStyles = {
      root: [
         className,
         {
            // ... root style 
            width: `${isExpanded ? maxWidth : minWidth}px`,
            height: '100%',
            boxSizing: 'border-box',
            border: '1px solid #eee',
            overflowY: 'auto',
            flexWrap: 'wrap',
            position: "relative",
            overflowX: "hidden",
            backgroundColor: "rgb(239, 239, 239)"
         }
      ],
      buttonIcon: [
         {
            width: '36px',
            color: `${theme.palette.black} !important`,
            justifyContent: "left"
         }
      ],
      buttonHidden: [
         {
            display: `${isExpanded ? show : hide}`,

         }
      ],

   }

   return styles;
}