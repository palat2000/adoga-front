import { MONTH } from "../../config/constants";

function BookItem({ book }) {
  const start = new Date(book.fromDate);
  const end = new Date(book.toDate);
  return (
    <div className="border border-gray-300 shadow-md px-4 py-2 flex flex-col gap-4 rounded-sm">
      <div className="flex gap-10">
        <div>{`${book.user?.firstName || book.customer?.firstName} ${
          book.user?.lastName || book.customer?.lastName
        }`}</div>
        <div>อีเมล {book.user?.email || book.customer?.email}</div>
      </div>
      <div className="flex gap-8">
        <div>{`จองวันที่ ${start.getDate()} ${
          MONTH[start.getMonth()]
        } ${start.getFullYear()}`}</div>
        <div>{`ถึงวันที่ ${end.getDate()} ${
          MONTH[end.getMonth()]
        } ${end.getFullYear()}`}</div>
        <div>จำนวน {book.amountRoom} ห้อง</div>
      </div>
    </div>
  );
}

export default BookItem;
