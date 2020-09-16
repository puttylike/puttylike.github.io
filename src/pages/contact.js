import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"


export default function Contact() {
  return (
    <Layout>
      <div>
        <Header headerText="I'd love to talk! Email me at the address below" />
        <p>
          <a href="mailto:pizazzy@naver.com">pizazzy@naver.com</a>
        </p>
      </div>
    </Layout>
  )
}
