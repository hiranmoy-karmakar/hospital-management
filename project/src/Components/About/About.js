import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function About() {
  return (
  
    <div>
        <br/>  <br/>
        <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>

      <br/>  <br/>  <br/>
      <p><Link to="/">Click me</Link>go to home page</p>

    </div>
  )
}
