import { combineReducers } from 'redux';

const initialAppointments = {
    apptList: [
        {
            vet: "Johnny Reptiles",
            calendarData:
            {
                startDate: '2020-06-15T09:45',
                endDate: '2020-06-15T11:00',
                title: 'Cat Check-Up'
            }
        },
        {
            vet: "Sandy Fish",
            calendarData:
            {
                startDate: '2020-06-16T12:00',
                endDate: '2020-06-16T13:30',
                title: 'Dog Vaccines'
            }
        }
    ]
}

const initialImages = {
    list: [
        {
            src: "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 4,
            height: 3
        },
        {
            src: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        },
        {
            src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        },
        {
            src: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        },
        {
            src: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        }
    ]
}

// TODO: We need to decide how we are going to store messages
// TODO: Add a timestamp to messages
const initialContacts = {
    contactList: [
        {
            name: "Thiago Barroncas",
            avatar: "/resources/mock-avatar-3.jpg",
            msgHistory: [
                {
                    id: 1,
                    primary: 'Nice to meet your snake',
                    secondary: "The checkup went really well. Your little ball python is very healthy and happy.",
                    person: "/resources/mock-avatar-3.jpg",
                },
                {
                    id: 3,
                    primary: 'Thanks for the reminder',
                    secondary: `We'll be there tomorrow.`,
                    person: "/resources/mock-avatar-1.jpg",
                },
                {
                    id: 4,
                    primary: 'Check up reminder',
                    secondary: 'Just a reminder you have a check up scheduled for your Ball Python tomorrow',
                    person: "/resources/mock-avatar-3.jpg",
                },

            ]
        },
        {
            name: "Miyah Miles",
            avatar: "/resources/mock-avatar-2.jpg",
            msgHistory: []
        }
    ]
}

const appointmentReducer = (appointments = initialAppointments, action) => {
    if (action.type === 'UPDATE_APPOINTMENTS') {
        return action.appointmentData;
    }
    return appointments;
}

const navBarReducer = (hidden = false, action) => {
    if (action.type === 'HIDE_NAVBAR') {
        return action.hidden;
    }
    return hidden;
}

const userDashboardViewReducer = (view = 'Inbox', action) => {
    if (action.type === 'SET_USER_DASHBOARD_VIEW') {
        return action.view;
    }
    return view;
}

const userPhotosReducer = (open = false, action) => {
    if (action.type === 'SET_DROPZONE_OPEN') {
        return action.open;
    }
    return open;
}

const imageReducer = (images = initialImages, action) => {
    if (action.type === 'ADD_IMAGE') {
        // TODO: Make an AJAX request to server, store image in database
        // TODO: Get path for Image
        return {
            list: images.list.concat({
                src: '/resources/' + action.image.path,
                height: 2,
                width: 2
            })
        }
    }
    return images;
}

const inboxReducer = (inbox = null, action) => {
    if (action.type === 'SELECT_INBOX') {
        return action.inbox;
    }
    return inbox;
}

const contactReducer = (contacts = initialContacts, action) => {
    if (action.type === 'ADD_CONTACT') {
        return contacts.concat(action.contact);
    }
    return contacts;
}

export default combineReducers({
    appointmentData: appointmentReducer,
    navBarHidden: navBarReducer,
    userDashboardView: userDashboardViewReducer,
    userDashboardSidebarOpen: userDashboardViewReducer,
    images: imageReducer,
    photoDropzoneOpen: userPhotosReducer,
    inbox: inboxReducer,
    contacts: contactReducer
});