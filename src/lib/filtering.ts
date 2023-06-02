import dayjs from 'dayjs';
import type { Like } from '../db/schema';

type SortByOption = 'Newest' | 'Likes' | 'Oldest';

type Item = {
	id: string;
	tags: string[];
	dateAdded: number | number;
	youtube?: string;
	twitch?: string;
	likeCount: number;
};

function byNewest(a: Item, b: Item) {
	return Number(b.dateAdded) - Number(a.dateAdded);
}

function byOldest(a: Item, b: Item) {
	return Number(a.dateAdded) - Number(b.dateAdded);
}

function byLikes(a: Item, b: Item) {
	return b.likeCount - a.likeCount;
}

const sortByMap = {
	Newest: byNewest,
	Oldest: byOldest,
	Likes: byLikes
};

export const sortItems = (
	filters: string[],
	items: Item[],
	sortBy: SortByOption,
	likeByItem: Record<string, number>
) => {
	const isMatch = (item: Item) => {
		const matchTag = item.tags && item.tags.some((tag) => filters.includes(tag));

		// match for other props like twitch, youtube
		const matchProperty = filters.some((filter) => item[filter]);

		return matchTag || matchProperty;
	};

	const filtered = filters.length ? items.filter(isMatch) : items;
	const withLikes = filtered.map((item) => ({
		...item,
		likeCount: likeByItem[item.id] || 0
	}));

	withLikes.sort(sortByMap[sortBy]);
	return withLikes;
};

export const getIsNew = (epocDate: string | number) =>
	epocDate && dayjs(epocDate).diff(Date.now(), 'day') < 10;
