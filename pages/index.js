import Image from "next/image";
import localFont from "next/font/local";
import HomePage from "./Home"; // Rename the import to 'HomePage' to resolve the conflict

// Example of defining fonts with localFont
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <HomePage /> {/* Use the renamed component here */}
    </>
  );
}
