import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface SidebarState {
    isOpen: boolean;
}

// Initial state with correct type
const initialState: SidebarState = {
    isOpen: true,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state: SidebarState) => {
            state.isOpen = !state.isOpen;
        },
        openSidebar: (state: SidebarState) => {
            state.isOpen = true;
        },
        closeSidebar: (state: SidebarState) => {
            state.isOpen = false;
        },
    },
});

// Export actions and reducer
export const { toggleSidebar, openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
