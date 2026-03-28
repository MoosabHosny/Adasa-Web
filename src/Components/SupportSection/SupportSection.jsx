import React from "react";
import { Link } from "react-router";

export default function SupportSection() {
  return (
    <>
      <section className="bg-1 pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="text-center w-75 mx-auto">
            <h2 className="text-white fw-bold fs-1">لديك أسئلة؟ دعنا نتحدث!</h2>
            <p className="text-white pt-2 fs-5 ">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
          </div>

          <div className="text-center pt-5 d-flex flex-column d-md-block">
            <Link to="" className="text-decoration-none text-white fw-bold p-3 ps-4 pe-4 rounded-4 bg-black me-3 ms-3"><i className="fa-regular fa-envelope"></i>تواصل معنا</Link>
            <Link to="/Blog" className="text-decoration-none text-white fw-bold p-3 ps-4 pe-4 rounded-4 bg-transparent border me-3 ms-3 mt-3 mt-md-0">تصفح المقالات</Link>
          </div>
        </div>
      </section>
    </>
  );
}
