import apiFetch from "./apiFetch";

const checkEmailExists = async (email) => {
    const response = await apiFetch('checkEmail', {email}, 'POST');
    return response.exists
}

export default checkEmailExists;