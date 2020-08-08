import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

import { ThemeName } from "../../styles/themes";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate("/" + search.toLowerCase().trim());
  }

  function handleToggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={handleToggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
