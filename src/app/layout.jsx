import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <Header />
        {children}
      </body>
    </html>
  );
}
