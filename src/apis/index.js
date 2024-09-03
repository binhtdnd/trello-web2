import axios from 'axios'
import Column from '~/pages/Boards/BoardContent/ListColumns/ListColumn/Column'
import { API_ROOT } from '~/utils/constants'

// board
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  return response.data
}


// Column
export const createNewColumnAPI = async (newColumndData) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumndData)
  return response.data
}

//Card
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}