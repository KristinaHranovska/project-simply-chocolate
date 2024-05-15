import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import { BasketButton } from 'shared/components/BasketButton/BasketButton';

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
