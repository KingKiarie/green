import SearchInput from "./SearchInput";
import "../styles/styles.scss";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className="Hero">
        <h1>Elimika,Jitambulishe,Jiwasilishe</h1>
        <SearchInput />
        <h2>Hello</h2>
      </section>
    </>
  );
}
