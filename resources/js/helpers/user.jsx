
const token_key = "AppGestionLocation_user_token"
const user_key = "AppGestionLocation_user"

export const setLocalUser = (token , user) => {
    localStorage.setItem(token_key, token)
    localStorage.setItem(user_key, JSON.stringify(user))
}

export const removeLocalUser = () => {
    localStorage.removeItem(token_key)
    localStorage.removeItem(user_key)
}

export const getLocalUser = () => {
    const token = localStorage.getItem(token_key)
    const user = localStorage.getItem(user_key)
    return {
      token,
      user: JSON.parse(user),
    }
}
