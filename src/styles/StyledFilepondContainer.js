import styled from "styled-components";

const StyledFilepondContainer = styled.div`
  .filepond--root {
    height: 220px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
  }

  .filepond--panel-root {
    border: 2px dashed #bdbdbd;
    border-radius: var(--rounded-box, 1rem);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #fafafa;
  }

  .filepond--drop-label {
    display: ${(props) => props.files.length > 0 && "none"};
    height: ${(props) => props.files.length === 0 && "100%"};
  }

  @media (min-width: 30em) {
    .filepond--item {
      width: calc(50% - 0.5em);
    }
  }

  @media (min-width: 50em) {
    .filepond--item {
      width: calc(15% - 0.5rem);
    }
  }
`;

export default StyledFilepondContainer;
