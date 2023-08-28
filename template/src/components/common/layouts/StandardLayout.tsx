import { Outlet } from 'react-router-dom';

import Footer from '../footer/Footer';

function StandardLayout() {
  return (
    <div data-testid="layout-standard" className="px-4 py-4">
      <div className="pb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default StandardLayout;
