import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import customTOC from './components/custom/customTOC'


const config: DocsThemeConfig = {
  head: () => {
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="NTOU" />
      <meta property="og:description" content="NTOU" />
    </>
  },
  logo: <>
    <img src="logo.png" width="70px" height="70px" />
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      海大USR計畫
    </span>
  </>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NTOU'
    }
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 全館體驗票卷3件88折 →
      </a>
    )
  },
  navigation: {
    prev: false,
    next: false
  },

  footer: {
    text:
      <div>
        <div>Copyright © 2023國立臺灣海洋大學USR計畫</div>
        <div>+886-2-2462-2192</div>
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

  gitTimestamp: null
}

export default config
