
let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
}

if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://trello-api-ft6z.onrender.com'
}

export const API_ROOT = apiRoot


export const hardBoardId = '66d9cc270396bd4016348ad5'