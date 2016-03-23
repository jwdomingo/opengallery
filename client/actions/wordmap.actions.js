export const SHOW_WORDMAP = 'SHOW_WORDMAP'
export const HIDE_WORDMAP = 'HIDE_WORDMAP'

export function show() {
  return {
    type: SHOW_WORDMAP
  }
}

export function hide() {
  return {
    type: HIDE_WORDMAP
  }
}
