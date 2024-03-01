import { Separator } from '@/components/ui/separator';

import SettingsLayout from '../components/layout';
import { AccountForm } from './account-form';

export default function SettingsAccountPage() {
  return (
    <div className=" space-y-6 pb-16 pt-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Account</h2>
        <p className="text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <SettingsLayout>
        <AccountForm />
      </SettingsLayout>
    </div>
  );
}
