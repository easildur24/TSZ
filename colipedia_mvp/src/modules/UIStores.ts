import { SchoolInfoStore } from "./stores/SchoolInfo/SchoolInfoStore";

/**
 * An interface that defines the stores passed into the view to render the UI.
 */
interface UIStores {
    schoolInfoStore: SchoolInfoStore
}

export { UIStores }