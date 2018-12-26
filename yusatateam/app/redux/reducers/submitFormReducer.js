import { SUBMITGPSFORM } from '../common/actionTypes';

const initialState ={
    data : [],
    error :false,
    isLoading : true
}

export default submitForm = (state = initialState,action)=>{
        switch (action.type){
            case SUBMITGPSFORM.SUBMITGPSFORM_REQUEST :
            return Object.assign({},state,{
                isLoading:true
            })
            case SUBMITGPSFORM.SUBMITGPSFORM_SUCCESS : 
            return Object.assign({},state,{
                isLoading:false,
                data:action.data
            })
            case SUBMITGPSFORM.SUBMITGPSFORM_FAILED :
            return Object.assign({},state,{
                isLoading:false,
                error:true,
                data : []
            })
            default:
            return state;

        }
}