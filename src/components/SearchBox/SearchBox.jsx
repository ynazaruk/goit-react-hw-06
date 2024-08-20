import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
    };
    
    return (
        <div className={css.searchForm}>
            <input
                type='text'
                placeholder='Search...'
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};
export default SearchBox;