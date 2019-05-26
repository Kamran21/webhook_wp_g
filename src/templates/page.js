import React from "react"
import Layout from "../components/layout"
export default ({ pageContext }) => {
  console.log(JSON.stringify(null, pageContext, 3))
  return (
      <Layout>
          <div className="container" dangerouslySetInnerHTML={{__html:pageContext.content}}/>
      </Layout>
    
  )
}
