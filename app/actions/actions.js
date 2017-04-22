export const SELECT_WEDGE = 'SELECT_WEDGE'

export function selectWedge(wedge) {
  return {
    type: SELECT_WEDGE,
    wedge
  }
}
