import { Link } from "react-router-dom";
import {
  FaBed,
  FaShower,
  FaRulerVertical,
  FaCarAlt,
  FaMoneyBill,
} from "react-icons/fa";

const Unit = ({
  unitID,
  name,
  bedroom,
  bathroom,
  size,
  parkingSlot,
  status,
  price,
  url,
}) => {
  return (
    <>
      <div className="card">
        <img className="unit-image" src={url} alt={unitID} />
        <div className="card-body">
          <h5 className="card-title">
            {unitID}, {name}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            It is currently {status}
          </h6>
          <div className="row">
            <p className="col-6">
              <FaBed /> {bedroom} bedroom
            </p>
            <p className="col-6">
              <FaRulerVertical /> {size} sqr
            </p>
          </div>
          <div className="row">
            <p className="col-6">
              <FaShower /> {bathroom} bathroom
            </p>
            <p className="col-6">
              <FaCarAlt /> {parkingSlot} parking slot
            </p>
          </div>
          <div className="row">
            <p className="col-6">
              <FaMoneyBill /> RM {price}
            </p>
            <Link to={`/units/${unitID}`} className="btn btn-primary">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unit;
