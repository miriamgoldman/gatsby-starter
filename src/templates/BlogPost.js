
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Written on {data.wordpressPost.date}
    </p>
    <Img sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressPost.title} style={{ maxHeight: 450 }} />

    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            sizes(maxWidth: 1200) {
              base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
            }
          }
        }
      }
    }
  }
`