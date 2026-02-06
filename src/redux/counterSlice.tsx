import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    isOpenNavbar: boolean,
}

const initialState: CounterState = {
    isOpenNavbar: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        setNavbar: (state) => {
            state.isOpenNavbar = !state.isOpenNavbar
        }
    }
})

export const { setNavbar } = counterSlice.actions

export default counterSlice.reducer