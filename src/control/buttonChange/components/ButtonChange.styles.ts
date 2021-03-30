
import { IButtonChangeStyles, IButtonChangeStyleProps } from './ButtonChange.types';

export const getStyles = ( props: IButtonChangeStyleProps ): IButtonChangeStyles =>
{
   const {
      className,
   } = props;

   const styles: IButtonChangeStyles = {
      root: [
         className,
         {
            // ... root style 
            backgroundColor:'#eee',
            border: 'none',
            cursor: 'pointer',
            outline: "none",
            selectors:{
               "&:hover":{
                  backgroundColor:"white"
               },
            },
            height: "44px",
            width:"100%",
            textAlign: "left",
            fontFamily: "Segoe UI"
         }
      ],
      buttonItem: {
         position: "absolute",
         left:0,
         top: 34,
         width:"100%",
      },
      
      iconClass: {
         fontSize: "17px",
         marginTop: "12px",
         marginLeft: "2px",

      },
      buttonName: {
         marginLeft: "5px",
         fontSize:"14px"
      }


   }
   return styles;
}
