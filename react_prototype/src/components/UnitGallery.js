import { useGlobalContext } from "../context.js";
import Loading from "./Loading.js";
import Unit from "./Unit.js";

const UnitGallery = () => {
  const { loading, units } = useGlobalContext();
  if (loading) {
    return (
      <div className="container p-3">
        <Loading className="loading-icon" />
      </div>
    );
  }
  if (units.length < 1) {
    return <h2 className="section-title">No units available</h2>;
  }
  return (
    <section className="section-gallery">
      <div className="container-fluid bg-white p-3">
        <h1 className="fs-4">Units</h1>
        <hr />
        <div className="d-flex ms-5 ms-md-3 flex-wrap gap-4">
          {units.map((unit) => {
            return <Unit key={unit.unitID} {...unit} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default UnitGallery;
