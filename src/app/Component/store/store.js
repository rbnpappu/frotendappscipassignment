import { create } from 'zustand';

const useToggleStore = create((set)=>({
    isVisible: true,
    toggleVisibility: ()=>set((state)=>({isVisible: !state.isVisible})),
    setVisible: (value)=> set({isVisible: value})
}))

export default useToggleStore;