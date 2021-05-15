import React from "react"
import Layout from "../components/Layout"
import HomePage from "../components/HomePage"
import styles from "./index.module.css"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"
export default () => (
  <div>
    {/* <Helmet>
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
      <SEO title={`Akash Kaintura`} /> */}
    <Layout>
      <HomePage />
    </Layout>
  </div>
)
