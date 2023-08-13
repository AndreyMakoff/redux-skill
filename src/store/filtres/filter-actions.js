export const ADD_FILTER = 'ADD_FILTER';
export const REMMOVE_FILTER = 'EMMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const addFilter = (filter) => ({
	type: ADD_FILTER,
	filter,
});

export const removeFilter = (filter) => ({
	type: REMMOVE_FILTER,
	filter,
});

export const clearFilter = {
	type: CLEAR_FILTER,
};
