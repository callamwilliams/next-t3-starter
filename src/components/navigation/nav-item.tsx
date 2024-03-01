import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { MainNavItem } from '@/types';
import { useRouter } from 'next/router';

interface NavItemProps {
  item: MainNavItem;
  isAuthenticated: boolean;
}

export function NavItem({ item, isAuthenticated }: NavItemProps) {
  const { pathname } = useRouter();

  if (item.authRoute && !isAuthenticated) return null;

  return (
    <Link
      className={cn(
        'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
        item.href.startsWith(`/${pathname}`)
          ? 'text-foreground'
          : 'text-foreground/60',
        item.disabled && 'cursor-not-allowed opacity-80',
      )}
      href={item.disabled ? '#' : item.href}
    >
      {item.title}
    </Link>
  );
}
