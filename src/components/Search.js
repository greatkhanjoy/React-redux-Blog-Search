import debounce from 'lodash.debounce';
import React from 'react';
import { useDispatch } from 'react-redux';
import serchIcon from '../assets/search.svg';
import { searchChanged } from '../Redux/search/action';

const Search = () => {
    const dispatch = useDispatch();
    // const [search, setSearch] = useState('')

    const searchHandler = (e) => {
        // setSearch(e.target.value)
        dispatch(searchChanged(e.target.value))

    }
  return (
    <div
    className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
>
    <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={debounce((e) =>  searchHandler(e), 500)}
    />
    <img
        className="inline h-6 cursor-pointer"
        src={serchIcon}
        alt="Search"
    />
</div>
  )
}

export default Search