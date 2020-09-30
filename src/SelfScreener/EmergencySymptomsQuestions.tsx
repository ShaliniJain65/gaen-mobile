import React, { FunctionComponent } from "react"
import { useTranslation } from "react-i18next"
import { ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { SelfScreenerStackScreens } from "../navigation"
import { Button, GlobalText } from "../components"

import { EmergencySymptom } from "./selfScreener"
import { useSelfScreenerContext } from "../SelfScreenerContext"
import SymptomCheckbox from "./SymptomCheckbox"

const EmergencySymptomsQuestions: FunctionComponent = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const {
    emergencySymptoms,
    updateEmergencySymptoms,
  } = useSelfScreenerContext()
  const {
    CHEST_PAIN,
    DIFFICULTY_BREATHING,
    LIGHTHEADEDNESS,
    DISORIENTATION,
  } = EmergencySymptom

  const handleOnPressNext = () => {
    if (emergencySymptoms.length > 0) {
      return navigation.navigate(SelfScreenerStackScreens.CallEmergencyServices)
    }

    navigation.navigate(SelfScreenerStackScreens.NoEmergencySymptoms)
  }

  const emergencySymptomToString = (symptom: EmergencySymptom): string => {
    switch (symptom) {
      case EmergencySymptom.CHEST_PAIN:
        return t("self_screener.emergency_symptoms.chest_pain")
      case EmergencySymptom.DIFFICULTY_BREATHING:
        return t("self_screener.emergency_symptoms.difficulty_breathing")
      case EmergencySymptom.LIGHTHEADEDNESS:
        return t("self_screener.emergency_symptoms.lightheadedness")
      case EmergencySymptom.DISORIENTATION:
        return t("self_screener.emergency_symptoms.disorientation")
    }
  }

  return (
    <ScrollView>
      <GlobalText>
        {t("self_screener.emergency_symptoms.select_any")}
      </GlobalText>
      <SymptomCheckbox
        label={emergencySymptomToString(CHEST_PAIN)}
        onPress={() => updateEmergencySymptoms(CHEST_PAIN)}
        checked={emergencySymptoms.includes(CHEST_PAIN)}
      />
      <SymptomCheckbox
        label={emergencySymptomToString(DIFFICULTY_BREATHING)}
        onPress={() => updateEmergencySymptoms(DIFFICULTY_BREATHING)}
        checked={emergencySymptoms.includes(DIFFICULTY_BREATHING)}
      />
      <SymptomCheckbox
        label={emergencySymptomToString(LIGHTHEADEDNESS)}
        onPress={() => updateEmergencySymptoms(LIGHTHEADEDNESS)}
        checked={emergencySymptoms.includes(LIGHTHEADEDNESS)}
      />
      <SymptomCheckbox
        label={emergencySymptomToString(DISORIENTATION)}
        onPress={() => updateEmergencySymptoms(DISORIENTATION)}
        checked={emergencySymptoms.includes(DISORIENTATION)}
      />
      <Button
        label={t("common.next")}
        onPress={handleOnPressNext}
        hasRightArrow
      />
    </ScrollView>
  )
}

export default EmergencySymptomsQuestions
