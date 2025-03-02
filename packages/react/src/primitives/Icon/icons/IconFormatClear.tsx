import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconFormatClear = (props) => {
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
          d="M20 7.99986V4.99986H6.39L9.39 7.99986H11.22L10.67 9.27986L12.76 11.3799L14.21 7.99986H20ZM3.41 4.85986L2 6.26986L8.97 13.2399L6.5 18.9999H9.5L11.07 15.3399L16.73 20.9999L18.14 19.5899L3.41 4.85986Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
