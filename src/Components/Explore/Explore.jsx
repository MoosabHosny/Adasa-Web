import { Link } from "react-router";

export default function Explore({ pro }) {
  const { count, name } = pro;
 
  return (
    <>
      <section className="bg-7">
        <div className="container-fluid container-50px pt-5 pb-5">
          <div className="d-flex flex-column justify-content-center align-items-center  m-auto">
            <div className="p-2 rounded-5 bg-4 fw-bold ps-4 pe-4 border-1 color-1">
              التصنيفات
            </div>
            <h1 className="fw-bold text-white fs-2 text-center pt-2">
              استكشف حسب الموضوع
            </h1>
            <p className="fs-3 text-white-50  text-center">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="d-flex flex-wrap g-2 col-12">
            <Link to="/blog/إضاءة" className="col-md-3 col-6 p-2 text-decoration-none ">
              <div className=" p-3 bg-8 rounded-4 d-flex flex-column  hover-5">
                <span className="w-50px h-50px rounded-4 color-1 bg-4 border-1   d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-gear"></i>
                </span>
                <h3 className="text-white pt-2">{pro[0].name}</h3>
                <p className="text-white-50 ">{pro[0].count}</p>
              </div>
            </Link>

            <Link to="/products" className="col-md-3 col-6 p-2 text-decoration-none">
              <div className=" p-3 bg-8 rounded-4 d-flex flex-column hover-5 ">
                <span className="w-50px h-50px rounded-4 color-2 bg-4 border-1   d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-user "></i>
                </span>
                <h3 className="text-white pt-2">{pro[1].name}</h3>
                <p className="text-white-50 ">{pro[1].count}</p>
              </div>
            </Link>

            <Link to="/products" className="col-md-3 col-6 p-2 text-decoration-none">
              <div className=" p-3 bg-8 rounded-4 d-flex flex-column  hover-5">
                <span className="w-50px h-50px rounded-4 color-2 bg-4 border-1   d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-image"></i>
                </span>
                <h3 className="text-white pt-2">{pro[2].name}</h3>
                <p className="text-white-50 ">{pro[2].count}</p>
              </div>
            </Link>

            <Link to="/products" className="col-md-3 col-6 p-2 text-decoration-none">
              <div className=" p-3 bg-8 rounded-4 d-flex flex-column hover-5">
                <span className="w-50px h-50px rounded-4 color-2 bg-4 border-1  d-flex justify-content-center align-items-center">
                 <i className="fa-solid fa-sliders"></i>
                </span>
                <h3 className="text-white pt-2">{pro[3].name}</h3>
                <p className="text-white-50 ">{pro[3].count}</p>
              </div>
            </Link>

            <Link to="/products" className="col-md-3 col-6 p-2 text-decoration-none">
              <div className=" p-3 bg-8 rounded-4 d-flex flex-column  hover-5">
                <span className="w-50px h-50px rounded-4 color-2 bg-4 border-1   d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-gear"></i>
                </span>
                <h3 className="text-white pt-2">{pro[4].name}</h3>
                <p className="text-white-50 ">{pro[4].count}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
