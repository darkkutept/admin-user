import { IIconShowAppStyles, IIconShowAppStyleProps } from './IconShowApp.types';
const [width, width0] = [320, 0];
const [white,black] = ['white','black'];
export const getStyles = (props: IIconShowAppStyleProps): IIconShowAppStyles => {
   const {
      className,
      isExpanded
   } = props;

   const styles: IIconShowAppStyles = {
      root: [
         className,
         {
            zIndex:"999",
            textAlign: 'right',
            overflowY: 'auto',
            backgroundColor: '#FFFFFF',
            height: " 100vh",
            overflow: "auto",
            width: `${isExpanded ? width : width0}px`,
            position: 'absolute',
            top: '0',
            left: '0',
            boxShadow: ' rgba(0, 0, 0, 0.22) 0px 25.6px 57.6px 0px, rgba(0, 0, 0, 0.18) 0px 4.8px 14.4px',
         }
      ],
      iconRight: [
         {
            marginLeft: '10px'
         }
      ],
      divTag: [
         {
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
         }
      ],
      iconHeaderLeft: [
         {
            color: `${isExpanded ? black : white}`,
            textAlign: 'left',
            fontSize: '20px',
            cursor: 'pointer',
            gridColumn: '1/2',
            zIndex: '99999',
         }
      ],
      appName: [
         {
            gridColumn: '3/3',
            color: '#FFFFFF',
         }
      ],
      HeaderLeft:[
         {
            display: 'grid',
            gridTemplateColumns:' repeat(2, 1fr)',
         }
      ],
      hieu:[
         {
            color:'red',
         }
      ]
   }
   return styles;
}