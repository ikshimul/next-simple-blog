import Menu from "@/components/Menu";
import styles from "./page.module.css";
import Link from "next/link";
const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className={styles.myColor}>Simple Blog</h1>
        <Menu />
      </div>
      <h1 className={styles.myColor}>Home Page</h1>
      <p className="italic font-semibold">Welcome to my Simple blog page</p>
      <p>
        Go to my blog page{" "}
        <Link className={styles.myBlog} href={{ pathname: "/blog" }}>
          My Blog
        </Link>
      </p>
      <div className="relative flex place-items-center before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    </main>
  );
};

export default page;
