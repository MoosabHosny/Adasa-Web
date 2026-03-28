export default function CategoryButton({ fff, setFrom, Setto ,activeCategory}) {
  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const handleClick = (cat) => {
    fff(cat);    
    setFrom(0);  
    Setto(6);    
  };

  return (
    <>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`p-2 rounded-3 mt-3  text-white ps-3 pe-3 me-2 border border-secondary ${activeCategory==cat ? "bg-1" : "bg-8"}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </>
  );
}