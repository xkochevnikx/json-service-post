/**
 * Хелпер, подсчета общего колличества страниц
 * @totalCount число постов вернувшихся от сервера
 * @limit лимит постов на странице
 */

export function getPagesCount(totalCount, limit) {
    let result = [];
    let count = Math.ceil(totalCount / limit);
    for (let i = 0; i < count; i++) {
        result.push(i + 1);
    }
    return result;
}
