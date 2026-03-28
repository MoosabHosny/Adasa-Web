
export default function Subscribe() {
  return (
    <>
    <section className="bg-11 pt-5  pb-5">
        <div className=" pt-5 pb-5">
            <div className="subscribe   bg-8 rounded-4 p-5 m-auto text-center ">
                <span className="p-3 fs-3 bg-1 rounded-4"><i className="fa-regular fa-envelope"></i></span>
                <h2 className="text-white pt-5 fs-1 fw-bold">اشترك في <span className="color-1">نشرتنا الإخبارية</span></h2>
                <p className="text-white-50 fs-6 pt-2 fw-bold">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
                <form action="" className="mt-5">
                    <input type="text" className="p-3  w-50 rounded-4 bg-3 border-0" placeholder="أدخل بريدك الإلكتروني"/>
                    <button className="bg-1 border-0 p-3 rounded-4 me-4 ">اشترك الآن</button>
                </form>
                <div className=" pt-5 d-flex flex-wrap align-items-center justify-content-around pe-5 ps-5">
                    <div>
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" className="w-50px rounded-circle" alt="" />
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" className="w-50px rounded-circle" alt="" />
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" className="w-50px rounded-circle" alt="" />
                    </div>
                    <span className="text-white-50 ">انضم لـ  <span className="text-white">+10,000 </span>  مصور</span>
                    <span className="text-white-50">بدون إزعاج</span>
                    <span className="text-white-50">إلغاء الاشتراك في أي وقت</span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
