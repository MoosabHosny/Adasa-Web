import { Link } from "react-router";

export default function FeaturedArticles({ posts }) {
  
  return (
    <>
      <section className="bg-6 pt-5 pb-5">
        <div className="container-fluid container-50px pt-5">
          <div>
            <div>
              <span className="p-2 bg-4 rounded-5 border-1 color-1 fw-bold ps-4 pe-4 me-3">
                مميز
              </span>
              <h2 className="text-white fw-bold fss-1 pt-3 ">مقالات مختارة</h2>
            </div>
            <div className="d-md-flex d-d-block justify-content-between align-items-center">
              <p className="text-white-50 fw-bold mb-5 mb-md-0">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
              <Link
                to="/blog"
                className="text-decoration-none p-3 rounded-4 fw-bold bg-1 text-white hover-2 d-md-block mt-4"
              >
                عرض الكل <i className="fa-solid fa-angle-left"></i>
              </Link>
            </div>
          </div>

          {posts.map((e) => (e.featured &&
            <div className="d-flex flex-wrap w-100 w-50 mt-5 rounded-5 overflow-hidden position-relative hover-4">
              <div className="col-12 col-md-6 overflow-hidden">
                <img src={e.image} alt="" className="object-cover" />
                <span className="p-1 text-white rounded-4 fw-bold ps-3 pe-3 bg-1 position-absolute top-0 end-0 m-4">
                  <i className="fa-solid fa-star"></i>مميز
                </span>
              </div>

              <div className="p-4 bg-7 col-12 col-md-6">
                <div>
                  <span className="color-1 p-1 ps-3 pe-3 fw-bold bg-4 rounded-4 border-1">
                    {e.tags[0]}
                  </span>
                  <span className=" text-white-50  pe-3">
                    <i className="fa-regular fa-clock"></i>
                    {e.readTime}
                  </span>
                </div>

                <div className="">
                  <h2 className="text-white pt-4 fw-bold fs-3">{e.title}</h2>
                  <p className="text-white-50 pt-3">{e.excerpt}</p>
                </div>

                <div className="pt-0 pt-md-5">
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="  d-flex">
                      <div className="w-50px rounded-circle overflow-hidden">
                        <img src={e.author.avatar} alt="" />
                      </div>
                      <div className="pe-3">
                        <p className="m-0 text-white fw-bold">{e.author.name}</p>
                        <p className="m-0 text-white-50">{e.date}</p>
                      </div>
                    </div>
                    <span className="fw-bold color-1">
                      اقرأ المقال<i className="fa-solid fa-arrow-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
