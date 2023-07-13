import { Icons } from '.';
import { HEX, HSL, RGB, UNKNOWN, type ColorType } from '../types';

export const countMonths = (from: Date, to: Date = new Date()): number => {
	let firstYear = 0;
	let wholeYears = 0;
	let newYear = 0;

	if (to.getFullYear() !== from.getFullYear()) {
		newYear = to.getMonth();
		wholeYears = (to.getFullYear() - from.getFullYear() - 1) * 12;
		firstYear = 12 - from.getMonth();
	} else {
		firstYear = to.getMonth() - from.getMonth();
	}

	return firstYear + wholeYears + newYear + 1;
};

export const getMonthName = (index: number): string => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	return monthNames[index];
};

export const useImage = (url: string, base: string): string => `${base}${url}`;

export const useTitle = (title: string, suffix: string) => `${title} | ${suffix}`;

export const useSocialMedia = (media: any) => {
	switch (media) {
		case 'github':
			return { title: 'GitHub', icon: Icons.GitHub };
		case 'linkedin':
			return { title: 'LinkedIn', icon: Icons.LinkedIn };
		case 'stackoverflow':
			return { title: 'StackOverflow', icon: Icons.StackOverflow };
		case 'twitter':
			return { title: 'Twitter', icon: Icons.Twitter };
		case 'email':
			return { title: 'Email', icon: Icons.Email };
	}
};

export const normalizeColorToHSLOrThrow = (color: string): string => {
	const rgb = convertColor(color, "hsl");
	const type = getColorType(rgb);

	if (type === "unknown") {
		throw "unable to specify (color) type, maybe it is badly formatted ?";
	}

	return rgb;
}

export const changeColorOpacity = (color: string, opacity: number, type?: ColorType) => {
	const c = normalizeColorToHSLOrThrow(color);

	if (!isInInterval(0, opacity, 1)) throw "(opacity) should be a number between 0 and 1.";

	const [h, s, l] = extractDataFromHSL(c);

	return convertColor(hsla(h, s, l, opacity), type ?? "hex");
}

export const convertColor = (color: string, to: ColorType): string => {
	const type = getColorType(color);

	if (type === UNKNOWN) {
		return color;
	}
	if (![HEX, HSL, RGB].includes(to)) return color;
	if (to === type) return color;

	let [r, g, b, a] = [0, 0, 0, 1];

	if (type === HEX) {
		const c = color.substring(1);
		const l = c.length;

		if (l === 3) {
			r = parseInt(c[0] + c[0], 16);
			g = parseInt(c[1] + c[1], 16);
			b = parseInt(c[2] + c[2], 16);
		} else if (l >= 6) {
			r = parseInt(c.substring(0, 2), 16);
			g = parseInt(c.substring(2, 4), 16);
			b = parseInt(c.substring(4, 6), 16);

			if (l === 8) {
				a = round(parseInt(c.substring(6), 16) / 256);
			}
		}
	} else if (type === HSL) {
		const [h, s, l, _a] = extractDataFromHSL(color);

		if (_a !== undefined) {
			a = _a;
		}

		[r, g, b] = hslToRgb(h, s, l);
	} else if (type === RGB) {
		const [_r, _g, _b, _a] = extractDataFromRGB(color);

		if (_a !== undefined) {
			a = _a;
		}

		[r, g, b] = [_r, _g, _b];
	}

	if (to === RGB) {
		return `rgba(${r},${g},${b},${a})`;
	} else if (to === HSL) {
		const [h, s, l] = rgbToHsl(r, g, b);
		return `hsla(${h}deg ${s}% ${l}% / ${a})`;
	} else if (to === HEX) {
		return rgbToHex(r, g, b, a);
	}

	return color;
}

export const getColorType = (color: string): ColorType | "unknown" => {
	return isHexColor(color) ? HEX : isHslColor(color) ? HSL : isRgbColor(color) ? RGB : UNKNOWN;
}

export const isHexColor = (color: string): boolean => {
	if (color == '' || color == null) return false;

	const three = /^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{3}$/;
	const six = /^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{6}$/;
	const eight = /^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{8}$/;

	return three.test(color) || six.test(color) || eight.test(color);
}

export const isHslColor = (color: string): boolean => {
	if (isBlank(color)) {
		return false;
	}

	if (isHslForm(color)) {
		const [h, s, l] = extractDataFromHSL(color);

		if (360 < h || h < 0) return false;
		if (100 < s || s < 0) return false;
		if (100 < l || l < 0) return false;

		return true;
	} else if (isHslaForm(color)) {
		const [h, s, l, a] = extractDataFromHSL(color);

		if (360 < h || h < 0) return false;
		if (100 < s || s < 0) return false;
		if (100 < l || l < 0) return false;

		if (a !== undefined && (1 < a || a < 0)) {
			return false;
		}

		return true;
	}

	return false;
}

