
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { colors, typography, spacing } from "../../tokens";

/* BottomSwipe
 *
 * Bottom swipe
 */
const BottomSwipe = ({label}) => {
  return <StyledBottomSwipe>
    <StyledDiv>
      <StyledDiv1></StyledDiv1>
      <StyledP>{label}</StyledP>
    </StyledDiv>
  </StyledBottomSwipe>;
};

export const StyledBottomSwipe = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledDiv = styled.div`
  padding: ${spacing.spacingXlTop};
  background: ${colors.primary100};
  width: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv1 = styled.div`
  height: 6px;
  background: ${colors.primary300};
  border-radius: 120px;
  border: 1px solid ${colors.primary500};
  margin-bottom: ${spacing.spacingXlBottom};
  width: 82px;
`;

const StyledP = styled.p`
  color: ${colors.onBackground500};
  font-weight: ${typography.headline4FontWeight};
  font-size: ${typography.headline4FontSize};
  
  
`;
export default BottomSwipe;
