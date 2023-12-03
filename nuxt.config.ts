import type { Plugin } from 'vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  
  ssr:true,

  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs:{
        lang:"es"
      }
    }
    
  },


  
  modules: [
    
    (_options: any, nuxt: { hooks: { hook: (arg0: string, arg1: (config: any) => void) => void } }) => {
      nuxt.hooks.hook('vite:extendConfig', (config: { plugins: Plugin[][] }) => {
        
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/html-validator'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
