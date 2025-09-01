import Home from "@/components/modules/Home";
import db from "../../data/db.json";
function index() {

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select>
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="جستجو کنید"
          />
        </div>
      </div>

      <div className="homes">
        {db.homes.map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>

      <ul className="pagination__list">
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, index) => (
            <li
              key={index + 1}
              className="pagination__item"
              onClick={(event) => paginateHandler(event, index + 1)}
            >
              <a href="#" className="">
                {index + 1}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default index;
