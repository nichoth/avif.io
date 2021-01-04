import Link from "next/link";
import ConversionsCounter from "./ConversionsCounter";

export default function Header() {
  return (
    <>
      {
        <div className="header">
          <div className="flex-center">
            <Link href="/">
              <a className="logo">avif.io</a>
            </Link>
            <div className="conversionscounter">
              over <ConversionsCounter />
              files converted
            </div>
          </div>
          <div className="menu">
            <Link href="https://www.buymeacoffee.com/justinschmitz">Support</Link>
            <Link href="https://www.buymeacoffee.com/justinschmitz">Blog</Link>
            <Link href="/">
              <a className="button-primary">Convert</a>
            </Link>
          </div>
        </div>
      }
    </>
  );
}