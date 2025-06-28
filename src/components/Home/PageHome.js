import videoPageHome from "../../assets/StoreStock.mp4";

const PageHome = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop controls>
        <source src={videoPageHome} type="video/mp4" />
      </video>
    </div>
  );
};

export default PageHome;
