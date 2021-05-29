var load = (command) => {
    try {
        var l = require(`./commands/${command}`).run
    } catch(e) {
        return false
    }
    return l
}

exports.load = load