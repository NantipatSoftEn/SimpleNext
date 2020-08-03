import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blogs/[slug]" as="/blogs/hello-world">
          <a>To Hello World Blog post</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
