import ky from 'ky'

import { API_URL } from 'constants/api'

export const apiClient = ky.extend({
  prefixUrl: API_URL,
  retry: 0, // Request retry handled by react-query
})
