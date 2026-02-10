import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isOpenNavbar: boolean,
    formSucces: boolean
}

const initialState: CounterState = {
    isOpenNavbar: false,
    formSucces: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        setNavbar: (state) => {
            state.isOpenNavbar = !state.isOpenNavbar
        },
        setSuccess: (state, action: PayloadAction<boolean>) => {
            state.formSucces = action.payload

        }
    }
})

export const { setNavbar, setSuccess } = counterSlice.actions

export default counterSlice.reducer