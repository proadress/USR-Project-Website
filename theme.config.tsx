import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <>
    <img src="logo.png" width="50px" height="50px" />
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      NTOU USR
    </span>
  </>,
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Made by NTOU',
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    )
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1
  },
}

export default config
