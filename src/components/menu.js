import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Menu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main_Menu webhook" } }
        ) {
          edges {
            node {
              items {
                title
                object_id
                url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <nav>
        <ul>
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <li key={item.object_id}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    )}
  />
)

export default Menu
