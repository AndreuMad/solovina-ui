export const getIsUserSynced = state => state.auth.isSynced;
export const getIsUserAuthenticated = state => !!state.auth.user;
export const getUser = state => state.auth.user;
