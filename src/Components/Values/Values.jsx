import React from "react";
import { Link } from "react-router-dom";

export default function Values() {
  return (
    <>
      <section className="bg-7 pt-5">
        <div className="container-fluid container-50px pt-5 pb-5">
          <div className="d-flex flex-column justify-content-center align-items-center  m-auto">
            <h2 className="ps-2 pe-2 fw-bold  text-white  border-end border-start border-5 border-warning">
              قيمنا
            </h2>
            <p className="fs-3 pt-2 text-white-50  text-center">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-2 rounded-4 pt-4 m-2 bg-8 text-center">
                <i className="fa-solid fa-bullseye color-2 fs-40px"></i>
                <h3 className="text-white fw-bold pt-2 ">الجودة أولاً</h3>
                <p className="text-white-50">محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-2 rounded-4 pt-4 m-2 bg-8 text-center">
                <i className="fa-solid fa-bolt color-2 fs-40px"></i>
                <h3 className="text-white fw-bold pt-2">تركيز عملي</h3>
                <p className="text-white-50">أمثلة واقعية يمكنك تطبيقها اليوم</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-2 rounded-4 m-2 bg-8 pt-4 text-center">
                <i className="fa-solid fa-handshake color-2 fs-40px"></i>
                <h3 className="text-white fw-bold pt-2">المجتمع</h3>
                <p className="text-white-50">تعلم مع آلاف المصورين</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-2 rounded-4 m-2 pt-4 bg-8 text-center">
                <i className="fa-solid fa-arrows-rotate color-2 fs-40px"></i>
                <h3 className="text-white fw-bold pt-2">دائماً محدث</h3>
                <p className="text-white-50">أحدث الاتجاهات وأفضل الممارسات</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
