export const TAGS = [
    "General",
    "Help",
    "Notice",
    "Important",
    "StudyGroup",
    "Hardware"
];

export const announcements = [
    {
        id: 'a1',
        tags: [TAGS[2], TAGS[3]], 
        timestamp: "2026-09-02T09:00:00Z",
        authorName: "Thanos", 
        content: "Friendly reminder! Project 1 submissions are strictly due on 4 September at 17h00.",
        id: 'a2',
        tags: [TAGS[1], TAGS[5]], 
        timestamp: "2026-09-03T14:30:00Z",
        authorName: "Shaka", 
        content: "Is anyone else having issues getting their STM32 microcontroller to interface with the OLED display in C? My state machine keeps freezing during the init sequence."
    },
    {
        id: 'a3',
        tags: [TAGS[4], TAGS[0]], 
        timestamp: "2026-09-04T10:15:00Z",
        authorName: "Shaka", 
        content: "We are forming a study group this weekend in the lab to go over Gaussian Mixture Models and Principal Component Analysis. Let me know if you want to join!"
    },
    {
        id: 'a4',
        tags: [TAGS[0]], // General
        timestamp: new Date().toISOString(),
        authorName: "Bruce", 
        content: "The building is burning!!! Just kidding, but someone did burn popcorn in the breakroom microwave again."
    }
];