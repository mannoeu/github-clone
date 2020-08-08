import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.2s opacity cubic-bezier(0.985, 0.45, 0.2, 0.185);

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    color: var(--search-placeholder);
    caret-color: var(--search-placeholder);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    transition: width 0.2s cubic-bezier(0.86, 0, 0.07, 1),
      color 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:focus {
      width: 318px;
    }
  }
`;
