const colors = [
    { type: 'normal', bgColor: 'bg-[#A8A77A]', fromColor: 'from-[#A8A77A]', toColor: 'to-[#A8A77A]' },
    { type: 'fire', bgColor: 'bg-[#EE8130]', fromColor: 'from-[#EE8130]', toColor: 'to-[#EE8130]' },
    { type: 'water', bgColor: 'bg-[#6390F0]', fromColor: 'from-[#6390F0]', toColor: 'to-[#6390F0]' },
    { type: 'electric', bgColor: 'bg-[#F7D02C]', fromColor: 'from-[#F7D02C]', toColor: 'to-[#F7D02C]' },
    { type: 'grass', bgColor: 'bg-[#7AC74C]', fromColor: 'from-[#7AC74C]', toColor: 'to-[#7AC74C]' },
    { type: 'ice', bgColor: 'bg-[#96D9D6]', fromColor: 'from-[#96D9D6]', toColor: 'to-[#96D9D6]' },
    { type: 'fighting', bgColor: 'bg-[#C22E28]', fromColor: 'from-[#C22E28]', toColor: 'to-[#C22E28]' },
    { type: 'poison', bgColor: 'bg-[#A33EA1]', fromColor: 'from-[#A33EA1]', toColor: 'to-[#A33EA1]' },
    { type: 'ground', bgColor: 'bg-[#E2BF65]', fromColor: 'from-[#E2BF65]', toColor: 'to-[#E2BF65]' },
    { type: 'flying', bgColor: 'bg-[#A98FF3]', fromColor: 'from-[#A98FF3]', toColor: 'to-[#A98FF3]' },
    { type: 'psychic', bgColor: 'bg-[#F95587]', fromColor: 'from-[#F95587]', toColor: 'to-[#F95587]' },
    { type: 'bug', bgColor: 'bg-[#A6B91A]', fromColor: 'from-[#A6B91A]', toColor: 'to-[#A6B91A]' },
    { type: 'rock', bgColor: 'bg-[#B6A136]', fromColor: 'from-[#B6A136]', toColor: 'to-[#B6A136]' },
    { type: 'ghost', bgColor: 'bg-[#735797]', fromColor: 'from-[#735797]', toColor: 'to-[#735797]' },
    { type: 'dragon', bgColor: 'bg-[#6F35FC]', fromColor: 'from-[#6F35FC]', toColor: 'to-[#6F35FC]' },
    { type: 'dark', bgColor: 'bg-[#705746]', fromColor: 'from-[#705746]', toColor: 'to-[#705746]' },
    { type: 'steel', bgColor: 'bg-[#B7B7CE]', fromColor: 'from-[#B7B7CE]', toColor: 'to-[#B7B7CE]' },
    { type: 'fairy', bgColor: 'bg-[#D685AD]', fromColor: 'from-[#D685AD]', toColor: 'to-[#D685AD]' }
]


export const getColorByType = (type: string = 'normal') => {
    return colors.find(({type: pokemonType}) => pokemonType === type)
}