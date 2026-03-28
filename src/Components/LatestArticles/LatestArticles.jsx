export default function LatestArticles({ data, count }) {
  const { image, category, readTime, date, title, excerpt, author } = data;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="p-3">
          <div className="rounded-4 overflow-hidden bg-15 hover-4">
            <div className="position-relative overflow-hidden">
              <img src={image} className="" alt="" />
              <span className="p-1 ps-2 pe-2 position-absolute top-0 end-0 bg-black text-white fw-bold rounded-4 m-2">
                {category}
              </span>
            </div>
            <div className="p-4">
              <div className="">
                <span className="text-white-50">{readTime}</span>
                <span className="text-white-50 me-2">*</span>
                <span className="text-white-50 me-2">{date}</span>
              </div>
              <h2 className="text-white fs-4 fw-bold pt-3">{title}</h2>
              <p className="text-white-50">{excerpt}</p>

              <div className="">
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="  d-flex">
                    <div className="w-50px rounded-circle overflow-hidden">
                      <img src={author.avatar} alt="" />
                    </div>
                    <div className="pe-3">
                      <p className="m-0 text-white fw-bold">{author.name}</p>
                      <p className="m-0 text-white-50">{author.role}</p>
                    </div>
                  </div>
                  <span className="fw-bold color-1">
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
