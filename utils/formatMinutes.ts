export const formatMinutes = (minutes: number): string =>
  minutes > 9 ? minutes.toString() : `0${minutes}`
