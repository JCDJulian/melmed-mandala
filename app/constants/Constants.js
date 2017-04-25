export const WEDGES = ["Family Life",
"Relationships",
"Spirituality",
"Finances",
"Organization",
"Medical",
"Work",
"Social Skills",
"Exercise",
"Diet"
]

export const WEDGE_QUESTIONS = {
  "Family Life": {
    name: "Family Life",
    rating: 5,
    questions: [
      {
        id: 1,
        text: "I struggle to find quality time with my family.",
        rating: 5
      },
      {
        id: 2,
        text: "I feel like my home life is disorganized and chaotic",
        rating: 3
      }
    ]
  },
  "Relationships": {
    name: "Relationships",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I wish I had more support from people I care about.",
        rating: 2
      },
      {
        id: 2,
        text: "I struggle to find quality time for people I care about.",
        rating: 1
      }
    ]
  },
  "Spirituality": {
    name: "Spirituality",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "Spirituality is important to me",
        rating: 2
      },
      {
        id: 2,
        text: "I have a spiritual or mindfulness practice I use in difficult times.",
        rating: 1
      }
    ]
  },
  "Finances": {
    name: "Finances",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I feel like I need a budget, but don't have one.",
        rating: 2
      },
      {
        id: 2,
        text: "My finances cause stress in my life.",
        rating: 1
      }
    ]
  },
  "Organization": {
    name: "Organization",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I struggle with time management.",
        rating: 2
      },
      {
        id: 2,
        text: "I feel like my life is more chaotic than others.",
        rating: 1
      }
    ]
  },
  "Medical": {
    name: "Medical",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I have physical health problems I have not sought help for.",
        rating: 2
      },
      {
        id: 2,
        text: "I wish I consumed less caffeine, alcohol, or cigarettes.",
        rating: 1
      }
    ]
  },
  "Work": {
    name: "Work",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I feel like my job or profession doesn't match my skills.",
        rating: 2
      },
      {
        id: 2,
        text: "I have a hard time staying motivated at work.",
        rating: 1
      }
    ]
  },
  "Social Skills": {
    name: "Social Skills",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I have trouble communicating my thoughts or feelings with people.",
        rating: 2
      },
      {
        id: 2,
        text: "I do not feel comfortable in social situations",
        rating: 1
      }
    ]
  },
  "Exercise": {
    name: "Exercise",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I have difficulty getting enough exercise.",
        rating: 2
      },
      {
        id: 2,
        text: "I have concerns about my weight.",
        rating: 1
      }
    ]
  },
  "Diet": {
    name: "Diet",
    rating: 9,
    questions: [
      {
        id: 1,
        text: "I have a hard time deciding what to eat on a daily basis.",
        rating: 2
      },
      {
        id: 2,
        text: "I don't think I get enough fruit, vegetables, protein, or grains on a daily basis.",
        rating: 1
      }
    ]
  }
}

