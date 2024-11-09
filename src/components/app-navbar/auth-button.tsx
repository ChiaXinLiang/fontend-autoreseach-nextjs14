"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  Loader2Icon,
  LogInIcon,
  LogOutIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <Loader2Icon
        className="h-5 w-5 animate-spin"
        aria-label="Loading authentication status..."
      />
    );
  }

  if (status === "authenticated") {
    const signOutClick = () =>
      signOut({
        callbackUrl: "/",
      });
    if (minimal) {
      return (
        <Button
          onClick={signOutClick}
          color="danger"
          variant="ghost"
          className="flex items-center gap-2"
        >
          <LogOutIcon className="h-4 w-4" />
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
            fallback={<UserIcon className="h-5 w-5" />}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <div className="flex flex-col">
              <p className="flex items-center gap-2 font-semibold">
                <UserIcon className="h-4 w-4" />
                Signed in as
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <MailIcon className="h-4 w-4" />
                {data.user?.email}
              </p>
            </div>
          </DropdownItem>
          <DropdownItem
            key="sign-out"
            color="danger"
            onClick={signOutClick}
            className="flex items-center gap-2"
          >
            <LogOutIcon className="h-4 w-4" />
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/profile",
        })
      }
      className="flex items-center gap-2 bg-black text-white"
    >
      <LogInIcon className="h-4 w-4" />
      Sign In
    </Button>
  );
}
