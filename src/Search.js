import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (query.length > 0) {
      alert(query);
    } else {
      alert("Enter a query");
    }
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }
  return (
    <dir className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a query"
          onChange={updateQuery}
        />
        <input type="submit" value="Search" />
      </form>
    </dir>
  );
}
