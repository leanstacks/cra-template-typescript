import { Outlet } from 'react-router-dom';

function StandardLayout() {
  return (
    <div data-testid="layout-standard" className="px-4 py-4">
      <Outlet />
    </div>
  );
}

export default StandardLayout;