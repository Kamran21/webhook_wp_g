import React from "react"

export default ({ pageContext }) => {
  console.log(JSON.stringify(null, pageContext, 3))
  return (
    <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
  )
}
