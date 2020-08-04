db.users.insertMany([
        {
            "username": "test",
            "password": "test",
            "images": {
                "list": []
            },
            "appointments": {
                "list": [
                    {
                        "vet": "Johnny Reptiles",
                        "calendarData": {
                            "startDate": "2020-06-15T09:45",
                            "endDate": "2020-06-15T11:00",
                            "title": "Cat Check-Up"
                        }
                    },
                    {
                        "vet": "Sandy Fish",
                        "calendarData": {
                            "startDate": "2020-06-16T12:00",
                            "endDate": "2020-06-16T13:30",
                            "title": "Dog Vaccines"
                        }
                    }
                ]
            },
            "messages": {
                "contactList": [
                    {
                        "name": "Thiago Barroncas",
                        "avatar": "/resources/mock-avatar-3.jpg",
                        "msgHistory": [
                            {
                                "id": 1,
                                "from": "Thiago Barroncas",
                                "primary": "Nice to meet your snake",
                                "secondary": "The checkup went really well. Your little ball python is very healthy and happy.",
                                "person": "/resources/mock-avatar-3.jpg"
                            },
                            {
                                "id": 3,
                                "from": "Arnob Mukherjee",
                                "primary": "Thanks for the reminder",
                                "secondary": "We'll be there tomorrow.",
                                "person": "/resources/mock-avatar-1.jpg"
                            },
                            {
                                "id": 4,
                                "from": "Thiago Barroncas",
                                "primary": "Check up reminder",
                                "secondary": "Just a reminder you have a check up scheduled for your Ball Python tomorrow",
                                "person": "/resources/mock-avatar-3.jpg"
                            }
                        ]
                    },
                    {
                        "name": "Miyah Miles",
                        "avatar": "/resources/mock-avatar-2.jpg",
                        "msgHistory": [
                            {
                                "id": 3,
                                "from": "Miyah Miles",
                                "primary": "Reminder",
                                "secondary": "This is a reminder that Yoda, your kitten, is scheduled for an E-visit tomorrow. I'm looking forward to meeting him!",
                                "person": "/resources/mock-avatar-2.jpg"
                            }
                        ]
                    }
                ]
            }
        }
    ]
)