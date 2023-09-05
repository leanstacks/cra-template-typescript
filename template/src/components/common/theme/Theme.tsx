import { PropsWithChildren } from 'react';

import { useSettings } from 'providers/SettingsProvider';

function Theme(props: PropsWithChildren) {
  const settings = useSettings();

  return (
    <div data-testid="theme" className={settings.theme}>
      <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300/70">
        {props.children}
      </div>
    </div>
  );
}

export default Theme;
