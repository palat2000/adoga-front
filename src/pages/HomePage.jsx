import { Link } from "react-router-dom";
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

function HomePage() {
  const { user } = useAuth();
  const { setForm, form } = useSearch();
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
            to="search-place"
          >
            <TypeSearch />
          </Link>
          <Link
            onClick={() => setForm({ ...form, type: VILLA })}
            to="search-place"
          >
            <TypeSearch />
          </Link>
          <Link
            onClick={() => setForm({ ...form, type: VACATION_HOME })}
            to="search-place"
          >
            <TypeSearch />
          </Link>
          <Link
            onClick={() => setForm({ ...form, type: CONDO_APARTMENT })}
            to="search-place"
          >
            <TypeSearch />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
