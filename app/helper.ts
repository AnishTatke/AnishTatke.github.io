const capitalize = (str: String) => str[0].toUpperCase() + str.slice(1)

const formatString = (str: String) => str.split('_').map(word => capitalize(word)).join(" ")

export {capitalize, formatString}