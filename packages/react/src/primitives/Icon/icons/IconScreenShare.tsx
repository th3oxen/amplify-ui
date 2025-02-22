import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconScreenShare = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V16C2 17.1 2.89 18 4 18H0V20H24V18H20ZM4 16V6H20V16.01L4 16ZM13 9.13C9.11 9.67 7.56 12.33 7 15C8.39 13.13 10.22 12.28 13 12.28V14.47L17 10.73L13 7V9.13Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
