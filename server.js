const { db } = require('./utils/database')
const { app } = require('./app')
const { User } = require('./models/userModel')
const { Task } = require('./models/taskModel')

//Relations

User.hasMany(Task, { foreignKey: 'userId'})
Task.belongsTo(User)

db.authenticate()
    .then(() => console.log('database authenticaded'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('database synced'))
    .catch(err => console.log(err))

const PORT = 4000

app.listen(PORT)
