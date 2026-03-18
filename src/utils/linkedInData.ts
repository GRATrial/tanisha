// Utility to generate specific LinkedIn profile data for Adeeb Khaja Mohamed
import { getFakeImageUrl } from './fakeImages';

export interface LinkedInProfileData {
  name: string;
  headline: string;
  location: string;
  link: string;
  followers: string;
  connections: string;
  about?: string;
  analytics: {
    profileViews: number;
    postImpressions: number;
    searchAppearances: number;
  };
  activity: Array<{
    type: 'post' | 'comment';
    content: string;
    likes: number;
    comments: number;
    time: string;
    image?: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    location?: string;
    logo?: string;
    description?: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    field?: string;
    years?: string;
  }>;
  skills: string[];
  suggestedProfiles: Array<{
    name: string;
    title: string;
    company: string;
    seed: string;
  }>;
}

export const generateLinkedInProfile = (resultId: string): LinkedInProfileData => {
  // Tanisha Jefferson - Financial Analyst
  if (resultId === 'tanisha6' || resultId.includes('tanisha')) {
    return {
      name: 'Tanisha Jefferson',
      headline: 'Financial Analyst | Investment Research & Market Analysis',
      location: 'Chicago, Illinois, United States · Contact info',
      link: 'https://linkedin.com/in/tanishajefferson',
      followers: '280',
      connections: '320+',
      about: 'Dedicated Financial Analyst focused on investment research and market analysis. I excel at analyzing financial data, identifying market trends, and developing strategic investment recommendations. My approach combines quantitative analysis with a deep understanding of market dynamics to help clients make informed investment decisions. I am committed to continuous learning and staying abreast of evolving market conditions.',
      analytics: {
        profileViews: 38,
        postImpressions: 95,
        searchAppearances: 22
      },
      activity: [
        {
          type: 'post',
          content: 'Just wrapped up an insightful analysis on emerging market trends. The data tells a fascinating story about consumer behavior shifts.',
          likes: 54,
          comments: 6,
          time: '3w',
        },
        {
          type: 'post',
          content: 'Weekend hike in the mountains - sometimes the best ideas come when you step away from the spreadsheets!',
          likes: 89,
          comments: 12,
          time: '1mo',
          image: 'hiking'
        }
      ],
      experience: [
        {
          title: 'Financial Analyst',
          company: 'Great Lakes Financial Services · Full-time',
          duration: 'Mar 2020 - Present · 4 yrs 11 mos',
          location: 'Chicago, Illinois, United States · On-site',
          description: [
            'Perform in-depth financial analysis and create models for investment decision-making',
            'Research and analyze market conditions, industry trends, and company financials',
            'Develop investment recommendations based on quantitative and qualitative analysis',
            'Prepare comprehensive reports and presentations for management and clients'
          ]
        },
        {
          title: 'Junior Financial Analyst',
          company: 'North Shore Capital Partners · Full-time',
          duration: 'Jul 2019 - Feb 2020 · 8 mos',
          location: 'Chicago, Illinois, United States · On-site',
          description: [
            'Supported senior analysts with financial modeling and data analysis',
            'Assisted in preparing quarterly earnings reports and market research',
            'Maintained financial databases and updated investment tracking systems'
          ]
        }
      ],
      education: [
        {
          school: 'University of Michigan',
          degree: 'Bachelor of Business Administration - BBA',
          field: 'Finance',
          years: '2015 - 2019'
        }
      ],
      skills: ['Financial Analysis', 'Financial Modeling', 'Excel', 'SQL', 'Investment Research', 'Market Analysis', 'Data Analysis', 'PowerPoint'],
      suggestedProfiles: [
        { name: 'Emily Johnson', title: 'Financial Analyst | Equity Research', company: '2nd', seed: 'emily' },
        { name: 'Robert Martinez', title: 'Senior Financial Analyst | Investment Strategy', company: '2nd', seed: 'robert' },
        { name: 'Amanda White', title: 'Investment Analyst | Portfolio Management', company: '3rd+', seed: 'amanda' },
        { name: 'James Wilson', title: 'Financial Analyst | Risk Analysis', company: '3rd+', seed: 'james' },
        { name: 'Rachel Brown', title: 'Associate Financial Analyst | Corporate Finance', company: '3rd+', seed: 'rachel' }
      ]
    };
  }

  // Tanisha Jefferson - Financial Analyst (alternate profile)
  if (resultId === 'tanisha1' || resultId.includes('tanisha')) {
    return {
      name: 'Tanisha Jefferson',
      headline: 'Financial Analyst | Investment Analysis & Strategic Planning',
      location: 'Chicago, Illinois, United States · Contact info',
      link: 'https://linkedin.com/in/tanishajefferson',
      followers: '420',
      connections: '380+',
      about: 'Results-driven Financial Analyst specializing in investment analysis and strategic planning. With expertise in financial modeling, portfolio management, and market research, I help organizations make data-driven investment decisions. I am passionate about combining analytical rigor with strategic thinking to deliver comprehensive financial insights. Always eager to explore new investment opportunities and contribute to long-term financial success.',
      analytics: {
        profileViews: 52,
        postImpressions: 145,
        searchAppearances: 31
      },
      activity: [
        {
          type: 'post',
          content: 'Just finished reading an excellent book on behavioral finance. Always looking to expand my understanding of market psychology and investor behavior.',
          likes: 73,
          comments: 9,
          time: '1w',
        },
        {
          type: 'post',
          content: 'Morning workout complete! Staying active helps me stay sharp for the day ahead. #FitnessGoals',
          likes: 98,
          comments: 15,
          time: '2w',
          image: 'fitness'
        }
      ],
      experience: [
        {
          title: 'Financial Analyst',
          company: 'Chicago Financial Group · Full-time',
          duration: 'Aug 2019 - Present · 5 yrs 6 mos',
          location: 'Chicago, Illinois, United States · On-site',
          description: [
            'Lead financial analysis projects and develop investment strategies for client portfolios',
            'Create detailed financial models and forecasts to support investment decisions',
            'Analyze market trends, economic indicators, and company performance metrics',
            'Present findings and recommendations to senior management and clients'
          ]
        },
        {
          title: 'Financial Analyst Intern',
          company: 'Lakefront Investment Advisors · Internship',
          duration: 'May 2018 - Aug 2018 · 4 mos',
          location: 'Chicago, Illinois, United States · On-site',
          description: [
            'Assisted in financial data analysis and report preparation',
            'Supported investment research team with market analysis',
            'Participated in client meetings and learned investment advisory processes'
          ]
        }
      ],
      education: [
        {
          school: 'University of Michigan',
          degree: 'Bachelor of Business Administration - BBA',
          field: 'Finance',
          years: '2015 - 2019'
        }
      ],
      skills: ['Financial Analysis', 'Financial Modeling', 'Excel', 'Python', 'Investment Analysis', 'Strategic Planning', 'Data Visualization', 'Tableau'],
      suggestedProfiles: [
        { name: 'Jessica Taylor', title: 'Financial Analyst | Investment Research', company: '2nd', seed: 'jessica' },
        { name: 'Christopher Lee', title: 'Senior Financial Analyst | Portfolio Strategy', company: '2nd', seed: 'christopher' },
        { name: 'Nicole Anderson', title: 'Investment Analyst | Equity Research', company: '3rd+', seed: 'nicole' },
        { name: 'Kevin Davis', title: 'Financial Analyst | Risk Management', company: '3rd+', seed: 'kevin' },
        { name: 'Michelle Garcia', title: 'Associate Financial Analyst | Corporate Finance', company: '3rd+', seed: 'michelle' }
      ]
    };
  }

  // Fallback for Tanisha Jefferson
  return {
    name: 'Tanisha Jefferson',
    headline: 'Financial Analyst | Investment Research & Market Analysis',
    location: 'Chicago, Illinois, United States · Contact info',
    link: 'https://linkedin.com/in/tanishajefferson',
    followers: '280',
    connections: '320+',
    about: 'Dedicated Financial Analyst focused on investment research and market analysis.',
    analytics: { profileViews: 38, postImpressions: 95, searchAppearances: 22 },
    activity: [],
    experience: [],
    education: [],
    skills: ['Financial Analysis', 'Financial Modeling', 'Excel', 'SQL', 'Investment Research', 'Market Analysis', 'Data Analysis', 'PowerPoint'],
    suggestedProfiles: []
  };
};

export const getCompanyLogoUrl = (company: string, size: number = 40) => {
  const domainMap: Record<string, string> = {
    'George Mason University': 'gmu.edu',
    'University of Michigan': 'umich.edu',
    'Midwest Capital Advisors': 'midwestcapital.com',
    'Great Lakes Financial Services': 'greatlakesfinancial.com',
    'Chicago Financial Group': 'chicagofinancial.com',
    'Microsoft': 'microsoft.com',
    'Amazon': 'amazon.com',
    'Google': 'google.com',
    'Apple': 'apple.com',
    'Meta': 'meta.com',
    'Salesforce': 'salesforce.com',
    'Oracle': 'oracle.com',
    'IBM': 'ibm.com',
    'Deloitte': 'deloitte.com'
  };
  
  const domain = domainMap[company] || 'linkedin.com';
  return `https://logo.clearbit.com/${domain}?size=${size}`;
};
