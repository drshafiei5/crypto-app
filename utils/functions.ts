export const getErrorText = (error: string | undefined) => {
  switch (error) {
    case 'ERR_NETWORK':
      return 'It is not possible to connect to the api at this time.'
      break

    default:
      return ''
  }
}
