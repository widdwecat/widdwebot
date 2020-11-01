const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 0,
    username: 'widdwebot',
    // password: 'password'
})

function faceNearestPlayer() {
    const playerFilter = (entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)

    if(!playerEntity) return

    const pos = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(pos)
}

bot.on('physicTick', faceNearestPlayer)

bot.on('chat', (username, message) => {
    if(message === '!help') {
        bot.chat("Help: https://github.com/widdwecat/widdwebot/blob/main/README.md")
    }

    if(message === 'widdwebot') {
        bot.chat("what")
    }
})
