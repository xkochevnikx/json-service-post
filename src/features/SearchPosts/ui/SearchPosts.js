import React from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { useDispatch } from 'react-redux';
import { searchSliceActions } from '../modal/slice/searchSlice';
import cls from './SearchPosts.module.css'
import { useDebounce } from '../../../shared/lib/hooks/useDebounce';


export function SearchPosts () {

    const dispatch = useDispatch()

    function onHandlerInput(e) {
        dispatch(searchSliceActions.setText(e.target.value))
    }

    const debounce = useDebounce(onHandlerInput, 500)

    return (
        <form className={cls.search}>
            <MyInput onChange={debounce} placeholder="Поиск"/>
            <MyInput type='submit' className={cls.btnSubmit} value=" "/> 
        </form>
    );
};

