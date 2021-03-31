import { IPanelStyles } from "office-ui-fabric-react";
import { IPanelStyles1, IPanelStylesProps } from "./Panel.types";

export const getStyles = (props: IPanelStylesProps): IPanelStyles1 => {
    const { 
        className,
    } = props;

    console.log('aaaaaa');

    const styles: IPanelStyles1 = {
        
        root: [
         
           {
              // ... root style 
             backgroundColor:'red'
           },
           className
        ],
     }

     return styles;
}

export const PanelStyles: Partial<IPanelStyles> =
{
   root: {
     
    },
    main :{
    
    }
}

