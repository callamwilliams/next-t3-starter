import { Separator } from '@/components/ui/separator';

import SettingsLayout from './components/layout';
import { ProfileForm } from './profile/profile-form';

export default function SettingsNotificationsPage() {
  return (
    <div className=" space-y-6 pb-16 pt-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
        <p className="text-muted-foreground">Configure your profile.</p>
      </div>
      <Separator />
      <SettingsLayout>
        <ProfileForm />
      </SettingsLayout>
    </div>
  );
}
