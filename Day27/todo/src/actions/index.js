export const updateAdd = (input) => {
    return {
        type: 'UPDATE_ADD',
        payload: input,
    }
}
export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id,
    }
}
