const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')

const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()



const rules = auth.rewriter({
  // Permission rules
  coins: 660,
  users: 660,
})

server.use(cors())
server.use(middlewares)
server.use(rules)
server.db = server.db
server.use(auth)

server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})