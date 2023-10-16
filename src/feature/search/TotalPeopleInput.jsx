import useDropdown from "../../hooks/use-dropdown";

function TotalPeopleInput({ form, decrease, increase }) {
  const { dropdownRef, isOpen, setIsOpen } = useDropdown();
  return (
    <div ref={dropdownRef} className="relative col-span-3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-8 py-4 rounded-xl text-lg flex gap-4 items-center cursor-pointer"
      >
        <div>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="flex-1">
          <div>{form.people} คน</div>
          <div className="text-fontGray">{form.room} ห้อง</div>
        </div>
        <div>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#0F0F0F"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full top-100 z-30 bg-white border shadow rounded-sm">
          <div className="flex justify-between px-8 py-4">
            <div>จำนวนห้อง</div>
            <div className="flex gap-3 items-center">
              <button
                disabled={form.room <= 1 && true}
                onClick={() => decrease("room")}
                type="button"
                className="text-primary border border-primary flex justify-center items-center bg-white rounded-full w-8 h-8 text-xl disabled:text-fontGray disabled:border-fontGray"
              >
                -
              </button>
              <div className="text-xl">{form.room}</div>
              <button
                onClick={() => increase("room")}
                type="button"
                className="text-primary border border-primary flex justify-center items-center bg-white rounded-full w-8 h-8 text-xl"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between px-8 py-4">
            <div>จำนวนคน</div>
            <div className="flex gap-3 items-center">
              <button
                disabled={form.people <= 1 && true}
                onClick={() => decrease("people")}
                type="button"
                className="text-primary border border-primary flex justify-center items-center bg-white rounded-full w-8 h-8 text-xl disabled:text-fontGray disabled:border-fontGray"
              >
                -
              </button>
              <div className="text-xl">{form.people}</div>
              <button
                onClick={() => increase("people")}
                type="button"
                className="text-primary border border-primary flex justify-center items-center bg-white rounded-full w-8 h-8 text-xl"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TotalPeopleInput;
