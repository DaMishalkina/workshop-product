import { arrayOf, string, shape } from "prop-types";
import React from "react";
import styled from "styled-components";
import Icon, { icons } from "../Icon";
import { colors, typography, spacing } from "../../tokens";
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
  ListboxArrow,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

/* Select
 *
 * A dropdown list of values.
 */
const Select = ({ defaultValue, options, ...props }) => {
  if (!options) {
    return null;
  }
  const renderOptions = (options) => {
    return (
      <>
        {options.map((option, index) => {
          return (
            <ListboxOption key={`option-${index}`} value={option.value}>
              {option.title}
            </ListboxOption>
          );
        })}
      </>
    );
  };

  return (
    <StyledSelect
      arrow={<Icon name="chevronDown" width={10} height={10} />}
      {...props}
    >
      <>
        {defaultValue && (
          <ListboxOption key="default" value="default">
            {defaultValue}
          </ListboxOption>
        )}
        {options && renderOptions(options)}
      </>
    </StyledSelect>
  );
};

Select.propTypes = {
  /* text which will be always displayed by default. If omitted, first value is selected*/
  defaultValue: string,
  options: arrayOf(
    shape({
      title: string.isRequired,
      value: string.isRequired,
    })
  ).isRequired,
};

export const StyledSelect = styled(Listbox)`
  > [data-reach-listbox-button] {
    padding: ${spacing.spacingBaseTop} ${spacing.spacingLgRight};
    font-family: ${typography.paragraph1FontFamily};
    line-height: ${typography.headline6LineHeight};
    font-weight: bold;
    border-color: ${colors.onSurface100};
    border-radius: 12px;
    color: ${colors.onBackground500};
    position: relative;
    outline: none;
    align-items: baseline;
  }
  > [data-reach-listbox-arrow] {
    /* top: calc(50% - 9px); */
    /* position: absolute; */
    right: 0.75rem;
    pointer-events: none;
    display: block;
  }
  svg {
    path {
      fill: ${colors.onBackground500};
    }
  }
`;

export default Select;
