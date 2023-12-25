import { create } from 'zustand'

interface SidebarStore {
	collapsed: boolean;
	onExpand: () => void;
	onCollapse: () => void;
}

/**
 * Custom hook for managing the sidebar state.
 * @returns An object containing the sidebar state and methods to expand or collapse it.
 */
export const useSidebar = create<SidebarStore>((set) => ({
	// default state
	collapsed: false,
	onExpand: () => set({ collapsed: false }),
	onCollapse: () => set({ collapsed: true }),
}))

