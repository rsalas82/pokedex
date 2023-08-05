export const camelize = (value: string) => {
    const splittedValue = value.split(' ')
    return splittedValue.map(val => {
        return `${val.slice(0, 1).toLocaleUpperCase()}${val.slice(1)}`
    }).join(' ')
}