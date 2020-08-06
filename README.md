# Tele-Vet

## Who are we?

- Kaavya: R2Q7
- Amy: U5X9A
- Francois: J1H1B
- Nick: T9F2B

## Description of App:

Tele-Vet is a tele-health web app designed to connect vets with their furry patients. A user can view vet profile pages by location, upload relevant documents (images, text files, etc), and video conference with a vet.

## What will our app do?

It will connect vets and pet owners virtually with video conferencing and messaging.


## What type of data will we store on MongoDB?

We will store patient profile data: 
Pet Owners:
- [x] Name
- [x] Authetication info
- [x] Email address
- [x] Password
- [x] Images
- [x] Appointments
- [x] Message History
- [x] Documents

Vets:
- [x] Vet name
- [x] Clinic name
- [x] Clinic location & address
- [x] Uploaded images of the clinic or staff
- [x] Cover photo, profile picture, staff & pet pictures
- [x] Vet profiles
- [x] Email
- [x] Rating
- [x] Facebook & Twitter
- [x] Username
- [ ] Some certificate proving the vet is real
- [ ] Message history
- [ ] Prescription history etc

## What will users be able to do with the data?

Pet owners can view vet clinics by location or profile. Within this, they can view ratings and contact information. Users can also upload images of their pets, and book an appointment with a vet. 
Vets can upload images, fill out their availability for users to book, and start video conferencing.

## Minimal Requirements
- [x] Database storage
- [x] User and vet accounts
- [x] External log-in manager
- [x] Search for vets by user's location
- [x] Google Maps API integration
- [x] Users can view a vet's availability

## Standard Requirements
- [x] Upload images
- [x] Book an appointment with a vet
- [x] Vets can select their availability in their calendar
- [x] Video conferencing
- [x] Realtime messaging between patients and vets
- [ ] Send and receive private messages, images, and docs to a message inbox
- View message log history with vets
- Receive a summary of the appointment from the vet
- Send notes and prescriptions
- View patient uploaded images
- View existing patient files

## Stretch Requirements
- [x] User authentication
- [ ] Receive prescriptions from the vet that can be downloaded as a pdf for printing and collecting
- [ ] Integrate booking with external calendars (google Cal, Outlook, Apple Cal)
- [ ] Payment integration
- [ ] Undergo a pre-screening using a chatbot to indicate the level of urgency and preliminary info
- [ ] Vets can view preliminary info on patients from pre-screening

## Breakdown of minimal requirements
- [x] Database Storage
    1. Set up a database
    2. Create a REST service in the backend that will provide endpoints for accessing the database, so we can access the
        data with frontend AJAX requests.

- [x] External log-in manager
    1. Choose an Oauth2.0 provider (Auth0 is free for up to 7k users https://auth0.com/). We don't want to manage this ourselves.
    2. Set up account (details depend on provider).
    3. Integrate into web app.

## Prototypes

![initialSketches](public/resources/prototypes/sketches.jpg)
![initialSketches2](public/resources/prototypes/sketches2.jpg)
