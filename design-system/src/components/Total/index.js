
import React from "react";
import styled from "styled-components";

import { spacing } from "../../tokens";

/* Total
 *
 * Total shows total price for the cart
 */
const Total = (props) => {
  return (
    <StyledTotal {...props}>
      <h2>Total</h2>
      <h2>{props.total}</h2>
    </StyledTotal>
  )
};

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing.spacing3XlTop};
  margin-bottom: ${spacing.spacing3XlBottom};
`;

export default Total;
