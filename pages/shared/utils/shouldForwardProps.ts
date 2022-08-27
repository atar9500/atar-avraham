import { StyledOptions } from '@emotion/styled';

const shouldForwardProps = (...props: PropertyKey[]): StyledOptions => ({
  shouldForwardProp(prop) {
    return !props.includes(prop);
  },
});

export default shouldForwardProps;
