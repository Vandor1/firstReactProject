
export function setProducts(products){
    return function(dispatch){
        dispatch({
            type: "SET_PRODUCTS",
            products: products
        })
    }
}

export function setBlogPosts(blogPosts){
    return function(dispatch){
        dispatch({
            type: "SET_BLOG_POSTS",
            blogPosts: blogPosts
        })
    }
}