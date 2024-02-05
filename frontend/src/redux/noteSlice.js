import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import noteService from './noteService';

const initialState = {
    notes: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
}

export const getNotes = createAsyncThunk('notes/get',async (_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await noteService.getAll(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const createNote = createAsyncThunk('notes/create', async(data,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await noteService.create(data,token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        resetNotes: (state)=>initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getNotes.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getNotes.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(getNotes.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.notes = action.payload;
        })
        .addCase(createNote.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createNote.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(createNote.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.notes.push(action.payload);
        })

    }
})

export const {resetNotes} = noteSlice.actions;
export default noteSlice.reducer;