import "@/styles/globals.css";
import Link from "next/link";
export default function App({ Component, pageProps }) {
  return (
    <>
      {console.log(Component.App)}
      {console.log(pageProps)}
      <Navation />
      <Component {...pageProps} />;
    </>
  );
}

function Navation() {
  return (
    <>
      <Link href="/" style={{ marginRight: "10px", color: "blue" }}>
        Home{" "}
      </Link>
      <Link href="/blog" style={{ marginRight: "10px", color: "blue" }}>
        Blog{" "}
      </Link>
      <Link href="/courses" style={{ marginRight: "10px", color: "blue" }}>
        Course{" "}
      </Link>
    </>
  );
}
