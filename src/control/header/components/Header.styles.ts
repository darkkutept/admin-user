import { IHeaderStyles, IHeaderStyleProps } from './Header.types';
const [width,width0] = [320,0];
const [white,black] = ['white','black'];
export const getStyles = ( props: IHeaderStyleProps ): IHeaderStyles =>
{
   const {
      className,
   } = props;

   const styles: IHeaderStyles = {
      root: [
         className,
         {
           backgroundColor:'#333333',
           padding: '10px',
           display: 'flex',
           justifyContent:'space-between',
           alignItems:'center',
           font:'16px sans-serif',
         }
      ], 
     
       
      HeaderRight:[
         {
            display:'flex',
         }
      ],
      iconHeaderRight:[
         {
            marginRight:'20px',
            color:'#FFFFFF',
            cursor: 'pointer',
         }
      ],
     
      iconShowApp:[
         {
            color:'black'
         }
      ]
     
     
    
   }
 
   return styles;
}