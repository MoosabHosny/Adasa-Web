import React from "react";

export default function TeamSection({ posts }) {
  
  return (
    <>
      <section className="bg-3 pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <span className="p-2 ps-4 pe-4 bg-4 color-1 fw-bold rounded-4 border-1">
              فريقنا
            </span>
            <h2 className="pt-5 fs-1 fw-bold text-white">تعرف على كتابنا</h2>
            <p className="text-white-50 fs-5">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>

          <div className="d-flex flex-wrap ">
            {posts.map((e , key) => (
              <div key={e.id} className="col-12 col-md-6 col-lg-4">
                <div className="p-3 m-3 text-center bg-14 rounded-4 ">
                  <div className="d-flex justify-content-center">
                    <div className="position-relative">
                      <div className="w-100px rounded-circle overflow-hidden border border-4 border-secondary">
                        <img src={e.author.avatar} alt="" />
                      </div>
                      <span className="p-1 fs-10px text-white rounded-circle bg-1 position-absolute mt-5 bottom-0 end-0">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white fs-5 fw-bold pt-3">
                      {e.author.name}
                    </h3>
                    <p className="color-2 fw-bold">{e.author.role}</p>
                    <div className="pt-3 pb-3">
                      <span className="p-2 bg-13 rounded-3 me-2">
                        <a href="">
                          <i className="fa-brands fa-x-twitter text-white-50"></i>
                        </a>
                      </span>

                      <span className="p-2 bg-13 rounded-3 me-2">
                        <a href="">
                          <i className="fab fa-github text-white-50"></i>
                        </a>
                      </span>

                      <span className="p-2 bg-13 rounded-3 me-2">
                        <a href="">
                          <i className="fa-brands fa-linkedin text-white-50"></i>
                        </a>
                      </span>

                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
