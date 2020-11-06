import React from "react";
import WrittenBy from "../WrittenBy";
import Tag from "../Tag";

import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import { LinkContainer } from 'react-router-bootstrap'


function Post(props) {
    const post = props.data;

    let tags = post.tags
    let listBadge;
    if(tags.length > 1){
        listBadge = tags.map((tags) =>
        <Badge variant="primary" className="ml-1">{tags}</Badge>
        );
    }
    const detail = props.detail;
    
    if(detail === "card"){
        return (
            <Card style={{ width: '75%' }} className="mt-3 shadow mx-auto" data-id={post.uid}>
                <Card.Body>
                    <Card.Title>{post.title} {detail}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><WrittenBy name={post.name} email={post.email} /></Card.Subtitle>
                    <Card.Text>
                        {post.body}
                        <hr></hr>
                        {listBadge}
                    </Card.Text>
                    <LinkContainer to={`/post/${post.uid}`}>
                        <Card.Link>Visualizar post</Card.Link>
                    </LinkContainer>                
                </Card.Body>
            </Card>
        );
    }else if(detail === "post"){
        return(
            	<h1>{post.title}</h1>
        )
    }else{
        return(<h3 className="text-danger">Erro</h3>)
    }
    
}



export default Post;