import Frame from "../../components/Frame";
import BookItem from "./BookItem";
import Picture from "./Picture";

function BookInfoItem({ room, setSelected, selected }) {
  return (
    <Frame className="flex flex-col gap-2">
      <div
        onClick={() => {
          if (room.id === selected) {
            return setSelected(null);
          }
          setSelected(room.id);
        }}
        className="cursor-pointer flex gap-2"
      >
        <Picture src={room.images[0].image} />
        <div className="flex-1 flex flex-col gap-2">
          <div>{room.name}</div>
          <div>มี {room.books.length} การจอง</div>
        </div>
      </div>
      {selected === room.id &&
        room.books.map((book) => <BookItem key={book.id} book={book} />)}
    </Frame>
  );
}

export default BookInfoItem;
