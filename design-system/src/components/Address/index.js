
import React from "react";
import styled from "styled-components";
import { colors } from "../..";

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
        Norra Larsmovägen 70, KUOPIO
        <br />
        70260
        <br />
        Finland
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
  margin-bottom: 16px;
  align-items: baseline;
`;

const StyledLink = styled.a`
  color: ${colors.primaryOrange100};
  font-size: 18px;
`;

export default Address;