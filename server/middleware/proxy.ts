/**
 * server middleware proxy by http-proxy-middleware
 * nuxt github api：https://api.github.com/orgs/nuxt/repos
 * local url: http://localhost:3000/github/api/orgs/nuxt/repos
 */
import { createProxyMiddleware } from 'http-proxy-middleware'
const Env = import.meta.env.NODE_ENV
const prodUrl = 'https://api.github.com'
const devUrl = 'https://api.github.com'
const targetUrl = Env === 'production' ? prodUrl : devUrl
const proxyParams = {
  target: targetUrl,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/github/api': '/'
  }
}
const apiProxyMiddleware = createProxyMiddleware('/github/api', proxyParams)

export default defineEventHandler(async (event) => {
  await new Promise((resolve, reject) => {
    const next = (err?: unknown) => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    }
    apiProxyMiddleware(event.node.req, event.node.res, next)
  })
})
