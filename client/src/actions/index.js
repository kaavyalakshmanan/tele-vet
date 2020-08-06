// This file will contain actions used to change state
// See Workshop 2 slides for details

// GET RID OF THESE

export const updateAppointments = appointmentData => {
    return {
        type: 'UPDATE_APPOINTMENTS',
        appointmentData: appointmentData
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

export const editVetProfile = (stateInput) => {
    return {
        type: "EDIT_VET_PROFILE",
        profile: stateInput
    }
};


export * from "./users";
export * from "./vets";
export * from "./email";