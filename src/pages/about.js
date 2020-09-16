import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default function About({ data }) {
  return (
    <Layout>
      <div>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
