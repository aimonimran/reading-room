export const getBaseUrl = (param) => {
    return `${process.env.REACT_APP_BACKEND_URL}${param}`;
}