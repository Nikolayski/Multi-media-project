import React from 'react';

const Comments = (props) => {

    return (
        <div className="comments-wrapper">
            {props.comments.map(x => (
                <div className="comment" key={x.id}>
                    <p>{x.message}</p>
                    <i>{x.creatorUsername}</i>
                </div>
            ))}
        </div>
        )
}
export default Comments;