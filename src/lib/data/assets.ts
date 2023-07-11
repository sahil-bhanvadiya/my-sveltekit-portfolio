import type { Asset } from '../../lib/types';

export const getAssetURL = (asset: Asset): string => {
	return `/icons/${asset}.svg`;
};
