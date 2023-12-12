import React, { useState } from "react";

const SearchBar = ({ setSearchTerm, setWorkForm, setJobCategory }) => {
  return (
    <div className="searchInput_Container">
      <input
        id="searchInput"
        type="text"
        placeholder="Dodaj np..Junior,Senior"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <select
        className="select"
        onChange={(event) => setWorkForm(event.target.value)}
      >
        <option value="all">Forma pracy</option>
        <option value="zdalna">Zdalna</option>
        <option value="hybrydowa">Hybrydowa</option>
        <option value="stacjonarna">Stacjonarna</option>
      </select>
      <select
        className="select"
        onChange={(event) => setJobCategory(event.target.value)}
      >
        <option value="all">Stanowisko</option>
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
        <option value="ux/ui">UX/UI</option>
        <option value="helpdesk">Helpdesk</option>
        <option value="hr">HR</option>
      </select>
    </div>
  );
};

export default SearchBar;
