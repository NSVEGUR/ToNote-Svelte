import { writable } from 'svelte/store';

const tags = {
	"voilet": "#9A69FE",
	"blue": "#54C1FE",
	"skyblue": "#7DE6FF",
	"green": "#95FE83",
	"red": "#FF7070",
	"orange": "#FF9C54",
	"yellow": "#FFE03C",
	"grey": "#E7E7E7"
}
const defaultStore = {
	tags,
	notes: [
		{
			id: 0,
			tag: tags.voilet,
			label: "Work",
			current: true,
			contents: [],
		},
		{
			id: 1,
			tag: tags.blue,
			label: "University",
			current: false,
			contents: [],
		},
		{
			id: 2,
			tag: tags.skyblue,
			label: "English Lessons",
			current: false,
			contents: [],
		},
		{
			id: 3,
			tag: tags.green,
			label: "Sports",
			current: false,
			contents: [],
		},
		{
			id: 4,
			tag: tags.red,
			label: "Important",
			current: false,
			contents: [],
		},
		{
			id: 5,
			tag: tags.grey,
			label: "All",
			current: false,
			contents: [],
		}
	],
};


export const store = writable(defaultStore);

export interface storeType {
	tags: Map<string, string>;
	notes: {
		id: number;
		tag: string;
		label: string;
		current: boolean;
		contents: any[];
	}[];
}