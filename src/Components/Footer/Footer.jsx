import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <section className="bg-11">
        <div className="line"></div>
        <div className="container-fluid container-50px pt-5 pb-5">
          <div className="d-flex flex-wrap col-12">
            <div className="col-12 col-md-6 col-lg-3 pt-5">
              <div className="d-flex">
                <div className=" bg-1 text-white fw-bold w-50px h-50px rounded-4 d-flex justify-content-center align-items-center">
                  ع
                </div>
                <span className="text-white fs-4 pe-3 fw-bold">عدسة</span>
              </div>
              <p className="text-white-50 pt-4">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="pt-4">
                <span className="p-3 bg-8 rounded-3 me-2">
                  <a href="">
                    <i className="fa-brands fa-x-twitter text-white-50"></i>
                  </a>
                </span>

                <span className="p-3 bg-8 rounded-3 me-2">
                  <a href="">
                    <i className="fab fa-github text-white-50"></i>
                  </a>
                </span>

                <span className="p-3 bg-8 rounded-3 me-2">
                  <a href="">
                    <i className="fa-brands fa-instagram text-white-50"></i>
                  </a>
                </span>
                
                <span className="p-3 bg-8 rounded-3 me-2">
                  <a href="">
                    <i className="fa-brands fa-youtube text-white-50"></i>
                  </a>
                </span>
              </div>

            </div>

            <div className="col-12 col-md-6 col-lg-3 pt-5 pe-4">
              <p className="fs-3 fw-bold text-white ">استكشف</p>
              <Link
                to="/Home"
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                الرئيسية
              </Link>
              <Link
                to="/Blog"
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                المدونة
              </Link>
              <Link
                to="/Metrics"
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                من نحن
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-3 pt-5 pe-4">
              <p className="fs-3 fw-bold text-white ">التصنيفات</p>
              <a
                href=""
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                إضاءة
              </a>
              <a
                href=""
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                بورتريه
              </a>
              <a
                href=""
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                مناظر طبيعية
              </a>
              <a
                href=""
                className="text-white-50 text-decoration-none d-block pt-3"
              >
                تقنيات
              </a>
            </div>

            <div className="col-12 col-md-6 col-lg-3 pt-5 pe-4">
              <p className="fs-3 fw-bold text-white ">ابقى على اطلاع</p>
              <p className="text-white-50">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form action="" className="mt-5">
                <input
                  type="text"
                  className="p-3  w-100 rounded-4 bg-8 border-0"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button className="bg-1 w-100 border-0 p-3 rounded-4  mt-2 ">
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
          <div className="line mb-3 mt-5"></div>
          <div>
            
          </div>
        </div>
      </section>
    </>
  );
}
