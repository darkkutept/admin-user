import { mergeStyles } from '@fluentui/react';
import { IDetailsListBasicStyles, IDetailsListBasicStyleProps } from './DetailsList.types';

const getStyles = (props: IDetailsListBasicStyleProps): IDetailsListBasicStyles => {
  const { className } = props;
  const styles: IDetailsListBasicStyles = {
    rightRoot: [
      {
        position: 'relative',
        flexGrow: 1,
        display: 'flex'
      }],
    exampleChildClass: [
      {
        display: 'block',
        marginBottom: '10px',
      }
    ],
  };

  return styles;
};

export default getStyles;
