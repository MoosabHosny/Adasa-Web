import { useState } from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import { Data } from "../dataJson/Data";
import LatestArticles from "../LatestArticles/LatestArticles";

export default function Blog() {
  const [products, setProducts] = useState(Data.posts);
  const [from, setfrom] = useState(0);
  const [to, setto] = useState(6);
  const [countStyle, setcountStyle] = useState(1);
  
 
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");

  function handleFilter(categoryName) {
    setActiveCategory(categoryName); 
    setcountStyle(1); 

    if (categoryName === "جميع المقالات") {
      setProducts(Data.posts);
    } else {
      const filtered = Data.posts.filter((post) => post.category === categoryName);
      setProducts(filtered);
    }
  }

  function counts(index) {
    const newTo = (index + 1) * 6;
    const newFrom = newTo - 6;
    setcountStyle(index + 1);
    setto(newTo);
    setfrom(newFrom);
  }


  const pageCount = Math.ceil(products.length / 6);
  const pageArray = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <>
      <section className="bg-11 pt-5 pb-5 bg-grid-1">
        <div className="container-fluid container-50px">
          <div className="d-flex flex-column justify-content-center align-items-center  m-auto">
            <div className="p-2 rounded-5 bg-4 text-white border-1 ps-4 pe-4">مدونتنا</div>
            <h1 className="fw-bold text-white fss-1 text-center pt-2">
              استكشف <span className="color-1">مقالاتنا</span>
            </h1>
            <p className="fs-3 text-white-50 text-center">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </section>

      <section className="bg-3 pt-3 pb-3">
        <div className="container-fluid container-50px">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <span className="bg-8 col-12 col-md-6 rounded-4 p-1 pe-3 ps-3">
              <input type="text" className="p-3 bg-transparent border-0 text-white" placeholder="ابحث..." />
            </span>
            <div className="col-12 col-md-6 mt-4 text-center mt-md-0 ">
              <CategoryButton 
                fff={handleFilter} 
                setFrom={setfrom} 
                Setto={setto} 
                activeCategory={activeCategory} 
              />
            </div>
          </div>

          <div className="line mt-3"></div>
          
          <div className="d-flex pt-3 flex-wrap">
            {products.slice(from, to).map((item) => (
              <LatestArticles data={item} key={item.id} />
            ))}
          </div>

          {products.length > 6 && (
            <div className="text-center pt-5 pb-5">
              {pageArray.map((e) => (
                <button
                  className={`p-2 ps-3 me-2 text-white pe-3 rounded-3 border-0 ${e === countStyle ? "bg-1" : "bg-2"}`}
                  onClick={() => counts(e - 1)}
                  key={e}
                >
                  {e}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}