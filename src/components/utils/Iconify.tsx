import { Icon, IconifyIcon } from '@iconify/react';

type IconifyProps = {
  icon: IconifyIcon | string;
  style?: React.CSSProperties;
};

const Iconify = ({ icon, style, ...other }: IconifyProps): JSX.Element => {
  return <Icon icon={icon} style={{ ...style }} {...other} />;
};

export default Iconify;
