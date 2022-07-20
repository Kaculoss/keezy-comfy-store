import React from "react";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio
            facilis, accusantium obcaecati possimus voluptatum eligendi?
            Inventore natus mollitia minima sapiente, excepturi aliquid odit
            sint tempore obcaecati eos eius ab numquam, iusto perspiciatis fuga
            beatae aliquam quam facere culpa ratione cumque rem. Maxime harum
            repellat vero nesciunt dicta provident ad magnam, vel deserunt
            ratione obcaecati cum iusto earum blanditiis voluptates! Natus
            assumenda quibusdam, neque illo perspiciatis maiores ad ipsum earum!
            Maxime possimus ad vel harum, magni sequi. Non, earum porro
            consequatur consectetur assumenda hic nobis nam tempore magnam vero
            alias, quis harum cumque sunt quos. Dolorem architecto culpa animi
            vero?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
