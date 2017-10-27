import React from 'react'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  isPending,
  isSuccess,
  isError
}) => (
  <Card className='container'>
    <form action='/' onSubmit={onSubmit}>
      <h2 className='card-heading'> Login </h2>
      {isPending && <div className='processing-message'>Please wait...</div> }
      {isSuccess && <div className='success-message'>Success.</div> }
      {isError && <div className='error-message'>{isError}</div> }
      {(errors.length > 0) && <p className='error-message'>{errors}</p>}

      <div className='field-line'>
        <TextField
          floatingLabelText='Email'
          name='email'
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>
      <div className='field-line'>
        <TextField
          floatingLabelText='Password'
          type='password'
          name='password'
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>
      <div className='button-line'>
        <RaisedButton type='submit' label='Log in' primary />
      </div>
      <CardText>Do not have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
)

export default LoginForm
