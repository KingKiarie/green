import "../styles/styles.scss";

export default function Cards() {
  return (
    <>
      <card1 />
      <card2 />
      <card3 />
    </>
  );
}

const card1 = () => {
  return (
    <>
      <div className="card">
        <h2>Card</h2>
      </div>
    </>
  );
};

function card2() {
  return (
    <>
      <div className="card">
        <h2>Card</h2>
      </div>
    </>
  );
}

function card3() {
  return (
    <>
      <div className="card">
        <h2>Card</h2>
      </div>
    </>
  );
}
