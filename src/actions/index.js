// This will file will contain actions used to change state
// See Workshop 2 slides for details

export const updateAppointments = appointmentData => {
    return {
        type: 'UPDATE_APPOINTMENTS',
        appointmentData: appointmentData
    }
}

export const editVetProfile = (input1) => ({
    type: "EDIT_VET_PROFILE",
    payload: {
        firstName: "",
        lastName: "",
        username: "",
        businessAddress: "",
        website: "",
        openTimes: {
            sunday: "",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: "",
        },
        acceptEmergency: ""
    }
});