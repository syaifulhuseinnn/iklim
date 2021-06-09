import React from "react";
import SearchCity from "./SearchLogic";

export default function Search() {
  const { keyword, handleKeyword, isSearch, suggestions, clickCity } =
    SearchCity();

  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          placeholder="Search city"
          autoComplete="off"
          value={keyword}
          onChange={handleKeyword}
        />
        <div
          className="search__input__suggestion"
          style={isSearch ? { display: "block" } : { display: "none" }}
        >
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} onClick={() => clickCity(suggestion.id)}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
