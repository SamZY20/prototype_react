//Imports
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchKeyword = () => {
  const { setKeyword } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchUnit = () => {
    setKeyword(searchValue.current.value);
  };
  return (
    <>
      <br />
      <div className="col-8 mx-auto mb-md-4 mb-3 bg-white p-3 rounded-pill search-container">
        <div className="mx-auto hstack">
          <input
            type="text"
            className="form-control bg-light"
            placeholder="(S)earch Keyword"
            id="keyword"
            ref={searchValue}
            onChange={searchUnit}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default SearchKeyword;
