const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')

const app = jsonServer.create()
//const path = require('')
const router = jsonServer.router('server/db.json')



const rules = auth.rewriter({
  // Permission rules
  coins: 660,
  users: 660,
})
app.use(cors())
app.use(rules)
app.db = router.db
app.use(auth)

app.use(router)
app.listen(5000, () => {
  console.log('JSON Server is running port 5000')
})