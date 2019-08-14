import React from 'react'
import './post.scss'
import { Container, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faComments,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import { Time } from 'components'
import Comments from '../comments'
import PostEditing from '../postEditing'

function Post (props) {
  return (
    <main>
      <div className='img-wrp'>
        <Image src='https://source.unsplash.com/1920x600/?people' fluid />
        <div className='overlay'>
          <h1>Post title mafaka</h1>
        </div>
      </div>
      <Container>
        <div className='post my-4'>
          <div className='post-text'>text</div>

          <div className='post-meta text-muted mt-4'>
            <div className='posted-on mb-1'>
              <span>
                <Time time={props.time} />
              </span>
            </div>
            <div className='utils'>
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
          </div>
        </div>
        <PostEditing />
        <Comments />
      </Container>
    </main>
  )
}

export default Post
