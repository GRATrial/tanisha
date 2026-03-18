// Utility to generate specific Facebook profile data for Adeeb Khaja Mohamed
import { getFakeImageUrl } from './fakeImages';

export interface FacebookProfileData {
  name: string;
  friends: string;
  photos: number;
  posts: Array<{
    author: string;
    authorAvatar: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
    shares?: number;
    image?: string;
  }>;
  about: {
    work?: string[];
    education?: string[];
    places?: string[];
    contact?: string;
    basic?: string[];
  };
  friendsList: Array<{
    name: string;
    avatar: string;
  }>;
  peopleYouMayKnow: Array<{
    name: string;
    avatar: string;
  }>;
}

export const generateFacebookProfile = (resultId: string): FacebookProfileData => {
  // If it's the specific Adeeb result, return exact data from screenshot
  if (resultId === 'adeeb1' || resultId === 'adeeb2' || resultId === 'adeeb3' || resultId.includes('adeeb')) {
    return {
      name: 'Adeeb Khaja Mohamed',
      friends: '31 friends',
      photos: 45,
      posts: [
        {
          author: 'Adeeb Khaja Mohamed',
          authorAvatar: 'adeeb-avatar',
          time: '5mo',
          content: '',
          likes: 90,
          comments: 15,
          image: 'adeeb-stranger-things' // Reference to the image in screenshot
        },
        {
          author: 'Adeeb Khaja Mohamed',
          authorAvatar: 'adeeb-avatar',
          time: '11 April 2002',
          content: 'Born on 11 April 2002',
          likes: 45,
          comments: 2,
          shares: 0
        }
      ],
      about: {
        work: ['Graduate Research Assistant at George Mason University'],
        education: ['George Mason University'],
        places: ['Washington D.C.'],
        basic: ['Born on April 11, 2002']
      },
      friendsList: [
        { name: 'Sarmad Talpur', avatar: 'sarmad' },
        { name: 'Mohammed Sajeed', avatar: 'mohammed' },
        { name: 'Emily Pan', avatar: 'emily' },
        { name: 'Saif Ali Khan', avatar: 'saif' },
        { name: 'Aryan Oberoi', avatar: 'aryan' },
        { name: 'Rayyan S Rnz', avatar: 'rayyan' },
        { name: 'Chirag Pm', avatar: 'chirag' },
        { name: 'Hammad Feroz', avatar: 'hammad' },
        { name: 'Ajay Kumar G', avatar: 'ajay' }
      ],
      peopleYouMayKnow: [
        { name: 'Person 1', avatar: 'p1' },
        { name: 'Person 2', avatar: 'p2' },
        { name: 'Person 3', avatar: 'p3' },
        { name: 'Person 4', avatar: 'p4' },
        { name: 'Person 5', avatar: 'p5' }
      ]
    };
  }

  // Tanisha Jefferson - Financial Analyst (Hiking, brunch, pets)
  if (resultId === 'tanisha2' || resultId.includes('tanisha')) {
    return {
      name: 'Tanisha Jefferson',
      friends: '380 friends',
      photos: 142,
      posts: [
        {
          author: 'Tanisha Jefferson',
          authorAvatar: 'tanisha-avatar',
          time: '2d',
          content: 'Sunday brunch with the best crew! 🥐☕ Nothing beats good food and great conversation.',
          likes: 112,
          comments: 15,
          shares: 4,
          image: 'brunch'
        },
        {
          author: 'Tanisha Jefferson',
          authorAvatar: 'tanisha-avatar',
          time: '5d',
          content: 'Morning hike at Starved Rock State Park. The fall colors are absolutely stunning! Nature never fails to recharge me.',
          likes: 156,
          comments: 22,
          shares: 7,
          image: 'hiking'
        },
        {
          author: 'Tanisha Jefferson',
          authorAvatar: 'tanisha-avatar',
          time: '1w',
          content: 'My little fur baby being adorable as always. How can you resist that face? 🐕',
          likes: 203,
          comments: 31,
          shares: 2,
          image: 'dog'
        }
      ],
      about: {
        work: ['Financial Analyst at Great Lakes Financial Services'],
        education: ['University of Michigan'],
        places: ['Chicago, Illinois'],
        basic: ['Born on June 22, 1997']
      },
      friendsList: [
        { name: 'Emma Johnson', avatar: 'emma' },
        { name: 'Sophie Williams', avatar: 'sophie' },
        { name: 'Olivia Brown', avatar: 'olivia' },
        { name: 'Grace Martinez', avatar: 'grace' },
        { name: 'Lily Anderson', avatar: 'lily' },
        { name: 'Chloe Taylor', avatar: 'chloe' },
        { name: 'Maya Davis', avatar: 'maya' },
        { name: 'Ava Garcia', avatar: 'ava' },
        { name: 'Zoe Rodriguez', avatar: 'zoe' }
      ],
      peopleYouMayKnow: [
        { name: 'Rachel Green', avatar: 'rachel' },
        { name: 'Jessica White', avatar: 'jessica' },
        { name: 'Amanda Lee', avatar: 'amanda' },
        { name: 'Nicole Kim', avatar: 'nicole' },
        { name: 'Michelle Park', avatar: 'michelle' }
      ]
    };
  }

  // Tanisha Jefferson - Financial Analyst (Books, fitness, friends)
  // Fallback for Tanisha Jefferson
  return {
    name: 'Tanisha Jefferson',
    friends: '380 friends',
    photos: 142,
    posts: [
      {
        author: 'Tanisha Jefferson',
        authorAvatar: 'tanisha-avatar',
        time: '2d',
        content: 'Sunday brunch with the best crew! 🥐☕ Nothing beats good food and great conversation.',
        likes: 112,
        comments: 15,
        shares: 4,
        image: 'brunch'
      }
    ],
    about: {
      work: ['Financial Analyst at Great Lakes Financial Services'],
      education: ['University of Michigan'],
      places: ['Chicago, Illinois']
    },
    friendsList: [
      { name: 'Emma Johnson', avatar: 'emma' },
      { name: 'Sophie Williams', avatar: 'sophie' },
      { name: 'Olivia Brown', avatar: 'olivia' }
    ],
    peopleYouMayKnow: [
      { name: 'Rachel Green', avatar: 'rachel' },
      { name: 'Jessica White', avatar: 'jessica' },
      { name: 'Amanda Lee', avatar: 'amanda' }
    ]
  };
};
