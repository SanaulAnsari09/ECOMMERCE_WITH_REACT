import React from "react";
import { NavLink } from "react-router-dom";

const CardHeroComp = ({
  accessories1,
  accessories2,
  accessories3,
  accessories4,
  pColor,
  bgColor,
  offer,
  navlink,
}) => {
  return (
    <>
      <div className="firstCard" style={{ backgroundImage: bgColor }}>
        <div className="oneP">
          <NavLink to={`/${navlink}`}>
            <img src={accessories1} alt="card" />
          </NavLink>
          <p style={{ backgroundColor: pColor }}>{offer}</p>
        </div>
        <div className="oneP">
          <NavLink to={`/${navlink}`}>
            <img src={accessories2} alt="card" />
          </NavLink>
          <p style={{ backgroundColor: pColor }}>{offer}</p>
        </div>
        <div className="oneP">
          <NavLink to={`/${navlink}`}>
            <img src={accessories3} alt="card" />
          </NavLink>
          <p style={{ backgroundColor: pColor }}>{offer}</p>
        </div>
        <div className="oneP">
          <NavLink to={`/${navlink}`}>
            <img src={accessories4} alt="card" />
          </NavLink>
          <p style={{ backgroundColor: pColor }}>{offer}</p>
        </div>
      </div>
    </>
  );
};

export default CardHeroComp;
