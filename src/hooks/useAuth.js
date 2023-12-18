export const useAuth = () => {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if (token && user) {
        user = JSON.parse(user);
        if (token.length && Object.keys(user)?.length > 0)
            return true;
        else
            return false;
    } else {
        return false;
    }
};