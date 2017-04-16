import { WEDGES } from './Constants.js'
import { Actions } from 'react-native-router-flux'

export function getNextPage(wedge, isTitleDiplayed) {
  newTitle = "";
  // If this is the last wedge, let nextPage go to mandala
  if (wedge === WEDGES[WEDGES.length-1]) {
    return () => Actions.mandala()
  } else {
    // Else get next wedge
    let nextWedge = WEDGES[WEDGES.indexOf(wedge) + 1]

    if (isTitleDiplayed) {
      newTitle = nextWedge
    }

    return () => Actions.onboardingQuiz({
      wedge: nextWedge,
      title: newTitle
    })
  }
}