export const extractDataFromHSL = (color: string): number[] => {
	if (isHslaForm(color)) {
		return color
			.slice(5, -1)
			.replace("%", "")
			.replace("deg", "")
			.replace("/", "")
			.replace("  ", " ")
			.split(" ")
			.map((i) => parseFloat(i.trim()));
	}

	if (isHslForm(color)) {
		return color
			.slice(4, -1)
			.replace("%", "")
			.replace("deg", "")
			.replace("/", "")
			.split(" ")
			.map((i) => parseFloat(i.trim()));
	}

	throw "(color) is not of a HSL/HSLA form.";
}

export const hsla = (h: number, s: number, l: number, a = 1): string => {
	if (!isInInterval(0, h, 360)) throw "(hue) should be a number between 0 and 360";
	if (!isInInterval(0, l, 100)) throw "(lightness) should be a number between 0 and 100";
	if (!isInInterval(0, s, 100)) throw "(saturation) should be a number between 0 and 100";
	if (!isInInterval(0, a, 1)) throw "(alpha) should be a number between 0 and 1";

	return `hsla(${h}deg ${s}% ${l}% / ${a})`;
}

export const HSL_REGEX =
	/^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/;

export const HSLA_REGEX =
	/^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;


export const isHslForm = (color: string): boolean => {
	return isBlank(color) ? false : HSL_REGEX.test(color);
}

export const isHslaForm = (color: string): boolean => {
	return isBlank(color) ? false : HSLA_REGEX.test(color);
}

export const isInInterval = (min: number, value: number, max: number): boolean => {
	if (typeof min !== "number") throw "(min) is not a number.";
	if (typeof max !== "number") throw "(max) is not a number.";
	if (typeof value !== "number") throw "(value) is not a number.";
	if (min > max) throw "(min) is greater than (max).";

	return min <= value && value <= max;
}

export const isBlank = (value: string): boolean => {
	return !isString(value) || isEmpty(value.trim());
}

export const isString = (o: unknown): boolean => {
	return (typeof o === "string");
}

export const isEmpty = (value: string): boolean => {
	return !isString(value) || value.length === 0;
}

export const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
	// Must be fractions of 1
	s /= 100;
	l /= 100;

	h = h % 360;

	const c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
		m = l - c / 2;

	let r = 0,
		g = 0,
		b = 0;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return [r, g, b];
}

export const extractDataFromRGB = (color: string): number[] => {
	if (isRgbaForm(color)) {
		return color
			.slice(5, -1)
			.split(",")
			.map((i) => parseFloat(i.trim()));
	}

	if (isRgbForm(color)) {
		return color
			.slice(4, -1)
			.split(",")
			.map((i) => parseFloat(i.trim()));
	}

	throw "(color) is not of a RGB/RGBA form.";
}

export const RGBA_REGEX =
	/^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;


export const isRgbaForm = (color: string): boolean => {
	return isBlank(color) ? false : RGBA_REGEX.test(color);
}

export const RGB_REGEX =
	/^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/;

export const isRgbForm = (color: string): boolean => {
	return isBlank(color) ? false : RGB_REGEX.test(color);
}

const round = (n: number): number => {
	return Math.round(n * 100) / 100;
};

export const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
	// Make r, g, and b fractions of 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Find greatest and smallest channel values
	const cMin = Math.min(r, g, b),
		cMax = Math.max(r, g, b),
		delta = cMax - cMin;

	let h = 0,
		s = 0,
		l = 0;

	// Calculate hue
	// No difference
	if (delta == 0) h = 0;
	// Red is max
	else if (cMax == r) h = ((g - b) / delta) % 6;
	// Green is max
	else if (cMax == g) h = (b - r) / delta + 2;
	// Blue is max
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	// Make negative hues positive behind 360°
	if (h < 0) h += 360;

	// Calculate lightness
	l = (cMax + cMin) / 2;

	// Calculate saturation
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	// Multiply l and s by 100
	s = +(s * 100).toFixed(2);
	l = +(l * 100).toFixed(2);

	return [round(h), round(s), round(l)];
}

export const rgbToHex = (r: number, g: number, b: number, a = 1): string => {
	const formatHex = (c: number) => {
		const hex = Math.round(c).toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	return "#" + formatHex(r) + formatHex(g) + formatHex(b) + formatHex(a * 255);
}


export const isRgbColor = (color: string): boolean => {
	if (isBlank(color)) {
		return false;
	}

	if (isRgbForm(color)) {
		const [r, g, b] = extractDataFromRGB(color);

		for (const c of [r, g, b]) {
			if (!isInInterval(0, c, 256)) return false;
		}

		return true;
	} else if (isRgbaForm(color)) {
		const [r, g, b, a] = extractDataFromRGB(color);

		for (const c of [r, g, b]) {
			if (!isInInterval(0, c, 256)) return false;
		}

		if (a !== undefined && !isInInterval(0, a, 1)) return false;

		return true;
	}

	return false;
}