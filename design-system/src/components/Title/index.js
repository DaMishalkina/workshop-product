
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import { colors, typography, spacing } from "../../tokens";

/* Title
 *
 * Title with icons
 */
const Title = ({label}) => {
  return <StyledTitle>
    <h4>{label}</h4>
    <StyledDiv4>
      <Button isTransparent>
        <Icon name="viewItem" width={24} height={16} color={colors.onBackground500} />
      </Button>
      <Button isTransparent>
        <Icon name="viewGrid" width={24} height={16} color={colors.onBackground500} />
      </Button>
      <StyledBorder />
      <Button isTransparent>
        <Icon name="filter" width={24} height={16} color={colors.onBackground500} />
      </Button>
    </StyledDiv4>
  </StyledTitle>;
};

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.spacing2XlBottom};
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;
const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.onBackground500};
  margin: 0 8px;
  opacity: 0.1;
`;

export default Title;
