// routes
import { PATH_PAGE } from '../../routes/path';
// components
import Iconify from '../../components/utils/Iconify';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'system-uicons:home'} {...ICON_SIZE} />,
    path: PATH_PAGE.root,
  },
];

export { menuConfig };