import { Separator } from '@/components/ui/separator';

import SettingsLayout from '../components/layout';
import { NotificationsForm } from './notifications-form';

export default function SettingsNotificationsPage() {
  return (
    <div className=" space-y-6 pb-16 pt-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
        <p className="text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
      <Separator />
      <SettingsLayout>
        <NotificationsForm />
      </SettingsLayout>
    </div>
  );
}
