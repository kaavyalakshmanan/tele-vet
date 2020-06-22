// This will file will contain actions used to change state
// See Workshop 2 slides for details

export const updateAppointments = appointmentData => {
    return {
        type: 'UPDATE_APPOINTMENTS',
        appointmentData: appointmentData
    }
}

export const hideNavigation = hidden => {
    return {
        type: 'HIDE_NAVBAR',
        hidden: hidden
    }
}

export const setUserDashboardView = view => {
    return {
        type: 'SET_USER_DASHBOARD_VIEW',
        view: view
    }
}

export const addImage = image => {
    return {
        type: 'ADD_IMAGE',
        image: image
    }
}

export const deleteImage = image => {
    return {
        type: 'DELETE_IMAGE',
        image: image
    }
}

export const selectInbox = inbox => {
    return {
        type: 'SELECT_INBOX',
        inbox: inbox
    }
}

export const addMessage = message => {
    return {
        type: 'ADD_MESSAGE',
        message: message
    }
}

export const addContact = contact => {
    return {
        type: 'ADD_CONTACT',
        contact: contact
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