import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';

dayjs.extend(duration);

const LOOM_TIME = 25;
const VILL_TIME = 25;

const FEUDAL_TIME = 130;
const CASTLE_TIME = 160;

const asMinutes = (time) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time - minutes * 60);
	const duration = dayjs.duration({
		minutes,
		seconds
	});
	return duration.format('mm:ss');
};

export class Generic {
	constructor(loom) {
		this.loom = loom;
		this.loomTime = LOOM_TIME;
		this.feudalVillSpeed = 1;
		this.villTime = VILL_TIME;
		this.bonusVills = 0;
		this.feudal = FEUDAL_TIME;
		this.castle = CASTLE_TIME;
	}

	getLoomTime() {
		if (this.loom === 'skip') {
			return 0;
		} else {
			return LOOM_TIME;
		}
	}

	getTime(vills, count) {
		const loomTime = this.getLoomTime();
		const feudalTime = (vills - 3) * VILL_TIME + loomTime;
		const feudalArrive = feudalTime + this.feudal;
		const castleClick = feudalArrive + (VILL_TIME / this.feudalVillSpeed) * 2;
		const castleArrive = castleClick + this.castle;

		return {
			pop: count + this.bonusVills,
			feudalUp: asMinutes(feudalTime),
			feudalArrive: asMinutes(feudalArrive),
			castleUp: asMinutes(castleClick),
			castleArrive: asMinutes(castleArrive),
			hideCastle: vills < 22
		};
	}
}

export class Persians extends Generic {
	constructor(loom) {
		super(loom);
		this.feudalVillSpeed = 1.1;
	}

	getLoomTime() {
		if (this.loom === 'skip') {
			return 0;
		} else if (this.loom === 'dark') {
			return LOOM_TIME;
		} else {
			// feudal
			return Math.floor(LOOM_TIME / 1.1);
		}
	}
}

export class Portuguese extends Generic {
	constructor(loom) {
		super(loom);
	}
	getLoomTime() {
		return Math.round(LOOM_TIME / 1.25);
	}
}

export class Mayans extends Generic {
	constructor(loom) {
		super(loom);
		this.bonusVills = 1;
	}
}

export class Chinese extends Generic {
	constructor(loom) {
		super(loom);
		this.bonusVills = 2;
	}
}

export class Goths extends Generic {
	constructor(loom) {
		super(loom);
	}
	getLoomTime() {
		return 0;
	}
}

export class Malay extends Generic {
	constructor(loom) {
		super(loom);
		this.feudal = Math.floor(FEUDAL_TIME / 1.66);
		this.castle = Math.floor(CASTLE_TIME / 1.66);
	}
}
