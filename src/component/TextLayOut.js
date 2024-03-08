import styled from "styled-components";

const TextLayOut = styled.div`
  h1 {
    padding: 0 4rem;
    padding-top: 5rem;
    width: calc(100% - var(--padding) * 2);
    text-align: left;
    font-size: 2rem;
    color: #333; 
    
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0 2rem;
      padding-top: 5rem;
    }

  }
`;

export default TextLayOut;
