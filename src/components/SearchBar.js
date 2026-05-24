import React, { useMemo, useState } from "react";

const SearchBar = ({ products, setFiltered }) => {
  const [query, setQuery] = useState("");

  useMemo(() => {
    const result = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(result);
  }, [query, products, setFiltered]);

  return (
    <input
      type="text"
      placeholder="Поиск товаров..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;