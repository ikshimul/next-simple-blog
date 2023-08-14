"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Menu = () => {
  let currentPath = usePathname();
  return (
    <div>
      <Link
        href={"/home"}
        className={currentPath === "/home" ? "active-link" : "pending-link"}
      >
        Home
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link
        href={"/blog"}
        className={currentPath === "/blog" ? "active-link" : "pending-link"}
      >
        Blog
      </Link>
    </div>
  );
};

export default Menu;
