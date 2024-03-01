import { Separator } from '@/components/ui/separator';

import SettingsLayout from '../components/layout';
import { DisplayForm } from './display-form';

export default function SettingsDisplayPage() {
  return (
    <div className=" space-y-6 pb-16 pt-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Display</h2>
        <p className="text-muted-foreground">
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <Separator />
      <SettingsLayout>
        <DisplayForm />
      </SettingsLayout>
    </div>
  );
}
