import header from "./components/header";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex ">
        <Sidebar />
        <div className="flex flex-col flex-1 w-1/2 ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
