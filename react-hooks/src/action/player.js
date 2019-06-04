const actionTypes=
    { GET_MUSIC :'GET_MUSIC', ADD_MUSIC : 'ADD_MUSIC', THIS_MUSIC :'THIS_MUSIC',
        DEL_MUSIC:'DEL_MUSIC',  ENDED:'ENDED'
    };

export function update(data) {
    return {
        type:actionTypes. GET_MUSIC,
        data
    }

}

export function add(data) {
    return {
        type:actionTypes.ADD_MUSIC,
        data
    }
}
export function remove(data) {

    return {
        type:actionTypes. DEL_MUSIC,
        data
    }

}