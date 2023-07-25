import React from 'react';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import { getPagesCount } from '../../shared/lib/utils/pages';

export function PaginationList (props) {

    const { page, 
        totalPages, 
        changePage, 
        limit, 
        changePageForward,
        changePageBack,
    } = props;

    let pagesArray = getPagesCount(totalPages, limit)

    return (
        <div className="page_wrapper">
            <MyButton onClick={changePageBack}>Назад</MyButton>
                {pagesArray.map(p => (
                    <MyButton
                        onClick={() => changePage(p)}
                        className={page === p ? "page page_current" : "page"}
                        key={p}>
                        {p}
                    </MyButton>
                ))}
            <MyButton onClick={changePageForward}>Далее</MyButton>
        </div>
    );
};

