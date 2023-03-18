export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefresh = state => state.auth.isRefreshing;
export const selectSubscription = state => state.auth.user.subscription;
