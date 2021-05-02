type PipeItem<T> = (value: T) => T;

export const pipe = <T = any>(value: T) => {
	const chainItems: PipeItem<T>[] = [];
	const returnDataStructure = {
		add: (item: PipeItem<T>) => {
			chainItems.push(item);
			return returnDataStructure;
		},
		run: () => chainItems.reduce<T>((changedValue, cb) => cb?.(changedValue), value),
	};

	return returnDataStructure;
};
