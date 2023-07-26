import React from 'react';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import { getPagesCount } from '../../shared/lib/utils/pages';
import cls from './PaginationList.module.css';

/**
 *
 * @PaginationList компонент отображения страниц
 * @page номер текущей страницы
 * @totalCount общее число постов с учетом фильтрации
 * @changePage функция изменения номера страницы
 * @limit лимит постов на странице
 * @changePageForward функция перехода на страницу вперед
 * @changePageBack функция перехода на страницу назад
 */

export function PaginationList(props) {
    const {
        page,
        totalCount,
        changePage,
        limit,
        changePageForward,
        changePageBack,
    } = props;

    // хелпер пересчета текущего колличества страниц
    let pagesArray = getPagesCount(totalCount, limit);

    return (
        <div className={cls.wrapper}>
            <MyButton
                className={cls.pagBackBtn}
                onClick={changePageBack}
            >
                Назад
            </MyButton>
            <div className={cls.paginList}>
                {pagesArray.map((p) => (
                    <span
                        onClick={() => changePage(p)}
                        className={
                            p === page
                                ? cls.activListBtn
                                : cls.listBtn
                        }
                        key={p}
                    >
                        {p}
                    </span>
                ))}
            </div>
            <MyButton
                className={cls.pagFirstBtn}
                onClick={changePageForward}
            >
                Далее
            </MyButton>
        </div>
    );
}
