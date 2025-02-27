import { Provider } from "../components/ui/provider";
import NavBar from "../components/molecules/navBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
