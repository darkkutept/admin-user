import { styled } from '@uifabric/utilities';
import { IAddUsersProps, IAddUsersStyleProps, IAddUsersStyles } from './AddUsers.types';
import { AddUsersBase} from './AddUsers.base';
import { getStyles } from './AddUsers.styles';

export const ButtonChange = styled<IAddUsersProps, IAddUsersStyleProps, IAddUsersStyles>(
   AddUsersBase,
   getStyles
);