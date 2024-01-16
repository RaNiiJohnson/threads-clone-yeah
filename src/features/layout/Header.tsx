import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { LoginButton } from "./auth/LoginButton";
import { getAuthSession } from "@/lib/auth";
import { UserProfil } from "./auth/UserProfil";

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent fixed top-0 z-40 bg-background w-full">
      <div className="container flex items items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Thread-Enolc</h2>
        {session ? <UserProfil /> : <LoginButton />}
        <ThemeToggle />
      </div>
    </header>
  );
};
