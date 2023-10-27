import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import { PropsWithClassName, PropsWithTestId } from 'types/component.types';

interface StandardLayoutProps extends PropsWithClassName, PropsWithTestId {}

const StandardLayout = ({ className, testId = 'layout-standard' }: StandardLayoutProps) => {
  return (
    <div className={classNames('p-4', className)} data-testid={testId}>
      <Outlet />
    </div>
  );
};

export default StandardLayout;
