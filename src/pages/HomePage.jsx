import { Link } from "react-router-dom";
import SearchForm from "../feature/search/SearchForm";
import TypeSearch from "../feature/search/TypeSearch";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { user } = useAuth();
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
          <Link to="search-place?type=hotel">
            <TypeSearch />
          </Link>
          <Link to="search-place?type=VILLA">
            <TypeSearch />
          </Link>
          <Link to="search-place?type=vacation_home">
            <TypeSearch />
          </Link>
          <Link to="search-place?type=conDo_ApartMent">
            <TypeSearch />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
