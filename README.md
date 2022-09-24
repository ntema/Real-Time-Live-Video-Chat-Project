# Real-Time-Live-Video-Chat-Project



== Live Video Chat ==
Instructions to run the project:


Welcome to the implementation of video live streaming along with payment structure. 

#Info
There are two projects on this repository. This two projects are not linked to each other. 
Thus I have: 
1) A live video Chat Project and.
2) A payment system setup

This project has minimal UI design due to minimal given time for development, however the backend logic is excellent.
I have attached an API document for the payment system project for your review.

#Capabilities of payment section
Instant wallet creation on account signup
Authenticated route to carry out tansactions 
Ability to fund wallet
Ability to retrieve cash from wallet
Ability to send cash from wallet to another user(untested)


#Capabilities of live video section 
Ability to start a live video call session
Ability to have other users join your video session via ur unique url
N/B: To join a call session, simply paste your host unique url on your browser to participate
Ability to have up to 3 participants in your call
Ability to terminate call


#Technologies
Node js, Express, Javascript, HTML, CSS, EJS, WebRtc (peer), Webscokets (Socket.io)

#Installation
1 - clone repo https://github.com/ntema/Real-Time-Live-Video-Chat-Project.git and navigate to any of the project folder
2 - run npm install to install all dependencies
3 - run npm i -g peerjs seperately( only for live video chat)
4 - start the peerjs server with: peerjs --port 3001 ( only for live video chat)
5 - On the different terminal, seperate from the peerjs terminal, Get the project running with: npm run dev 
6 - On your browser: run localhost:3000 ( only for live video chat). For payment project, checkout the API documentation( https://documenter.getpostman.com/view/19932253/2s83KRi5oG) and follow suit using POSTMAN
