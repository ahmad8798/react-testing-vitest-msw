import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://dummyjson.com/todos', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      "todos":[
        {
          "id":1,
          "todo":"Do something nice for someone i care about",
          "complted":true,
          "userID":26
        }
      ]
    })
  }),
]

