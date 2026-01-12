import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '神以灵丶的小站',
    },

    pages: [
      {
        name: '项目列表123',
        url: '/projects/',
        icon: 'i-ri-gallery-view',
        color: 'dodgerblue',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-image-line',
        color: 'hotpink',
      },
         {
        name: '友情链接',
        url: '/links/',
        icon: 'i-ri-link',
        color: 'grey',
      },
    ],

    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '春宵苦短日高起,从此君王不早朝.',
      },
    },
  },

  unocss: { safelist },
})
