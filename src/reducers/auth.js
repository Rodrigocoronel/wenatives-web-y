const initialState =
{
	NEW : true
};

export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case "NEW":
            return { 
                ...state, 
            }

        default:
            return state;
    }
    
}