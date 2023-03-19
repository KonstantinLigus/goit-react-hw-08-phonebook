export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefresh = state => state.auth.isRefreshing;
export const selectSubscription = state => state.auth.user.subscription;
export const selectAuthError = state => state.auth.error;
export const selectAuthErrorMessage = state => state.auth.errorMessage;
export const selectUserAvatar = state => state.auth.user.avatarURL;
