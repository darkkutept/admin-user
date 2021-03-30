
import { IAddUsersStyles, IAddUsersStyleProps } from './AddUsers.types';

export const getStyles = ( props: IAddUsersStyleProps ): IAddUsersStyles =>
{
   const {
      className,
   } = props;

   const styles: IAddUsersStyles = {
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
   }
   return styles;
}
