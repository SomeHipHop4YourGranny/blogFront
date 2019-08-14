import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './comments.scss'
import { Image, Button } from 'react-bootstrap'

import { Time } from 'components'

function Comments (props) {
  return (
    <div className='comments'>
      <h2>Comments</h2>
      <div className='comment my-4'>
        <div className='user-info '>
          <Image
            className='avatar'
            src='https://source.unsplash.com/1920x600/?people'
            roundedCircle
          />
          <div className='utils'>
            <a href='/#'>User</a>
            <span className='text-muted'>
              <Time time={props.time} />
            </span>
          </div>
        </div>
        <div className='comment-text my-3'>text</div>
      </div>
      <div className='comment-form my-4'>
        <h2>Leave a comment</h2>
        <form>
          <CKEditor
            editor={ClassicEditor}
            data='<p>Hello from CKEditor 5!</p>'
            onChange={(event, editor) => {
              const data = editor.getData()
              console.log({ event, editor, data })
            }}
          />
          <Button variant='primary' size='lg' type='submit' block>
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Comments
