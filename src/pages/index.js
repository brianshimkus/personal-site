import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <Img
                fluid={data.heroImageGatsbyImage.childImageSharp.fluid}
                alt="A self portrait of Brian Shimkus"
              />
            </div>
            <div class="column">
              <h1>
                <span>Brian</span> Shimkus
              </h1>
              <h2>Front-End Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query {
    heroImageGatsbyImage: file(relativePath: { eq: "Me-BW.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
