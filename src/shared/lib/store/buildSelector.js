import { useSelector } from 'react-redux';

/**
 * Хелпер, упрощает работу с селекторами изолирует в себе логику получения данных из стора
 * @selector аргумент на вход
 *
 */

export function buildSelector(selector) {
    const useSelectorHook = () => useSelector(selector);

    return [useSelectorHook, selector];
}
