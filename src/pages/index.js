import React from "react"
import {graphql} from 'gatsby'

export const query = graphql ` 
    query {
        contentfulPages {
            title
        }
    }
`

export default function Home(props) {
  return (
    <div>
    <h1>{props.data.contentfulPages.title}</h1>
  </div>
  )
 
}