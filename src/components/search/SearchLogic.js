import { useState, useEffect, useContext } from "react";
import { cityList } from "../../data/cityList";
import { HomeContext } from "../../pages/home/Home";
import { useDebounce } from "use-debounce";

export default function SearchCity() {
  const { cityId, setCityId } = useContext(HomeContext);

  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [value] = useDebounce(keyword, 1000);

  const getCityList = (value) => {
    const filteredCity = cityList.filter(({ name }) =>
      name.toLowerCase().includes(value)
    );

    if (filteredCity) {
      setSuggestions(filteredCity);
    }
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const clickCity = (city_id) => {
    setCityId(city_id);
    setIsSearch(false);

    if (city_id !== cityId) {
      setKeyword("");
    }
  };

  useEffect(() => {
    if (value !== "") {
      getCityList(value.toLowerCase());
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [value]);

  return {
    keyword,
    setKeyword,
    handleKeyword,
    isSearch,
    suggestions,
    clickCity,
  };
}
