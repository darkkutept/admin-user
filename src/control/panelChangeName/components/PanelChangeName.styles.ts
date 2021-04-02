import { IPanelChangeNameStyleProps, IPanelChangeNameStyles } from "./PanelChangeName.types";

export const getStyles = ( props: IPanelChangeNameStyleProps ): IPanelChangeNameStyles => {
    const {

    className,

    } = props;
  
    
    const styles: IPanelChangeNameStyles = {
        root: [
            {

            },
            className,
        ]

    }

   
      // etc
    return styles;
  }