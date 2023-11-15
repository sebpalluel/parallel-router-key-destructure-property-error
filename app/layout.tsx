import {
  AppNavLayout,
  type AppNavLayoutProps,
} from "../components/AppNavLayout";
import '../styles.css';

interface RootLayoutProps extends AppNavLayoutProps { }


export default function RootLayout({
  ...appNavLayoutProps
}: RootLayoutProps) {
  return (
    <html>
      <head />
      <body>
        <AppNavLayout {...appNavLayoutProps} />
      </body>
    </html>
  );
}
