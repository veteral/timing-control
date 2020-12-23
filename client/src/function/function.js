export function renderElement (data, el, property) {

    const item = data[property].find(f => f.id === el[property]);        
    
    if(item !== 0 && item !== undefined)    return item.name;
    else return null;
};