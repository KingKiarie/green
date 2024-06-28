import "../styles/styles.scss";

export default function Cards() {
  return (
    <>
      <div className="card-container">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
}

const Card1 = () => {
  return (
    <>
      <div className="card">
        <img src="public/home-menu-community-svgrepo-com.svg" alt="" />
        <h2>Communities</h2>
        <p>Desc</p>
        <button className="btn1">Join</button>
      </div>
    </>
  );
};

const Card2 = () => {
  return (
    <>
      <div className="card">
        <img src="public/books-svgrepo-com.svg" alt="" />
        <h2>Information</h2>
        <p>Desc</p>
        <button className="btn1">Read</button>
      </div>
    </>
  );
};

const Card3 = () => {
  return (
    <>
      <div className="card">
        <img src="public/calendar-tick-svgrepo-com.svg" alt="" />
        <h2>Events</h2>
        <p>Desc</p>
        <button className="btn1">Visit</button>
      </div>
    </>
  );
};
