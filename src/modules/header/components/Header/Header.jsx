import { BasketButton } from '@shared/components';
import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header>
      <Logo />
      <HeaderNav />
      <BasketButton />
    </header>
  );
};

export default Header;
