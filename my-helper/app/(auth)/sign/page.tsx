import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { login } from '@/server/action/auth'
import React from 'react'

const sign = () => {


  const loginSubmit = (formData: FormData) => {
    const {email, password} = formData;
    login(email, password) ;
  }

  return (
    <>


      <Card className='sm:w-[500px]'>
        <CardHeader>
          <CardTitle className='text-blue-500 text-center'>Welcome back</CardTitle>
          <CardDescription className='text-base'>Enter your email and password to signIn </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <form>
              <label>Email</label>
              <div className="mb-4">
                <Input type='email' id='email' name='email' placeholder='Enter Email here' />
              </div>
              <label>Password</label>
              <div className="mb-4">
                <Input type='password' id='password' name='password' placeholder='Enter Password here' />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <label htmlFor="airplane-mode">Airplane Mode</label>
              </div>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <p><Button variant={'secondary'} className='from-teal-800 to-teal-300'>Sign In</Button></p>
        </CardFooter>
      </Card>
    </>

  )
}

export default sign
