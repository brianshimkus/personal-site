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
              <div className="columns is-mobile">
                <div className="column is-3">
                  <Img
                    fluid={data.logoGatsbyImage.childImageSharp.fluid}
                    alt="Logo"
                  />
                </div>
                <div className="column is-9">
                  <h1>
                    <span>Brian</span> Shimkus
                  </h1>
                  <h2>Front-End Developer</h2>
                </div>
              </div>
              <hr />
              <div className="social-icons">
                <ul>
                  <li>
                    <a
                      href="https://github.com/brianshimkus"
                      target="_blank"
                      alt="External link to GitHub"
                      title="GitHub"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/brianshimkus1/"
                      target="_blank"
                      alt="External link to LinkedIn"
                      title="LinkedIn"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/brianshimkus.me/"
                      target="_blank"
                      alt="External link to Instagram"
                      title="Instagram"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:Brian@BrianShimkus.com"
                      alt="Click to email me"
                      title="Email"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <a
                  href="https://drive.google.com/file/d/1GvkcStF_UoTrFL5A2Z-AHIqXnFQG_D1P/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    class="button btn-primary"
                    alt="External link to my resume"
                    title="Resume"
                  >
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
    logoGatsbyImage: file(relativePath: { eq: "Logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    resumeGatsbyImage: file(relativePath: { eq: "BrianShimkus-Resume.jpg" }) {
      relativePath
    }
  }
`
