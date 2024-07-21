import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container-fluid mx-8 flex justify-between items-center">
        <Link href="/">
        <h1 className="text-4xl font-semibold">Portfolio<span className="text-accent">.</span></h1>
        </Link>
        
        <div className="hidden xl:flex items-center gap-8">
          <Navbar/>
          <Link href="/contact">
          <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
