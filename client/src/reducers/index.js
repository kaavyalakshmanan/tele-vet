import { combineReducers } from 'redux';

const initialUser = {
    "isAuthenticated": false,
    "isFetching": true,
    "didInvalidate": true,
    "email": "UserDashboard@test.com",
    "username": "testUser",
    "password": "test",
    "profilePicture": "http://localhost:3000/resources/woman.png",
    "lastUpdated": "",
    "images": [],
    "appointments": [],
    "messages": [],
    "documents": []
}

const initialLoggedInVet = {
    "_id": 0,
    "coverPhoto":'',
    "username":'',
    "firstname":'',
    "lastname":'',
    "description":'',
    "email":'',
    "businessName":'',
    "profilePicture":'',
    "pictures":[],
    "reviews":[],
    "rating": 0,
    "facebook":'',
    "twitter":'',
    "geometry":{}
}

const initialAppointments = {
    apptList: [
        {
            text: 'Dog Check Up',
            startDate: new Date(2020, 6, 22, 9, 30),
            endDate: new Date(2020, 6, 22, 11, 30)
        }, {
            text: 'Cat Check Up',
            startDate: new Date(2020, 6, 22, 12, 0),
            endDate: new Date(2020, 6, 22, 13, 0),
            allDay: true
        }
    ]
}

const initialImages = {
    list: [
        {
            file: {
                src : "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            title: "Title",
            description: "Something about your image"
        },
        {
            file: {
                src: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            title: "Title",
            description: "Something about your image"
        },
        {
            file : {
                src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            title: "Title",
            description: "Something about your image"
        },
        {
            file: {
                src: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
            title: "Title",
            description: "Something about your image"
        },
        {
            file: {
                src: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            title: "Title",
            description: "Something about your image"
        }
    ]
}

// TODO: We need to decide how we are going to store Messages
// TODO: Add a timestamp to Messages
const initialContacts = {
    contactList: [
        {
            name: "Thiago Barroncas",
            avatar: "/resources/mock-avatar-3.jpg",
            msgHistory: [
                {
                    id: 1,
                    from: "Thiago Barroncas",
                    primary: 'Nice to meet your snake',
                    secondary: "The checkup went really well. Your little ball python is very healthy and happy.",
                    person: "/resources/mock-avatar-3.jpg",
                },
                {
                    id: 3,
                    from: "Arnob Mukherjee",
                    primary: 'Thanks for the reminder',
                    secondary: `We'll be there tomorrow.`,
                    person: "/resources/mock-avatar-1.jpg",
                },
                {
                    id: 4,
                    from: "Thiago Barroncas",
                    primary: 'Check up reminder',
                    secondary: 'Just a reminder you have a check up scheduled for your Ball Python tomorrow',
                    person: "/resources/mock-avatar-3.jpg",
                },

            ]
        },
        {
            name: "Miyah Miles",
            avatar: "/resources/mock-avatar-2.jpg",
            msgHistory: [
                {
                    id: 3,
                    from: "Miyah Miles",
                    primary: 'Reminder',
                    secondary: `This is a reminder that Yoda, your kitten, is scheduled for an E-visit tomorrow.
                        I'm looking forward to meeting him!`,
                    person: "/resources/mock-avatar-2.jpg",
                }
            ]
        }
    ]
}

const initialProfiles = [{
    firstName: "Jane",
    lastName: "McDouglas",
    username: "Dr. McDoggy",
    businessAddress: "2207 12th ave west, Vancouver",
    website: "www.doggyClinic.com",
    acceptEmergency:"true",
    sundayOpen: "8h00",
    sundayClose: "20h00",
    mondayOpen: "8h00",
    mondayClose: "20h00",
    tuesdayOpen: "8h00",
    tuesdayClose: "20h00",
    wednesdayOpen: "8h00",
    wednesdayClose: "20h00",
    thursdayOpen: "8h00",
    thursdayClose: "20h00",
    fridayOpen: "8h00",
    fridayClose: "20h00",
    saturdayOpen: "8h00",
    saturdayClose: "20h00",
}];

const userReducer = (user = initialUser, action) => {
    switch(action.type) {
        case 'RECEIVE_USER':
            return Object.assign({}, action.user, {
                isAuthenticated: true,
                lastUpdated: Date.now(),
                isFetching: false,
                didInvalidate: false
            });
        case 'REQUEST_USER':
            return Object.assign({}, user, {
                isAuthenticated: true,
                isFetching: true,
                didInvalidate: false
            });
        case 'INVALIDATE_USER':
            return initialUser
        default:
            return user
    }
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

const userDashboardViewReducer = (view = '', action) => {
    if (action.type === 'SET_USER_DASHBOARD_VIEW') {
        return action.view;
    }
    return view;
}

const imageReducer = (images = initialImages, action) => {
    if (action.type === 'ADD_IMAGE') {
        return {
            list: images.list.concat({
                file: {
                    src: action.image.file.src,
                },
                title: action.image.title,
                description: action.image.description
            })
        }
    }
    if (action.type === 'EDIT_IMAGE') {
        let newList = [];
        images.list.forEach((img) => {
            if (img.file.src === action.image.file.src) {
                newList.push(action.image);
            } else {
                newList.push(img);
            }
        });
        return {
            list: newList
        };
    }
    if (action.type === 'DELETE_IMAGE') {
        return {
            list: images.list.filter(img => img.file.src !== action.image.file.src)
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
    if (action.type === 'ADD_MESSAGE') {
        let newContacts = {contactList:[]};
        contacts.contactList.forEach((contact) => {
            if (contact.name === action.message.from) {
                contact.msgHistory.unshift(action.message);
            }
            newContacts.contactList.push(contact);
        });
        return newContacts;
    }
    return contacts;
}

const profileReducer = (profiles = initialProfiles, action) => {
    if (action.type === "EDIT_VET_PROFILE") {
        return profiles.push(action.payload)
    }
    return profiles
}

const vetListReducer = (vetList = [], action) => {
    if (action.type === 'UPDATE_VET_LIST') {
        return action.vetList;
    }
    return vetList;
}

const loggedInVetReducer = (vet = initialLoggedInVet, action) => {
    if (action.type === 'RECEIVE_VET') {
        return action.vet;
    }
    return vet;
}

export default combineReducers({
    user: userReducer,
    appointmentData: appointmentReducer,
    navBarHidden: navBarReducer,
    userDashboardView: userDashboardViewReducer,
    userDashboardSidebarOpen: userDashboardViewReducer,
    images: imageReducer,
    inbox: inboxReducer,
    contacts: contactReducer,
    profiles: profileReducer,
    vetList: vetListReducer,
    loggedInVet: loggedInVetReducer
});