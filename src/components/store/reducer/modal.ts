import { createSlice } from "@reduxjs/toolkit"

type ModalState = {
    isOpen: boolean;
};

export const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { open, close, toggle } = modalSlice.actions;
export default modalSlice.reducer;  