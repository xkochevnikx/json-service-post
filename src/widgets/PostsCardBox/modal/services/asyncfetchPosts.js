import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../../../shared/lib/consts.js/API';

export const asyncfetchPosts = createAsyncThunk(
    'posts/asyncfetchPosts',
    async function (_, thunkAPI) {
        try {
            const response = await axios(API);
            if (!response.data) {
                throw new Error(
                    'Ошибка запроса данных с сервера'
                );
            }
            console.log(response);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
