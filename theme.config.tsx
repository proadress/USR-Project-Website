import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import customTOC from './components/custom/customTOC'


const config: DocsThemeConfig = {
  logo: <>
    <img src="logo.png" width="50px" height="50px" />
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      NTOU USR
    </span>
  </>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NTOU'
    }
  },

  footer: {
    text: 'Made by NTOU',
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1, toggleButton: true,
  },
  toc: {
    // backToTop: true,
    // title: 'NTOU USR',
    component: customTOC,

  },
  feedback: { content: null },
  docsRepositoryBase: 'https://github.com/proadress/documentation-starter-kit/tree/main',
}

export default config
