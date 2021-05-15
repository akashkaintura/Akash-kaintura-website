import React from "react"
import Layout from "../components/Layout"
import HomePage from "../components/HomePage"
import styles from "./index.module.css"
import { Helmet } from "react-helmet"
export default () => (
  <Helmet>
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Personal",
          "url": "https://www.akashkaintura.netlify.app",
          "name": "Akash Kaintura",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 8979594537",
            "contactType": "Personal"
            "mail": "akashkaintura@yahoo.com"
          }
        }
      `}
    </script>
    <Layout>
      <HomePage />
    </Layout>
  </Helmet>
)
