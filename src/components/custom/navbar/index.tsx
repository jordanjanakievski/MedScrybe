'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

export function Navbar() {
  return (
    <div
      className="flex h-16 items-center px-4"
      style={{ backgroundColor: '#77B8FF', boxShadow: '0 0 5px #222222'}}
    >
      <NavigationMenu className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/dashboard">
              <Image
                src="images/logo.png"
                alt="MedScrybe Logo"
                width={50}
                height={50}
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-sm font-medium transition-colors hover:text-primary"
              href="/convert"
              style={{ marginLeft: '10px' }}
            >
              Convert
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-sm font-medium transition-colors hover:text-primary"
              href="/configurations"
              style={{ marginLeft: '10px' }}
            >
              Configurations
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
