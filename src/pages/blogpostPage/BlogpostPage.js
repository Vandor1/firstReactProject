import React, {useEffect, useState} from 'react';
import './blogpostPage.css';
import {useParams} from "react-router-dom";
import {blogPostList} from "../../blogPostsList";
import BlogPostPageCard from "../../components/blogPostPageCard/BlogPostPageCard";

export default function BlogpostPage(){
   const [product, setProduct] = useState({});

    let {id} = useParams();

    useEffect(()=> {
        const foundProduct = blogPostList.find(function(item){
            return item.id === id;
        });
        setProduct(foundProduct);
    }, [id]);

    return(
        <div>
            <BlogPostPageCard
                title={product.title}
                date={product.date}
                subheading={product.subheading}
                longDescription={product.longDescription}
                picture={product.image}
                id={product.id}
            />
        </div>
    );
}