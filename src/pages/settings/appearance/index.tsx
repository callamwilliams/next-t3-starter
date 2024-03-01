import { Separator } from '@/components/ui/separator';

import SettingsLayout from '../components/layout';
import { AppearanceForm } from './appearance-form';

export default function SettingsAppearancePage() {
  return (
    <div className=" space-y-6 pb-16 pt-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Appearance</h2>
        <p className="text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <SettingsLayout>
        <AppearanceForm />
      </SettingsLayout>
    </div>
  );
}
