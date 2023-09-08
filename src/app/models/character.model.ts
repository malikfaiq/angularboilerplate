export interface Character{
    id: number,
    name: string,
    hitpoints: number,
    strength: number,
    intelligence: number
}


export interface CharacterResponse{
    data: Array<Character>,
    message: string,
    success: boolean
}