
import React from "react";
import styled from "styled-components";
import { spacing, typography } from "../../tokens";

/* CartItem
 *
 * CartItem shows item's image, price and description in the cart
 */
const CartItem = ({ image, name, price, description, ...props }) => {
  return (
    <StyledCartItem {...props}>
      <StyledImg src={image} alt="" />
      <StyledDescriptionWrapper>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
        <StyledDescription>{description}</StyledDescription>
      </StyledDescriptionWrapper>
    </StyledCartItem>
  )
};

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  max-width: 100%;
  width: 96px;
  height: 100px;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  margin-left: ${spacing.spacingLgLeft};
  align-content: flex-start;
`;

const StyledName = styled.h6`
  max-width: 58%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: auto;
`;

const StyledPrice = styled.h6`
  font-weight: ${typography.paragraph1BoldFontWeight};
`;

const StyledDescription = styled.p`
  opacity: 0.6;
`;

export default CartItem;
