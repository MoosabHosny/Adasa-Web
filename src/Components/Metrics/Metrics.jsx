
import Values from "../Values/Values";
import TeamSection from "../TeamSection/TeamSection";
import { Data } from "../dataJson/Data";
import SupportSection from "../SupportSection/SupportSection";

export default function Metrics() {
  return (
    <>
      <section className="bg-3  pt-5 pb-5 bg-grid ">
        <div className="container-fluid container-50px">
          <div className="d-flex flex-column justify-content-center align-items-center  m-auto">
            <div className="p-2 rounded-5 bg-4 text-white border-1 ps-4 pe-4">
              من نحن
            </div>
            <h1 className="fw-bold text-white fss-1 text-center pt-2">
              مهمتنا هي<span className="color-1"> الإعلام والإلهام </span>
            </h1>
            <p className="fs-4 text-white-50 pt-2 text-center">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
          </div>

          

          <div className="d-flex flex-wrap color-1 justify-content-center pt-4">
            <div className="col-6 col-md-3 bg-5 m-2 p-4 rounded-5 w-150px d-flex justify-content-center align-items-center flex-column ">
             <i className="fa-solid fa-users fs-3 fw-bold"></i>
              <p className="m-0 fs-3 fw-bold">+2مليون</p>
              <p className="text-white-50 m-0 pt-2">قارئ شهرياً</p>
            </div>

            <div className="col-6 col-md-3 bg-5 m-2 p-4 rounded-5 w-150px d-flex justify-content-center align-items-center flex-column ">
              <i className="fa-solid fa-newspaper fs-3 fw-bold"></i>
              <p className="m-0 fs-3 fw-bold">+500</p>
              <p className="text-white-50 m-0 pt-2">مقالة منشورة</p>
            </div>

            <div className="col-6 col-md-3 bg-5 m-2 p-4 rounded-5 w-150px d-flex justify-content-center align-items-center flex-column ">
              <i className="fas fa-pen-nib fs-3 fw-bold"></i>
              <p className="m-0 fs-3 fw-bold">+50</p>
              <p className="text-white-50 m-0 pt-2">كاتب خبير</p>
            </div>

            <div className="col-6 col-md-3 bg-5 m-2 p-4 rounded-5 w-150px d-flex justify-content-center align-items-center flex-column ">
              <i className="fa-solid fa-book-open fs-3 fw-bold"></i>
              <p className="m-0 fs-3 fw-bold">+15</p>
              <p className="text-white-50 m-0 pt-2">تصنيف</p>
            </div>
          </div>
        </div>
      </section>

      <Values/>
      <TeamSection posts={Data.posts}/>
      <SupportSection/>
    </>
  );
}
