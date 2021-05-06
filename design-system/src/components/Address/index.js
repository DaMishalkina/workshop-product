
import React from "react";
import styled from "styled-components";
import { colors, spacing } from "../..";

/* Address
 *
 * Address shows customer's address and change button
 */
const Address = (props) => {
  return (
    <StyledAddressWrapper {...props}>
      <StyledAddressHeader>
        <h2>Address</h2>
        <StyledLink>Change</StyledLink>
      </StyledAddressHeader>
      <p>
        {props.street}
        <br />
        {props.postcode}
        <br />
        {props.country}
      </p>
    </StyledAddressWrapper>
  );
};

const StyledAddressWrapper = styled.div`
  max-width: 100%;
`;

const StyledAddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.spacingLgBottom};
  align-items: baseline;
`;

const StyledLink = styled.a`
  color: ${colors.primary500};
  font-size: 18px;
`;

export default Address;
