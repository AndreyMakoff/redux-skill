export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filtres = []) => {
	if (filtres.length === 0) return state.positions;

	return state.positions.filter((pos) => {
		const posFilters = [].concat(
			pos.role,
			pos.level,
			...pos.languages,
			...pos.tools
		);
		return filtres.every((filter) => posFilters.includes(filter));
	});
};
