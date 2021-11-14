import { Character, CharacterInfo } from '../reducers/characterReducer'

export const charactersList: Character[] = [
	{
		name: 'Traveler',
		image: 'traveler.png',
	},

	// Mondstadt
	{
		name: 'Jean',
		image: 'jean.png',
		type: 'anemo',
		region: 'Mondstadt',
	},
	{
		name: 'Albedo',
		image: 'albedo.png',
		type: 'geo',
		region: 'Mondstadt',
	},
	{
		name: 'Aloy',
		image: 'aloy.png',
		type: 'cryo',
		region: 'Mondstadt',
	},
	{
		name: 'Amber',
		image: 'amber.png',
		type: 'pyro',
		region: 'Mondstadt',
	},
	{
		name: 'Barbara',
		image: 'barbara.png',
		type: 'hydro',
		region: 'Mondstadt',
	},
	{
		name: 'Bennett',
		image: 'bennett.png',
		type: 'pyro',
		region: 'Mondstadt',
	},
	{
		name: 'Diluc',
		image: 'diluc.png',
		type: 'pyro',
		region: 'Mondstadt',
	},
	{
		name: 'Diona',
		image: 'diona.png',
		type: 'cryo',
		region: 'Mondstadt',
	},
	{
		name: 'Eula',
		image: 'eula.png',
		type: 'cryo',
		region: 'Mondstadt',
	},
	{
		name: 'Fischl',
		image: 'fischl.png',
		type: 'electro',
		region: 'Mondstadt',
	},
	{
		name: 'Kaeya',
		image: 'kaeya.png',
		type: 'cryo',
		region: 'Mondstadt',
	},
	{
		name: 'Klee',
		image: 'klee.png',
		type: 'pyro',
		region: 'Mondstadt',
	},
	{
		name: 'Lisa',
		image: 'lisa.png',
		type: 'electro',
		region: 'Mondstadt',
	},

	{
		name: 'Noelle',
		image: 'noelle.png',
		type: 'geo',
		region: 'Mondstadt',
	},
	{
		name: 'Razor',
		image: 'razor.png',
		type: 'electro',
		region: 'Mondstadt',
	},
	{
		name: 'Rosaria',
		image: 'rosaria.png',
		type: 'cryo',
		region: 'Mondstadt',
	},
	{
		name: 'Sucrose',
		image: 'sucrose.png',
		type: 'anemo',
		region: 'Mondstadt',
	},
	{
		name: 'Venti',
		image: 'venti.png',
		type: 'anemo',
		region: 'Mondstadt',
	},

	// Liyue
	{
		name: 'Beidou',
		image: 'beidou.png',
		type: 'electro',
		region: 'Liyue',
	},

	{
		name: 'Chongyun',
		image: 'chongyun.png',
		type: 'cryo',
		region: 'Liyue',
	},

	{
		name: 'Ganyu',
		image: 'ganyu.png',
		type: 'cryo',
		region: 'Liyue',
	},
	{
		name: 'Xiangling',
		image: 'xiangling.png',
		type: 'pyro',
		region: 'Liyue',
	},
	{
		name: 'Xiao',
		image: 'xiao.png',
		type: 'anemo',
		region: 'Liyue',
	},
	{
		name: 'Xingqiu',
		image: 'xingqiu.png',
		type: 'hydro',
		region: 'Liyue',
	},
	{
		name: 'Xinyan',
		image: 'xinyan.png',
		type: 'pyro',
		region: 'Liyue',
	},
	{
		name: 'Yanfei',
		image: 'yanfei.png',
		type: 'pyro',
		region: 'Liyue',
	},
	{
		name: 'Hu Tao',
		image: 'hutao.png',
		type: 'pyro',
		region: 'Liyue',
	},
	{
		name: 'Keqing',
		image: 'keqing.png',
		type: 'electro',
		region: 'Liyue',
	},
	{
		name: 'Ningguang',
		image: 'ningguang.png',
		type: 'geo',
		region: 'Liyue',
	},
	{
		name: 'Qiqi',
		image: 'qiqi.png',
		type: 'cryo',
		region: 'Liyue',
	},

	{
		name: 'Tartaglia',
		image: 'tartaglia.png',
		type: 'hydro',
		region: 'Liyue',
	},

	{
		name: 'Zhongli',
		image: 'zhongli.png',
		type: 'geo',
		region: 'Liyue',
	},

	// Inasuma
	{
		name: 'Kasuha',
		image: 'kasuha.png',
		type: 'anemo',
		region: 'Inazuma',
	},
	{
		name: 'Kokomi',
		image: 'kokomi.png',
		type: 'hydro',
		region: 'Inazuma',
	},
	{
		name: 'Ayaka',
		image: 'ayaka.png',
		type: 'cryo',
		region: 'Inazuma',
	},
	{
		name: 'Raiden',
		image: 'raiden.png',
		type: 'electro',
		region: 'Inazuma',
	},

	{
		name: 'Sara',
		image: 'sara.png',
		type: 'electro',
		region: 'Inazuma',
	},
	{
		name: 'Sayu',
		image: 'sayu.png',
		type: 'anemo',
		region: 'Inazuma',
	},

	{
		name: 'Thoma',
		image: 'thoma.png',
		type: 'pyro',
		region: 'Inazuma',
	},

	{
		name: 'Yoimiya',
		image: 'yoimiya.png',
		type: 'pyro',
		region: 'Inazuma',
	},
]

console.log('THERE ARE', charactersList.length, 'CHARACTERS')

const imagePath = '/characters'

const buildState = (characters: Character[]): CharacterInfo[] =>
	characters.map((char, i: number) => ({
		...char,
		image: `${imagePath}/${char.image}`,
		id: i,
		isSelectable: true,
		isAvailable: true,
	}))

export const characterState: CharacterInfo[] = buildState(charactersList)