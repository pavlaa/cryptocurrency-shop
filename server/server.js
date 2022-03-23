const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')
const app = jsonServer.create()
const router = jsonServer.router('server/db.json')
const port = process.env.PORT || 3004
const middlewares = jsonServer.defaults({ static: "./build" })


app.use(cors())

const rules = auth.rewriter({
  // Permission rules
  coins: 660,
  users: 660,
})

app.use(middlewares)
app.use(rules)
app.db = router.db
app.use(auth)

app.use(router)
app.listen(port, () => {
  console.log('JSON Server is running')
})