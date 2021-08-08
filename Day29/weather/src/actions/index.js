export const updateCity = (cityname) => {
    return {
        type: 'UPDATE_CITY',
        payload: cityname,
    }
}
export const weatherData = (input) => {
    return (dispatch) => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=bd5c2854c07e49b685b213459210208&q=${input}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dispatch({
                type: "UPDATE_WEATHER",
                payload: data
            })
        })
    }
}
export const tooggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    }
}
