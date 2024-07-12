import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'

export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

<<<<<<< HEAD
    if (email === 'johndoe@example.com') {
=======
    if (email === 'bahjetmk@gmail.com') {
>>>>>>> e4dab3fddce99379677d1b4ee4234cba905b5acf
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
