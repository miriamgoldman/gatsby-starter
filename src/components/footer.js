import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import { FaFacebookSquare, FaLinkedin, FaInstagram,FaTwitterSquare } from "react-icons/fa";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
  
        wordpressWpApiMenusMenusItems(name: { eq: "Social Media" }) {
          items {
            title
            url
          }
        }
      }
    `}
    render={data => (
      <footer style={{ background: `rebeccapurple`, marginBottom: `1.45rem`, }} >
         <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          © {new Date().getFullYear()}
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            
              <li style={{ margin: `0 10px` }}>
                <a href={`https://www.facebook.com/dancingsensei/`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                <FaFacebookSquare />
                </a>
              </li>
              <li style={{ margin: `0 10px` }}>
                <a href={`https://www.twitter.com/mirigoldman/`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                <FaTwitterSquare />
                </a>
              </li>
              <li style={{ margin: `0 10px` }}>
                <a href={`https://www.instagram.com/dancingsensei/`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                <FaInstagram />
                </a>
              </li>
              <li style={{ margin: `0 10px` }}>
                <a href={`https://www.linkedin.com/in/miriamgoldman/`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                <FaLinkedin />
                </a>
              </li>

          </ul>
       </div>
      </footer>
    )}
  />
)
export default Footer