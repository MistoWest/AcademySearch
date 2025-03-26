const PREFIX = "!"
function create_prefix(command) {
    return `${PREFIX}${command}`
}

module.exports = create_prefix;