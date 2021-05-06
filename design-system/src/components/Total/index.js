
import React from "react";
import styled from "styled-components";

/* Total
 *
 * Total shows total price for the cart
 */
const Total = (props) => {
  return (
    <StyledTotal {...props}>
      <h2>Total</h2>
      <h2>€95.00</h2>
    </StyledTotal>
  )
};

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export default Total;
