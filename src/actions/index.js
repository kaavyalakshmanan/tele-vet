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