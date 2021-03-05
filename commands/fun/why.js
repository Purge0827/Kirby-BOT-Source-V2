
const random = require('srod-v2')
module.exports = {
    name: "why",
    description: "why",
    category: "fun",
    run: async (client, message, args) => {
       let why = await random.GetWhy()
       message.channel.send(why)
    }
}