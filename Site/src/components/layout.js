import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import Footer from './footer'

import '../css/styles.scss'

const Layout = ({ children }) => (

  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={
      
      data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <div className="bg-palette-0 text-palette-15 flex flex-col min-h-screen overflow-hidden">
          
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex-grow">
            <div className="mx-auto py-8">{children}</div>
          </main>

          <Footer />
        </div>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
