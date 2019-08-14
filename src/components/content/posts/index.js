import React from "react";
import "./posts.scss";
import { Card, Pagination, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComments,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { Loader } from "components";

function Posts(props) {
  const { isLoading, post } = props;

  return (
    <main>
      {!isLoading ? (
        <Container>
          <section className="m-4">
            <Card className="post-card">
              <Card.Header>{post}</Card.Header>
              <Image src="https://source.unsplash.com/1920x600/?people" fluid />
              <Card.Body>
                <Card.Text>desc</Card.Text>
              </Card.Body>
              <Card.Footer className="card-meta text-muted">
                <div className="meta">
                  <span>
                    <FontAwesomeIcon icon={faEye} />
                    34
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faComments} />
                    34
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    34
                  </span>
                </div>
                <Card.Link href="#">Read more</Card.Link>
              </Card.Footer>
            </Card>
          </section>
          <Pagination className="m-4">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Container>
      ) : (
        <Container>
          <Loader />
        </Container>
      )}
    </main>
  );
}

export default Posts;
