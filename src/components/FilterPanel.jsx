import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'store/filtres/filtert-selector';
import { removeFilter, clearFilter } from 'store/filtres/filter-actions';

const FilterPanel = () => {
	const curentFiltert = useSelector(selectorFilter);
	const dispatch = useDispatch();
	if (curentFiltert.length === 0) {
		return null;
	}

	return (
		<Card className="filter-panel">
			<div className="filter-panel-wrapper">
				<Stack>
					{curentFiltert.map((filter) => (
						<Badge
							key={filter}
							variant="clearable"
							onClear={() => dispatch(removeFilter(filter))}
						>
							{filter}
						</Badge>
					))}
				</Stack>

				<button onClick={() => dispatch(clearFilter)} className="link">
					Clear
				</button>
			</div>
		</Card>
	);
};

export { FilterPanel };
