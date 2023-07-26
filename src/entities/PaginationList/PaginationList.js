import React from 'react';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import { getPagesCount } from '../../shared/lib/utils/pages';
import cls from "./PaginationList.module.css"

export function PaginationList (props) {

    const { page, 
        totalPages, 
        changePage, 
        limit, 
        changePageForward,
        changePageBack,
    } = props;

    let pagesArray = getPagesCount(totalPages, limit);

    return (
        <div className={cls.wrapper}>
            <MyButton onClick={changePageBack}>Назад</MyButton>
            <div className={cls.paginList}>
                {pagesArray.map(p => (
                <MyButton
                    onClick={() => changePage(p)}
                    className={page == p ? cls.page_current : cls.page}
                    key={p}>
                    {p}
                </MyButton>
            ))}
            </div>
            <MyButton onClick={changePageForward}>Далее</MyButton>
        </div>
    );
};

