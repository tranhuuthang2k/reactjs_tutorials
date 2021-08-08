function isEmptyObject(obj)
{
    for(let prop in obj)
    //hasOwnProperty kiem tra object co ton tai key k
    if(obj.hasOwnProperty(prop))
    {
        return false;
    }
    return JSON.stringify(obj) ===JSON.stringify({}); 
}
export const helper = {
    isEmptyObject,
};