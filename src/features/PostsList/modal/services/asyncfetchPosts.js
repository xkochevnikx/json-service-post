import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../../../shared/lib/consts.js/API';

export const asyncfetchPosts = createAsyncThunk(
    'posts/asyncfetchPosts',
    async function ({limit, page}, thunkAPI) {
        try {
            const response = await axios(API, {
                    params: {
                        _limit: limit,
                        _page: page,
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
