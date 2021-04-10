import React from 'react';
import './CommentForm.css';

const CommentForm = (props) => {

    return (
        <div className="comment-form-wrapper">
            <form onSubmit={props.submit} className="comment-form">
                <textarea rows="8" cols="50" name="description"></textarea>
                <input type="submit" value="Add comment" />
            </form>
        </div>
    )
}

export default CommentForm;