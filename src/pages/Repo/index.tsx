import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stars,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />

        <Link className={"username"} to={"login"}>
          Owner
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={`/username/reponame`}>
          Reponame
        </Link>
      </BreadCrumb>

      <p>Description</p>

      <Stars>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stars>

      <LinkButton href={`https://github.com/`}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
