import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
import mediaQuery from "styled-media-query";


export const mediaMobile = mediaQuery.lessThan("medium");
export const mediaTablet = mediaQuery.lessThan("large");
export const mediaLaptop = mediaQuery.lessThan("huge");


type Media = ReturnType<typeof mediaQuery["lessThan"]>

const spExtend = css`
  color: blue;
`;

export const withMediaStyle = <C extends React.VFC>(media: Media, extend: FlattenSimpleInterpolation, Component: C) => {
  return styled(Component)`
    ${media`
      ${extend}
    `};
  `;
};


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Content = withMediaStyle(
  mediaMobile,
  css`
    width: 50%;
  `,
  withMediaStyle(
    mediaTablet,
    css`
      width: calc(100% / 3);
    `,
    withMediaStyle(
      mediaLaptop,
      css`
        width: 25%;
      `,
      styled.div`
        flex: 0 0 auto;
        width: 20%;
      `)
  )
)

export const config = { amp: true }

export default function Home() {
  return (
    <Container>
      {[...Array(10).keys()].map((i) => {
        return <Content key={i}>{i}</Content>
      })}
    </Container>
  )
}

