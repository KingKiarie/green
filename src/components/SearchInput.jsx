import { FaSearch } from "react-icons/fa";
import "../styles/styles.scss";

export default function SearchInput() {
  return (
    <>
      <div className="inp">
        <input placeholder="Search Service" />
        <FaSearch color="green.600" />
      </div>
    </>
  );
}
