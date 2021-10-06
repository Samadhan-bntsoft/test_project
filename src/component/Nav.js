import React from 'react'
import { Link } from "react-router-dom";

const style = {
  nav: {
    backgroundColor: "cadetblue",
    listStyleType: "none",
    overflow:'auto'
  },
  navStyle: {
    color: "white",
    padding: "10px",
    marginLeft: "auto",
  },
};

function Nav() {
    return (
      <div>
        <ul style={style.nav} className="navclass">
          <Link to="/usestate">
            <li style={style.navStyle}>useState</li>
          </Link>
          <Link to="/useref">
            <li style={style.navStyle}>useRef</li>
          </Link>
          <Link to="/usereducer">
            <li style={style.navStyle}>useReducer</li>
          </Link>
          <Link to="/useeffect">
            <li style={style.navStyle}>useEffect</li>
          </Link>
          <Link to="/usecontext">
            <li style={style.navStyle}>useContext</li>
          </Link>
          <Link to="/promise">
            <li style={style.navStyle}>Promise</li>
          </Link>
          <Link to="/presentationalcaomponent">
            <li style={style.navStyle}>presentational comp</li>
          </Link>
          <Link to="/redux">
            <li style={style.navStyle}>Redux comp</li>
          </Link>
          <Link to="/reduxsaga">
            <li style={style.navStyle}>Redux Saga</li>
          </Link>
          <Link to="/materialui">
            <li style={style.navStyle}>MaterialUi comp</li>
          </Link>
          <Link to="/newtest">
            <li style={style.navStyle}>Child to Parent data</li>
          </Link>
          <Link to="/lazy">
            <li style={style.navStyle}>Lazy comp</li>
          </Link>
          <Link to="/rechart">
            <li style={style.navStyle}>Rechart comp</li>
          </Link>
          <Link to="/HOC">
            <li style={style.navStyle}>HOC comp</li>
          </Link>
          <Link to="/Formtest">
            <li style={style.navStyle}>Form testing</li>
          </Link>
          <Link to="/Axiostest">
            <li style={style.navStyle}>Axios testing</li>
          </Link>
        </ul>
      </div>
    );
}

export default Nav
