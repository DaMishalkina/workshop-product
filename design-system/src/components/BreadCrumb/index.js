
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import { typography } from "../../tokens";
import {Link} from "react-router-dom";

/* BreadCrumb
 *
 * Button to main page
 */
const BreadCrumb = ({href, name}) => {
  return <StyledBreadCrumb>
      <Button isOutline href={href}>
        <Icon name="arrowBack" />
      </Button>
      <StyledDiv3>
        <StyledH4>{name}</StyledH4>
      </StyledDiv3>
  </StyledBreadCrumb>;
};

export const StyledBreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

const StyledH4 = styled.div`
  font-size: ${typography.headline4FontSize};
  font-weight: ${typography.headline4FontWeight};
`;

export default BreadCrumb;
