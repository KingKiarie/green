import SearchInput from "./SearchInput";
import "../styles/styles.scss";

export default function HeroSection() {
  return (
    <>
      <section className="Hero">
        <div className="HeroSection">
          <SearchInput />
          <h2>Hello</h2>
        </div>
      </section>
    </>
  );
}
