import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/positions-selector';
import { JobPosition } from './JobPosition';
import { addFilter } from 'store/filtres/filter-actions';
import { selectorFilter } from 'store/filtres/filtert-selector';

const JobList = () => {
	const dispatch = useDispatch();
	const currentVisibleFilter = useSelector(selectorFilter);
	const positons = useSelector((state) =>
		selectVisiblePositions(state, currentVisibleFilter)
	);

	const handlerAddfilter = (filter) => {
		dispatch(addFilter(filter));
	};
	return (
		<div className="job-list">
			{positons.map((item) => (
				<JobPosition
					key={item.id}
					{...item}
					handlerAddfilter={handlerAddfilter}
				/>
			))}
		</div>
	);
};

export { JobList };