export const WEDGE_DATA = {
  "Family Life": {
    mainImage: "'../../images/components/family.jpeg'",
    recs: [
      {
        id: 0,
        name: "Family Counseling",
        detail: "Consider scheduling an appointment with a family counselor to discuss any tension in your home life.",
        recImage: "../../images/components/family.jpeg"
      },
      {
        id: 1,
        name: "Schedule Family Time",
        detail: "Consider scheduling specific time in your calendar to visit with family.",
        recImage: "../../images/components/family.jpeg"
      },
      {
        id: 2,
        name: "Have a Family Meeting",
        detail: "Plan time to talk about both the good aspects of your home life and areas to improve.",
        recImage: "../../images/components/family.jpeg"
      }
    ]
  },
  "Relationships": {
    mainImage: "'../../images/components/relationship.jpeg'",
    recs: [
      {
        id: 0,
        name: "Talk to Your Partner",
        detail: "Speak honestly with your partner about any tension in your relationship.",

      },
      {
        id: 1,
        name: "Couple's Therapy",
        detail: "A couples' therapist may help you identify where you can improve communication with your partner."
      }
    ]
  },
  "Spirituality": {
    mainImage: "'../../images/components/spirituality.jpeg'",
    recs: [
      {
        id: 0,
        name: "Talk to Your Spiritual Leader",
        detail: "If you are spiritual, talking to your priest, minister, rabbi, or other spiritual leader can be very useful.",

      },
      {
        id: 1,
        name: "Explore Spiritual Options",
        detail: "Do some research about spiritual and mindful practices you might want to engage in."
      }
    ]
  },
  "Finances": {
    mainImage: "'../../images/components/finances.jpeg'",
    recs: [
      {
        id: 0,
        name: "Weekly Budget",
        detail: "Develop a weekly budget and work to follow it this week. There are online programs that can assist you.",

      },
      {
        id: 1,
        name: "Have a No-Spend Day",
        detail: "Pick one day a week where you won't spend any money. Pack your meals, have a night in, and pratice saving!"
      }
    ]
  },
  "Organization": {
    mainImage: "'../../images/components/organization.jpeg'",
    recs: [
      {
        id: 0,
        name: "Weekly Calendar",
        detail: "Commit to writing and following a calendar for one week. Online calendars or apps that remind you of your appointments can be very helpful.",

      },
      {
        id: 1,
        name: "Schedule Breaks",
        detail: "Pick an amount of time you think you can work without taking a break (10 minutes is a good start!). Set a stop watch for that time and work without taking a break until your alarm goes off."
      }
    ]
  },
  "Medical": {
    mainImage: "'../../images/components/medicine.jpeg'",
    recs: [
      {
        id: 0,
        name: "Medication Alarm",
        detail: "Schedule an alarm to go off daily as a reminder to take your medications",

      },
      {
        id: 1,
        name: "Schedule a Wellness Check",
        detail: "Even if you're feeling well, it is important to visit your doctor annual for a wellness check"
      }
    ]
  },
  "Work": {
    mainImage: "'../../images/components/work.jpeg'",
    recs: [
      {
        id: 0,
        name: "Do a Vocational Assessment",
        detail: "If you are unsure the type of career you would like, do a vocational assessment to gauge your strengths and interests. There are many available online.",

      },
      {
        id: 1,
        name: "Ask for More Responsibility",
        detail: "If you are bored at work, try asking your boss if there are opportunities to learn new tasks or take on more responsibility."
      }
    ]
  },
  "Social Skills": {
    mainImage: "'../../images/components/SocialSkills.jpeg'",
    recs: [
      {
        id: 0,
        name: "Try a New Activity",
        detail: "Many cities have inexpensive or free activities including dancing, painting, pottery, gardening and more. These activities are great places to meet new people and learn new skills!",

      },
      {
        id: 1,
        name: "Learn Your Communication Style",
        detail: "Find out if you are an aggressive, passive, or assertive communicator and learn some tips for better communication for each style.er4"
      }
    ]
  },
  "Exercise": {
    mainImage: "'../../images/components/exercise.jpeg'",
    recs: [
      {
        id: 0,
        name: "Make an Exercise Plan",
        detail: "Develop a plan to be more active - whether that means walking two days a week or hitting the gym every morning - and stick to it for at least a week.",

      },
      {
        id: 1,
        name: "Talk to a Personal Trainer",
        detail: "Chat with a personal trainer about your fitness goals. They can help you figure out your options and a safe and healthy plan."
      }
    ]
  },
  "Diet": {
    mainImage: "'../../images/components/nutrition.jpeg'",
    recs: [
      {
        id: 0,
        name: "Talk to a Dietician",
        detail: "Schedule a meeting with a dietician to discuss your current habits and tips for a healthier  lifestyle.",

      },
      {
        id: 1,
        name: "Cut the Caffeine",
        detail: "Challenge yourself  to one week without coffee, soda, energy drinks, or other caffeinated beverages."
      }
    ]
  }
}