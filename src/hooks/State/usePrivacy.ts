import ShowOrNot from 'react-native-global-state-hooks'

const privacy = new ShowOrNot(false)

export const privacyGlobal = privacy.getHook()