import { AppNavLayoutDesktopProps } from './AppNavLayoutDesktop';

export const AppNavLayoutMobile: React.FC<AppNavLayoutDesktopProps> = ({
  profile,
  nav,
}) => {
  return (
    <div
      data-testid="mobile-menu"
      className="fixed bottom-0 z-20 w-full border-t bg-background md:hidden"
    >
      <div className="grid h-16 grid-cols-7">
        <div className="col-span-5">{nav}</div>
        <div className="col-span-2">{profile}</div>
      </div>
    </div>
  );
};
