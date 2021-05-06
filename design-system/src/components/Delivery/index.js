
import React from "react";
import styled from "styled-components";
import { Select } from "../..";
import { spacing } from "../../tokens";

/* Delivery
 *
 * Delivery shows a select, in which user can choose delivery company and see the delivery's price
 */
const Delivery = (props) => {
  return (
    <StyledDelivery {...props}>
      <StyledDeliveryHeader>
        <h2>Delivery</h2>
      </StyledDeliveryHeader>
      <p>{props.customerName}</p>
      <StyledDeliveryRow>
        <Select
          options={props.deliveryOptions}
        />
        <p>{props.price}</p>
      </StyledDeliveryRow>
    </StyledDelivery>
  );
};

export const StyledDelivery = styled.div`
  max-width: 100%;
`;

const StyledDeliveryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.spacingLgBottom};
  align-items: baseline;
`;

const StyledDeliveryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing.spacing3XlTop};
  margin-bottom: ${spacing.spacing3XlBottom};
`;

export default Delivery;
