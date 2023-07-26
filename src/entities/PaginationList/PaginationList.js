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
            <MyButton className={cls.pagBackBtn}
              onClick={changePageBack}>Назад</MyButton>
            <div className={cls.paginList}>
                {pagesArray.map(p => (
                <span
                    onClick={() => changePage(p)}
                    className={p === page ? cls.activListBtn : cls.listBtn}
                    key={p}>
                    {p}
                </span>
            ))}
            </div>
            <MyButton 
            className={cls.pagFirstBtn}
            onClick={changePageForward}>Далее</MyButton>
        </div>
    );
};

