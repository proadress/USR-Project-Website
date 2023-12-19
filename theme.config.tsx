import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import customTOC from './components/custom/customTOC'


const config: DocsThemeConfig = {
  logo: <>
    <img src="logo.png" width="60px" height="60px" />
  </>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NTOU'
    }
  },

  footer: {
    text:
      <div className='flex-row'>
        <div>Copyright © 2021國立臺灣海洋大學USR/B計畫.</div>
        <div> +886 930772965  </div>
        <div>基隆市中正區北寧路2號</div>
      </div>

  },
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
