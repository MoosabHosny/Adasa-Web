import { Link, NavLink } from "react-router";
// import "../../../public/logo-GdqArQRt.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-2 p-3 navbar-dark"> 
     
      <div className="container-fluid container-50px d-flex justify-content-between align-items-center">
        
        
        <div className="d-flex align-items-center">
          <div className="w-50px">
            <img src="public/logo-GdqArQRt.png" alt="logo" className="w-100" />
          </div>
          <div className="d-flex flex-column text-white-50 fw-bold ms-2">
            <span>عدسة</span>
            <span className="color-1 small">عالم التصوير الفوتوغرافي</span>
          </div>
        </div>

        
        <button
          className="navbar-toggler custom-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <div className="navbar-dis fw-bold border border-secondary rounded-5 p-2 mx-auto my-2 my-md-0">
            <ul className="navbar-nav pe-0 text-white-50">
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="/Home">الرئيسية</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="/Blog">المدونة</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="/Metrics">من نحن</NavLink>
              </li>
            </ul>
          </div>

          <div className="form d-flex align-items-center justify-content-center">
            <button className="border-0 bg-transparent text-white-50 me-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="p-b-12px p-i-25px fw-bold text-white bg-1 border-0 rounded-5">
              ابدأ القراءة
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
