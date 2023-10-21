import { useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import SearchForm from "../feature/search/SearchForm";
import TypeSearch from "../feature/search/TypeSearch";
import useAuth from "../hooks/use-auth";
import useSearch from "../hooks/use-search";
import {
  HOTEL,
  VILLA,
  CONDO_APARTMENT,
  VACATION_HOME,
} from "../config/constants";
import hotelPic from "/marten-bjork-n_IKQDCyrG0-unsplash.jpg";
import villaPic from "/webaliser-_TPTXZd9mOo-unsplash.jpg";
import condoApartmentPic from "/agustin-lara-iKVqC5rvv9s-unsplash.jpg";
import vacationHomePic from "/cara-fuller-BeHRkALwXIw-unsplash.jpg";

function HomePage() {
  const { user } = useAuth();
  const { setForm, form, setAddress } = useSearch();

  useEffect(() => {
    setForm({
      start: dayjs(),
      end: dayjs(new Date().getTime() + 172800000),
      room: 1,
      people: 2,
      type: null,
      minPrice: 0,
      maxPrice: 30000,
      search: null,
    });
    setAddress(null);
  }, []);

  return (
    <div className="h-full flex flex-col gap-20 items-center py-4">
      <div className="flex flex-col gap-10">
        <div className="text-4xl self-center text-center">
          {user ? (
            <>
              <div>ADOGA ให้มากกว่าที่พัก</div>
              <div>
                ทริปไหนไม่อยากพักโรงแรม จองบ้านพักส่วนตัว อพาร์ตเมนต์ คอนโด
              </div>
              <div>เปลี่ยนบรรยากาศได้เลย</div>
            </>
          ) : (
            <div>หาห้องพักได้ง่าย</div>
          )}
        </div>
        <SearchForm />
      </div>
      <div className="flex flex-col items-center py-20 gap-14">
        <div className="text-4xl">ดูห้องพักในรูปแบบต่างๆ</div>
        <div className="flex gap-10 justify-between container">
          <Link
            onClick={() => setForm({ ...form, type: HOTEL })}
            to="search-place?type=HOTEL"
          >
            <TypeSearch src={hotelPic} alt="Hotel" type="โรงแรม" />
          </Link>
          <Link
            onClick={() => setForm({ ...form, type: VILLA })}
            to="search-place?type=VILLA"
          >
            <TypeSearch src={villaPic} alt="Villa" type="วิลลา" />
          </Link>
          <Link
            onClick={() => setForm({ ...form, type: VACATION_HOME })}
            to="search-place?type=VACATION_HOME"
          >
            <TypeSearch
              src={vacationHomePic}
              alt="Vacation Home"
              type="บ้านพักตากอากาศ"
            />
          </Link>
          <Link
            onClick={() => setForm({ ...form, type: CONDO_APARTMENT })}
            to="search-place?type=CONDO_APARTMENT"
          >
            <TypeSearch
              src={condoApartmentPic}
              alt="Condo/Apartment"
              type="คอนโด/อพาร์ตเมนต์"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
