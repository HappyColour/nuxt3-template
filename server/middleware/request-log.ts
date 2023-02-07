import consola from "consola"
export default defineEventHandler((event) =>{
  consola.info('New Request', event.node.req.url)
})