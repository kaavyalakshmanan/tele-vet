# Tele-Vet

https://tele-vet.herokuapp.com/


## Who we are:

[Kaavya](https://www.linkedin.com/in/kaavlaks/): R2Q7
 - Worked on: 
   - Implemented user authentication
   - Created the login and registration pages
   - Incorporated JWS & Bcryptjs
   - Helped create user dashboard
   - Debugged many features/components
   - Kept team on track with deliverables during meetings
   - Took minutes during all meetings
   - Contributed to code refactoring and clean up 
   - Helped deploy to Heroku

[Amy](https://www.linkedin.com/in/amy-george-ubc/): U5X9A
 - Worked on:
   - Google Maps API integration
   - Built the maps display component
   - Added markers with vet info and ratings
   - Pulled json data for local vets from Google maps API
   - Centered map to user location
   - Supported team with documentation and testing
   - Helped debug Heroku deployment
   - Wrote biweekly scrum reports
   - Set up the MongoDB database
   
[Francois](https://www.linkedin.com/in/charettefrancois/): J1H1B
 - Worked on:
   - Implemented the video conferencing components
   - Built the user/vet appointment booking system
   - Helped with the API, including the collection models
   - Defined the project using wireframes and flow maps
   - Designed the vet profile page 
   
[Nick](https://www.linkedin.com/in/nipeters/): T9F2B
 - Worked on:
   - Created the user dashboard
   - Built landing page and refactored the vet profile page
   - Designed and wrote the redux/thunk state control flow
   - Assisted with implementing and debugging user authentication
   - Refactored maps to pull vet profiles from the database
   - Assisted in designing the user endpoints in the api


## What our app does:

Tele-Vet is a virtual health care web-app that connects vets with their furry patients. A user can view vet profiles by location rating or by proximity to the user. Users can also upload relevant documents to their pet's care (images, text files, etc), book an appointment and video conference with a vet to get the care they need, even during a global pandemic.


## What type of data we store on MongoDB:

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

## What users cando with the data:

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


## Tech from Units 1 - 5:
1. HTML/CSS/JS:
On frontend was built with React, we used the html, css, and Javascript from workshop 1 as a foundation for creating and styling our components. This workshop was primarily important in understanding how to style components. We primarily used React hooks to style, but this is very similar to traditional CSS.
2. REACT/REDUX:
This was one of the most important workshops for us. Our frontend is built with React and we use Redux to manage state. The three most important state objects are the current user, current vet, and the vet list.
3. MongoDB:
Tele-Vet uses a MongoDB Atlas cloud database to store pet owner and vet information. We have two collections. The vet collection stores a list of vet objects, each that represent a single vet that has "registered" for our service. Users can view these vets on the find a vet page. The user collection stores a list of user objects. Each user can log in, view vets and upload photos and documents about their pets.
4. Node & Express:
Our backend API is an express server written in Node. We use Thunk to make api calls and then use the api to communicate with our database.
5. Release Engineering: Our App is deployed on Heroku at https://tele-vet.herokuapp.com/. Achieving this task required rafactoring our app directory structure and a fair amount of debugging.

## Next steps:
There are two features that we would like to include in future iterations of Tele-Vet. Messaging is the big feature that we were not able to implement. It would serve as another channel for an authenticated vet to communicate with users. 

The second feature we would like to add is the ability for a vet to be properly authenticated at login. We felt that having two types of authenticated users went a bit above and beyond the scope of this course and we are excited to add it in the next steps.
