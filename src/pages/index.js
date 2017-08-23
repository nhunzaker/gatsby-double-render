import React from 'react'
import Link from 'gatsby-link'
import css from './animation.module.css'

const IndexPage = () =>
  <div className={css.fade}>
    <h1>Hi</h1>
    <p>You should see an animation twice.</p>
    <p>
      React will render again because the URLs for the link below are different
    </p>
    <Link to="page-2/">Go to page 2</Link>
  </div>

export default IndexPage
