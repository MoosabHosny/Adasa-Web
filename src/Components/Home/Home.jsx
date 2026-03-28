import { useState } from "react";

import FeaturedArticles from "../FeaturedArticles/FeaturedArticles";
import Explore from "../Explore/Explore";
import LatestArticles from "../LatestArticles/LatestArticles";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import { Data } from "../dataJson/Data";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="bg-3  pt-5 pb-5 bg-grid-1 ">
        <div className="container-fluid container-50px">
          <div className="home d-flex flex-column justify-content-center align-items-center w-75 m-auto">
            <div className="p-2 rounded-5 bg-4 text-white border-1">
              مرحباً بك في عدسة
            </div>
            <h1 className="fw-bold text-white fss-1 text-center pt-2">
              {" "}
              اكتشف<span className="color-1"> فن </span>
              <br /> التصوير الفوتوغرافي{" "}
            </h1>
            <p className="fs-3 text-white-50  text-center">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
          </div>

          <div className="text-center d-flex flex-wrap justify-content-center pt-5 pb-5">
            <Link
              to={"/Blog"}
              className=" linkBtn border-0 p-3 rounded-5 text-white ps-4 pe-4 bg-1 text-decoration-none hover-2 me-4 ms-4"
            >
              استكشف المقالات<i className="fa-solid fa-arrow-left"></i>
            </Link>
            <Link
              to={"/Metrics"}
              className="linkBtn border p-3 rounded-5 hover-1  text-white ps-5 pe-5 bg-transparent text-decoration-none me-4 ms-4"
            >
              <i className="fa-solid fa-circle-info"></i> اعرف المزيد
            </Link>
          </div>

          <div className="row col-md-10 m-auto justify-content-center pt-4 color-1">
            
            <div className="col-6 col-md-3 p-2">
              <div className="hover-3 bg-5 p-3 rounded-5 d-flex justify-content-center align-items-center flex-column fs-3 h-100">
                <i className="fa-regular fa-newspaper"></i>
                <p className="m-0">+ 50</p>
                <p className="text-white-50 m-0">مقالة</p>
              </div>
            </div>

            <div className="col-6 col-md-3 p-2">
              <div className="hover-3 bg-5 p-3 rounded-5 d-flex justify-content-center align-items-center flex-column fs-3 h-100">
                <i className="fa-solid fa-users"></i>
                <p className="m-0">+10 ألف</p>
                <p className="text-white-50 m-0">قارئ</p>
              </div>
            </div>

            <div className="col-6 col-md-3 p-2">
              <div className="hover-3 bg-5 p-3 rounded-5 d-flex justify-content-center align-items-center flex-column fs-3 h-100">
                <i className="fas fa-folder"></i>
                <p className="m-0">4</p>
                <p className="text-white-50 m-0">تصنيفات</p>
              </div>
            </div>

            <div className="col-6 col-md-3 p-2">
              <div className="hover-3 bg-5 p-3 rounded-5 d-flex justify-content-center align-items-center flex-column fs-3 h-100">
                <i className="fas fa-pen-nib"></i>
                <p className="m-0">6</p>
                <p className="text-white-50 m-0">كتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedArticles posts={Data.posts} />

      <Explore pro={Data.categories} />

      <section className="bg-10">
        <div className="container-fluid container-50px pt-5 pb-5">
          <div className="pt-5">
            <div>
              <div>
                <span className="p-2 bg-4 rounded-5 border-1 color-1 fw-bold ps-4 pe-4 me-3">
                  الأحدث
                </span>
                <h2 className="text-white fw-bold fss-1 pt-3 ">
                  أحدث المقالات
                </h2>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-white-50 fw-bold">
                  محتوى جديد طازج من المطبعة
                </p>
                <a
                  href=""
                  className="text-decoration-none p-3 rounded-4 fs-4 fw-bold  color-1"
                >
                  عرض جميع المقالات
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </div>
            </div>
            <div className="d-flex flex-wrap  mt-4">
              {Data.posts
                .filter((e) => e.id > 3 && e.id < 7)
                .map((e) => (
                  <LatestArticles data={e} key={e.id} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
}
