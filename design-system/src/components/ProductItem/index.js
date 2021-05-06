import { objectOf, string, bool, shape } from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography, borderRadius, spacing } from "../../tokens";
import Button from "../Button";
import Icon from "../Icon";
import {spacingBaseBottom} from "../../tokens/dist/spacing";

/* ProductItem
 *
 * Card with an item's image, name and price.
 */
const ProductItem = ({item, ...props}) => {
  return <StyledProductContainer>
      <StyledContainerWithImage {...props}>
          <StyledButtonWrapper {...props}>
              <Button isOutline>
                  <Icon name="heart" />
              </Button>
          </StyledButtonWrapper>
        <StyledImg src={item.image} alt={item.name} />
      </StyledContainerWithImage>
      <StyledP {...props}>{item.category}</StyledP>
      <Styledh1 {...props}>{item.name}</Styledh1>
      <Styledh2 {...props}>{item.price}</Styledh2>
  </StyledProductContainer>;
};

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledContainerWithImage = styled.div`
  border-radius: ${(p) => p.isLarge ? borderRadius.radii32Radius : "24px"};
  margin-bottom: ${(p) => p.isLarge ? spacing.spacing2XlBottom : spacing.spacingLgBottom};
  position: relative;
`;
const StyledButtonWrapper = styled.div`
  display: ${(p) => p.isLarge ? "block" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: ${spacing.spacing2XlTop};
`;
const StyledImg = styled.img`
  max-width: 100%;
  display: block;
`;
const StyledP = styled.p`
  display: ${(p) => p.isLarge ? "block" : "none"};
  margin-bottom: ${spacing.spacingBaseBottom};
  opacity: 0.6;
`;
const Styledh1 = styled.h1`
  font-size: ${(p) => p.isLarge ? typography.headline1FontSize : typography.headline4FontSize};
  line-height: ${(p) => p.isLarge ? typography.headline1LineHeight : typography.headline4LineHeight};
  margin-bottom: ${(p) => p.isLarge ? spacing.spacingLgBottom : spacingBaseBottom};
  font-family: ${typography.paragraph3FontFamily};
`;
const Styledh2 = styled.h2`
  font-size: ${(p) => p.isLarge ? typography.headline2FontSize : typography.headline6FontSize};
  line-height: ${(p) => p.isLarge ? typography.headline2LineHeight : typography.headline6LineHeight};
  color: ${colors.primary500};
  font-family: ${typography.paragraph3FontFamily};
`;



ProductItem.propTypes = {
    item: objectOf(
        shape({
            name: string.isRequired,
            price: string.isRequired,
            category: string.isRequired,
            description: string.isRequired,
            image: string.isRequired,
        })
    ).isRequired,
    isLarge: bool,
};


export default ProductItem;
