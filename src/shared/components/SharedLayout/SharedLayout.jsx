import { Footer } from 'modules/footer';
import { Suspense } from 'react';
import { Header } from '../../../modules/header/component/Header/Header';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
