import { notFound } from "next/navigation";
import {
  AppNavLayout,
  type AppNavLayoutProps,
} from "../../components/AppNavLayout";

interface RootLayoutProps extends AppNavLayoutProps {
  params: {
    locale: string;
  };
}

const locales = ["en"];

export default function RootLayout({
  params: { locale },
  ...appNavLayoutProps
}: RootLayoutProps) {
  if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body>
        <AppNavLayout {...appNavLayoutProps} />
      </body>
    </html>
  );
}
