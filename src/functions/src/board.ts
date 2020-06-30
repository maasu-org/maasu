import { fetchCSVObject, BOARD_ID, getHeaders, ResBody, ResData } from './utils'

type BoardType = {
  id: string
  lname: string
  positionType: string
  positionPriority: number
}

export const handler = async (event: any, context: any) => {
  let data: ResData = null

  const { data: res, error }: ResBody = await fetchCSVObject<object>(BOARD_ID)

  if (res) {
    data = (res as [])
      .filter(
        (b: BoardType) =>
          b.id != null &&
          b.lname != null &&
          b.positionType != null &&
          b.positionPriority != null
      )
      .sort(
        (a: BoardType, b: BoardType): number =>
          b.positionPriority - a.positionPriority
      )
  }

  const body: ResBody = { data, error }
  return {
    context,
    event,
    ...getHeaders(),
    statusCode: 200,
    body: JSON.stringify(body),
  }
}
