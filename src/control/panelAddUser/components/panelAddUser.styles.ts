import { IPanelAddUserStyleProps, IPanelAddUserStyles } from "./panelAddUser.types";

export const getStyles = ( props: IPanelAddUserStyleProps ): IPanelAddUserStyles => {
    const {

    className,

    } = props;
  
    
    const styles: IPanelAddUserStyles = {
        root: [
            {

            },
            className,
        ]

    }

   
      // etc
    return styles;
  }