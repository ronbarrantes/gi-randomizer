import { CharacterInfo } from '../reducers/characterReducer'

export const charactersList: string[] = [
    'Traveler',
	// Mondstadt
    'Amber',
    'Kaeya',
    'Lisa',
    'Diluc',
    'Mona',
    'Venti',
    'Diona',
    'Noelle',
    'Jean',
    'Klee',
    'Rosaria',
    'Bennet',
    'Albedo',
    'Fishl',
    'Eula',

	// Liyue
    'Xiangling',
    'Ningguan',
    'Xingqiu',
    'Zhongli',
    'Keqing',
    'Chongyun',
    'Xinyan',
    'Ganyu',
    'LAWYER',
    'Beidou',

	// Inazuma
    'Kasuha',
    'Sayu',
    'Raiden',
    'Kokomi',
    'Yoimiya',
    'Ayaka',
    'Sarah',
    'Gorou',
    'Itto',
]

const buildState = (characters: string[]): CharacterInfo[] =>
    characters.map((char: string, i: number) => ({
        name: char,
        id: i,
        isSelectable: true,
        isAvailable: true,
    }))

export const characterState: CharacterInfo[] = buildState(charactersList)