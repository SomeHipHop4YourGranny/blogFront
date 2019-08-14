import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './postEditing.scss'
import { Button, Form } from 'react-bootstrap'

function PostEditing (props) {
  return (
    <div className='post-editing my-4'>
      <h2>Post Editing</h2>
      <form className='my-4'>
        <Form.Group controlId='formTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Tilte' />
        </Form.Group>
        <Form.Group controlId='formImg'>
          <Form.Label>Img URL</Form.Label>
          <Form.Control type='text' placeholder='Img URL' />
        </Form.Group>
        <Form.Group controlId='formDesc'>
          <Form.Label>Descriptioon</Form.Label>
          <Form.Control type='text' placeholder='Desc' />
        </Form.Group>
        <Form.Group controlId='formText'>
          <Form.Label>Text</Form.Label>
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
        </Form.Group>
      </form>
    </div>
  )
}

export default PostEditing
