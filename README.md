# Overview
This projects implements a website to manange pc bookings at the Computer science honours lab. Students can identify themselves, reserve seating and easily
communicate with their peers.

## Features 
- **Secure Login System**: Validates email formats and authenticates credentials against dummy accounts.
- **Persistent Profile Page**: Displays personal details, avatars, and a question-and-answer section where users can answer, edit, and delete responses with changes saved via `localStorage`.
- **Lab Seating Grid**: Has a 70 seats layout, allowing users to reserve a single seat, relinquish reservations, view peer profiles, and keep layout changes persistent[cite: 1].
- **Announcements & Chat Feed**: Global chronological feed featuring author details, avatars, timestamps, and an automated scroll behavior to show the newest message on load and upon sending.
- **Announcement Tag System (Bonus)**: Filter announcements by specific tags or attach tags when publishing new messages.

## Build and Run
``` bash 
# dependencies 
npm install

# run 
npm run dev

# build
npm run build
```