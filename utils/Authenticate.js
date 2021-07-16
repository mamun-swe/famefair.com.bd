import jwtDecode from "jwt-decode"

export const isAuthenticate = async token => {
    try {
        const decode = jwtDecode(token)
        const currentTimestamp = parseInt(new Date().getTime() / 1000);
        const tokenIsNotExpired = decode.exp > currentTimestamp;
        if (tokenIsNotExpired) return true
        return false
    } catch (error) {
        if (error) return false
    }
}