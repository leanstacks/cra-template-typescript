import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { useSettings } from 'providers/SettingsProvider';
import { PropsWithClassName, PropsWithTestId } from 'types/component.types';

interface ThemeProps extends PropsWithChildren, PropsWithClassName, PropsWithTestId {}

const Theme = ({ className, children, testId = 'theme' }: ThemeProps) => {
  const settings = useSettings();

  return (
    <div className={settings.theme} data-testid={testId}>
      <div
        className={classNames(
          'min-h-screen bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300/70',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Theme;
