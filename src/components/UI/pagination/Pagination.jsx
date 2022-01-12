import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPage, page, changePage}) => {
    let pagesArray = usePagination(totalPage)
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    key={p} className={page === p ? 'page page__current' : 'page'}
                    onClick={() => changePage(p)}
                > {p}
                    </span>)
            }
        </div>
    );
};

export default Pagination;