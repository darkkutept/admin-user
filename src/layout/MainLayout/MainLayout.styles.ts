import { IMainLayoutStyles, IMainLayoutStyleProps } from './MainLayout.types';

export const getStyles = ( props: IMainLayoutStyleProps ): IMainLayoutStyles =>
{
   const {
      className
   } = props;
   const styles: IMainLayoutStyles = {
      root: [
         className,
         {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "fixed",
            overflow: "hidden"
         }
      ],
      appHeaderContainer: {
         display: "block"
      },
      bodyContainer: {
         flexGrow: 1,
         display: "flex",
         flexDirection: "row"
      },
      navContainer: {
         position: "relative"
      },
      contentContainer: {
         flexGrow: 1,
         position: "relative",
         // height: "100%",
         overflow: "auto",
         display: "flex",
         flexDirection: "column"
      },
      content: {
         position: "absolute",
         padding: "0 40px",
         width: "calc(100% - 80px)",
         minHeight: "100%"
      }
   }

   return styles;
}