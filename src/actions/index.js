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

export const setPhotoDropzoneOpen = open => {
    return {
        type: 'SET_DROPZONE_OPEN',
        open: open
    }
}

export const addImage = image => {
    return {
        type: 'ADD_IMAGE',
        image: image
    }
}

export const editImage = image => {
    return {
        type: 'EDIT_IMAGE',
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

export const editVetProfile = (stateInput) => {
    return {
        type: "EDIT_VET_PROFILE",
        profile: stateInput
    }
};