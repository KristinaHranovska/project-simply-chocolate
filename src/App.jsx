import './shared/styles/index';

import { MainPage } from './pages';
import SharedLayout from './shared/components/SharedLayout/SharedLayout';

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <SharedLayout>
        <MainPage />
      </SharedLayout>
    </>
  );
};

export default App;
