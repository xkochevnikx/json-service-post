import React from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { useDispatch } from 'react-redux';
import { searchSliceActions } from '../modal/slice/searchSlice';
import cls from './SearchPosts.module.css'


export function SearchPosts () {

    const dispatch = useDispatch()

    function onHandlerInput(e) {
        dispatch(searchSliceActions.setText(e.target.value))
    }

    return (
        <form className={cls.search}>
            <MyInput onChange={onHandlerInput} placeholder="Поиск"/>
            <MyInput type='submit' className={cls.btnSubmit} value=" "/> 
        </form>
        
    );
};

