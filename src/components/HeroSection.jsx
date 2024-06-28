import SearchInput from "./SearchInput";
import "../styles/styles.scss";
import Navbar from "./Navbar";
import Cards from "./Cards";

export default function HeroSection() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className="Hero">
        <div className="hero-section">
          <h1>Elimika,Jitambulishe,Jiwasilishe</h1>
          <SearchInput />

          <div className="content">
            <h1>Resolve</h1>
            <p>
              Struggling trying to understand the finance bill? Dont worry we
              got your best interest at heart
            </p>
          </div>
          <div className="cards">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
}
