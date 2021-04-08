const initialState = {
    products: [],
    blogPosts: []
}

function dataReducer(state = initialState, action){
    switch(action.type){
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products
            }
        case "SET_BLOG_POSTS":
            return{
                ...state,
                blogPosts: action.blogPosts
            }
        default:
            return state;
    }
}

export default dataReducer;