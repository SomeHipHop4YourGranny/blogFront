import React from "react";
import { Link } from "react-router-dom";
import "./posts.scss";
import { Card, Pagination, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComments } from "@fortawesome/free-solid-svg-icons";

function Posts(props) {
  const { posts, meta, getPostByPage } = props;
  const currentPage = meta.page;
  const pages = Math.ceil(meta.count / meta.perPage);
  const pagiEl = [];
  const pagi = () => {
    const pagesTmp =
      Number(currentPage) === Number(pages)
        ? currentPage
        : Number(currentPage) + 1;
    for (
      let i =
        Number(currentPage) === 1
          ? Number(currentPage)
          : Number(currentPage) - 1;
      i <= pagesTmp;
      i++
    ) {
      i === Number(currentPage)
        ? pagiEl.push(
            <Pagination.Item key={i} active>
              {i}
            </Pagination.Item>
          )
        : pagiEl.push(
            <Pagination.Item
              key={i}
              onClick={() => {
                getPostByPage(i);
              }}
            >
              {i}
            </Pagination.Item>
          );
    }
    return (
      <Pagination className="m-4">
        {Number(currentPage) === 1 ? (
          <Pagination.First disabled />
        ) : (
          <Pagination.First
            onClick={() => {
              getPostByPage(1);
            }}
          />
        )}
        {Number(currentPage) === 1 ? (
          <Pagination.Prev disabled />
        ) : (
          <Pagination.Prev
            onClick={() => {
              getPostByPage(Number(currentPage - 1));
            }}
          />
        )}

        {Number(currentPage) > 2 ? <Pagination.Ellipsis /> : null}

        {pagiEl}
        {Number(currentPage) < Number(pages) - 2 ? (
          <Pagination.Ellipsis />
        ) : null}
        {Number(currentPage) === Number(pages) ? (
          <Pagination.Next disabled />
        ) : (
          <Pagination.Next
            onClick={() => {
              getPostByPage(Number(currentPage + 1));
            }}
          />
        )}
        {Number(currentPage) === Number(pages) ? (
          <Pagination.Last disabled />
        ) : (
          <Pagination.Last
            onClick={() => {
              getPostByPage(Number(pages));
            }}
          />
        )}
      </Pagination>
    );
  };

  return (
    <main>
      <Container>
        {posts.map(post => {
          return (
            <section className="m-4" key={post._id}>
              <Card className="post-card">
                <Card.Header>{post.title}</Card.Header>

                <Image src={post.img} fluid />
                <Card.Body>
                  <Card.Text>{post.desc}</Card.Text>
                </Card.Body>
                <Card.Footer className="card-meta text-muted">
                  <div className="meta">
                    <span>
                      <FontAwesomeIcon icon={faEye} />
                      {post.meta.views}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faComments} />
                      {post.comments.length}
                    </span>
                  </div>
                  <Link to={`/post/${post._id}`}>Read more</Link>
                </Card.Footer>
              </Card>
            </section>
          );
        })}

        {pagi()}
      </Container>
    </main>
  );
}

export default Posts;
