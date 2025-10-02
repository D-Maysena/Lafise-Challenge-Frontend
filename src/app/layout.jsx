import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Sidebar/>
      <body>{children}</body>
    </html>
  );
}
