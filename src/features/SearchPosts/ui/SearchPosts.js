import React from 'react';
import { MyInput } from '../../../shared/ui/MyInput/MyInput';
import { useDispatch } from 'react-redux';
import { searchSliceActions } from '../modal/slice/searchSlice';

export function SearchPosts () {

    const dispatch = useDispatch()

    function onHandlerInput(e) {
        dispatch(searchSliceActions.setText(e.target.value))
    }

    return (
        <MyInput onChange={onHandlerInput}/>
    );
};

