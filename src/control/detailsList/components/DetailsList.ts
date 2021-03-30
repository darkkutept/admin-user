import { styled } from '@fluentui/react';
import styles from './DetailsList.styles';
import DetailsListBase from './DetailsList.base';
import * as React from 'react';
import { IDetailsListBasicProps, IDetailsListBasicStyleProps, IDetailsListBasicStyles } from './DetailsList.types';

export const RightPane: React.StatelessComponent<IDetailsListBasicProps> = styled<IDetailsListBasicProps, IDetailsListBasicStyleProps, IDetailsListBasicStyles>(
  DetailsListBase,
  styles
);
