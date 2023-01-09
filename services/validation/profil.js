const isPhoneNumber = (value) => {
    return (
        typeof value === 'object' &&
        value.code?.length !== 0 &&
        value.short?.length !== 0 &&
        value.phone?.toString().length > 2
    )
}

const isAddress = (value) => {
    return (
        typeof value === 'object' &&
        value.zip.length !== 0 &&
        value.city?.length > 2 &&
        value.address?.length > 4
    )
}

module.exports = { isPhoneNumber, isAddress }
