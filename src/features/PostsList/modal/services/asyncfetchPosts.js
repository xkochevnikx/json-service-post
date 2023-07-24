import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../../../shared/lib/consts.js/API';

export const asyncfetchPosts = createAsyncThunk(
    'posts/asyncfetchPosts',
    async function (listId, thunkAPI) {
        try {
            const response = await axios(API, {
                    params: {
                        _limit: 10,
                        _page: listId,
                    },
                });
            if (!response.data) {
                throw new Error(
                    'Ошибка запроса данных с сервера'
                );
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
