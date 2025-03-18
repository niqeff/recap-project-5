import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 32px 0;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  user-select: none;
`;

export default function Spotlight({ art }) {
  return (
    <StyledCard>
      <StyledImage src={art.imageSource} fill alt="" />
      <span>{art.artist}</span>
    </StyledCard>
  );
}
