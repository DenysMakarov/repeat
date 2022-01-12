import React from 'react';
import MyInp from "./UI/input/MyInp";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInp
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="sorting"
                option={[
                    {value: 'title', name: 'by name'},
                    {value: 'body', name: 'by desc'}
                ]}
            />
        </div>
    );
};

export default PostFilter;