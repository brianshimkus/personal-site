import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaListAlt,
} from "react-icons/fa"

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
              <div className="social-icons">
                <ul>
                  <li>
                    <a
                      href="https://github.com/brianshimkus"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/brianshimkus1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/brianshimkus.me/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Brian@BrianShimkus.com">
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <a href="../src/assets/BrianShimkus-Resume.pdf" target="_blank">
                  <button class="button btn-primary">
                    <span>Resume</span>
                    <span class="icon">
                      <FaListAlt />
                    </span>
                  </button>
                </a>
              </div>
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
