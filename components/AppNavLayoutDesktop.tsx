export interface AppNavLayoutDesktopProps {
  nav: React.ReactNode;
  profile: React.ReactNode;
}

export const AppNavLayoutDesktop: React.FC<AppNavLayoutDesktopProps> = ({
  profile,
  nav,
}) => {
  return (
    <div className="sticky top-0 z-20 hidden w-full border-b bg-background md:flex">
      <div className="flex-1 justify-start">{nav}</div>
      <div className="flex-1 justify-end">{profile}</div>
    </div>
  );
};
