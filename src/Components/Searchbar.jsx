import React, { useState } from "react";
import Lupa from "../images/lupa.png";

const SearchBar = ({ setSearchTerm, setWorkForm, setJobCategory }) => {
  return (
    <div>
      <div className="searchbar-desc">
        <p>Wyszukaj po słowach</p>
        <p>Forma Pracy</p>
        <p>Stanowisko</p>
      </div>
      <div className="searchInput_Container">
        <img src={Lupa} alt="Lupa" className="search-icon"></img>
        <input
          id="searchInput"
          type="text"
          placeholder="Szukaj np..developer,tester"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <select
          className="select"
          onChange={(event) => setWorkForm(event.target.value)}
        >
          <option value="all">Dowolnie</option>
          <option value="zdalna">Zdalna</option>
          <option value="hybrydowa">Hybrydowa</option>
          <option value="stacjonarna">Stacjonarna</option>
        </select>
        <select
          className="select"
          onChange={(event) => setJobCategory(event.target.value)}
        >
          <option value="all">Dowolnie</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
          <option value="ux/ui">UX/UI</option>
          <option value="helpdesk">Helpdesk</option>
          <option value="tester">Tester</option>
          <option value="hr">HR</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
