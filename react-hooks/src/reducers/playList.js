
const actionTypes= { GET_MUSIC :'GET_MUSIC',
                     ADD_MUSIC : 'ADD_MUSIC',
                     THIS_MUSIC :'THIS_MUSIC',
                     DEL_MUSIC:'DEL_MUSIC',  ENDED:'ENDED'};

const initialState =[];
export default  function store(data=initialState,action) {

    switch (action.type) {
        case actionTypes.GET_MUSIC:

            return action.data;
        case actionTypes.ADD_MUSIC:

            data.unshift(action.data);
            return  data;
        case actionTypes.DEL_MUSIC:
            return  data.filter(item=>{
                if (item.data.id !== action.data) {
                    return item
                }

            });

        default:
            return data;


    }

}

