import React, {useState} from 'react';
import './NewBlogPostCSS.css';
import {useDispatch, useSelector} from "react-redux";
import { setProducts } from "../../store/actions/dataActions";

/**
 * This class is fetched from bootstrap and edited for my needs, link:
 * https://getbootstrap.com/docs/5.0/forms/layout/?
 * @returns {JSX.Element}
 * @constructor
 */
export default function NewBlogPost() {
    const [title, setTitle] = useState("");
    const [subheading, setSubheading] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImg] = useState(null);

    const blogPosts = useSelector(state => state.blogPosts);
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const newBlogpost = {
            title: title,
            subheading: subheading,
            description: description,
            img: image
        };
        let copy = blogPosts;
        copy.push(newBlogpost);
        dispatch(setProducts(copy));
    }



    return (
        <div className={"form-wrapper"}>
            <h3>New Blog Post</h3>
            <p>Create a new code related blogpost using the following form.</p>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Title:</label>
                <input type="text" className="form-control" id="formGroupExampleInput"
                       placeholder="Title of blogpost..." value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Subheading:</label>
                <input type="text" className="form-control" id="formGroupExampleInput"
                       placeholder="Introductory header..." value={subheading} onChange={(e) => setSubheading(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Description:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                          placeholder="The blogpost text contents..." value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Picture:</label>
                <input className="form-control" type="file" id="formFile" value={image}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
}