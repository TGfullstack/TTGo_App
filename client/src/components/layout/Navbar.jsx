'use client';
import {
  Button,
  Navbar as HeroUINavbar,
  Input,
  Kbd,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import { link as linkStyles } from '@heroui/theme';
import clsx from 'clsx';
import NextLink from 'next/link';
import { siteConfig } from '../../../config/site';

// Icons
import useAuth from '@/hooks/useAuth';
import LogoutButton from '../auth/LogoutButton';
import {
  DiscordIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  TwitterIcon,
  WindowIcon,
} from '../icons';
import LogoComponent from '../Logo';
import { ThemeSwitch } from '../ThemeSwitcher';

export default function Navbar({ onToggleSidebar }) {
  const { user, isLoggedIn } = useAuth();
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar position="sticky" className="w-full">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-[40px] h-[40px]">
          {/* <NavbarItem> */}
          <Button
            isIconOnly
            variant="light"
            className="hidden sm:block"
            onPress={onToggleSidebar}
          >
            <WindowIcon className="w-5 h-5" />
          </Button>
          {/* </NavbarItem> */}
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <LogoComponent
              logo="./images/TTGo.png"
              height={100}
              width={100}
              className="rounded-none"
            />
            {/* <p className='font-bold text-inherit'>FOLIO</p> */}
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex"></NavbarItem>
        {isLoggedIn ? (
          <>
            <NavbarItem className="text-sm text-gray-500">
              Welcome, {user?.id}
            </NavbarItem>
            <NavbarItem>
              <LogoutButton />
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-default-600 bg-default-100"
                href={'/login'}
                startContent={<HeartFilledIcon className="text-danger" />}
                variant="flat"
              >
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Link href="/register">Register</Link>
            </NavbarItem>
          </>
        )}
        {/* {typeof window !== 'undefined' && localStorage.getItem('token') && (
          <NavbarItem>
            <LogoutButton/>
          </NavbarItem>
        )} */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {isLoggedIn ? (
            <>
              <NavbarItem>
                <LogoutButton />
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/register">Register</Link>
              </NavbarItem>
            </>
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
