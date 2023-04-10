import {
  Acute,
  AllInclusive,
  CalendarMonth,
  CloudSync,
  HandDrawnArrow,
  InteractiveSpace,
  LocalConvenienceStore,
  Loyalty,
  Monitoring,
  Nutrition,
  PersonPinCircle,
  PersonSearch,
  RecordVoiceOver,
  Restaurant,
  TravelExplore,
  WatchScreentime,
} from "@/components/icons";
import { routes, Page, Section } from "./pageInfo";

const content = {
  global: {
    navbar: {
      logo: {
        link: routes[Page.HOME].page,
      },
      linkList: [
        {
          text: "Features",
          link: Section.FEATURES,
        },
        {
          text: "For Trainers & Gyms",
          link: Section.USERS,
        },
        {
          text: "Contact",
          link: routes[Page.CONTACT].page,
        },
      ],
      buttonLink: {
        title: "Sign Up",
        link: routes[Page.WAITLIST].page,
      },
    },
    footer: {
      copyright: `© FitSynth LLC, ${new Date().getFullYear()}`,
      emailAddress: "info@fitsynth.com",
      pageList: [],
      socialMediaList: [],
    },
    ctaBanner: {
      button: {
        title: "Join Waitlist",
        link: routes[Page.WAITLIST].page,
      },
      arrowIcon: HandDrawnArrow,
      caption: "no credit card required!",
    },
  },
  [Page.HOME]: {
    jumbotron: {
      title: "The Future of Fitness is Finally Here",
      description:
        "Click below to get in on the action before the general public.",
      button: {
        title: "Join Waitlist",
        link: routes[Page.CONTACT].page,
      },
    },
    features: {
      title: "Inside the FitSynth App",
      deviceMockup: "/device-mockup.png",
      featureList: [
        {
          icon: WatchScreentime,
          title: "Smartwatch Friendly",
          description:
            "Execute your workout on a phone, smartwatch, tablet, or browser.",
          image: "/mockup-home.jpg",
        },
        {
          icon: PersonSearch,
          title: "Find an Expert",
          description:
            "Get connected to licensed trainers and dietitians and/or a gym that truly fit your goals, lifestyle, and budget.",
          image: "/mockup-search.jpg",
        },
        {
          icon: AllInclusive,
          title: "Unlimited Workouts",
          description:
            "Create an unlimited number of custom workouts, absolutely free.",
          image: "/mockup-workout-preview.jpg",
        },
        {
          icon: Monitoring,
          title: "Enhanced Analytics",
          description:
            "Record heart rate, calories, and time throughout your workout.",
          image: "/mockup-results.jpg",
        },
        {
          icon: Restaurant,
          title: "Meal Planning",
          description:
            "Keep track of your diet goals with cookbooks and recipes.",
          image: "/mockup-recipe.jpg",
        },
        {
          icon: Loyalty,
          title: "Free for Individuals",
          description:
            "Create unlimited workouts and diet plans with no paywalls and no gimmicks. Only pay for personalized access to professionals.",
          image: "/mockup-workout-list.jpg",
        },
      ],
    },
    benefits: {
      title: "Why We’re Different",
      benefitList: [
        {
          title: "Truly Personalized",
          description:
            "FitSynth adapts to any workout style, any exercise, and any diet. Easy as that.",
          image: "/benefits-personalized.jpg",
        },
        {
          title: "Access to Professionals",
          description:
            "Our marketplace allows you to vet fitness professionals from all over the world, making sure you can find someone who fits your needs and your budget.",
          image: "/benefits-professionals.jpg",
        },
        {
          title: "One Seamless Platform",
          description:
            "Manage all aspects of your fitness lifestyle on one seamless platform via phone, watch, tablet, or browser.",
          image: "/benefits-platform.jpg",
        },
      ],
    },
    ctaBanner: "Stay up to date on news and get access before everyone else!",
    userTypes: {
      title: "FitSynth for Fitness Professionals",
      userTypeList: [
        {
          title: "Trainers",
          featureList: [
            {
              title: "Simplify your routine",
              description:
                "No more need to be a marketing or finance expert. Let FitSynth convert, manage, bill, and collect payments from clients for you, finally letting you get back to what you do best.",
              icon: Acute,
            },
            {
              title: "Modern Personal Training, Done Right",
              description:
                "Stop sending pen and paper notes, PDFs and Excel files to your trainees. Put their customized workouts and meals right on their FitSynth calendars, and they can send you feedback from their smartwatches afterwards.",
              icon: CalendarMonth,
            },
            {
              title: "Build Passive and Active Income",
              description:
                "Find trainees from all over the world who need your skills to meet their goals. Not sure all your clients need a personal touch? List your pre-written diet and workout plans and create a stream of passive income. You can also affiliate market products from your own (or other) brands in an easy-to-find format.",
              icon: LocalConvenienceStore,
            },
          ],
        },
        {
          title: "Dieticians",
          featureList: [
            {
              title: "Simplify your routine",
              description:
                "No more need to be a marketing or finance expert. Let FitSynth convert, manage, bill, and collect payments from clients for you, finally letting you get back to what you do best.",
              icon: Acute,
            },
            {
              title: "Detailed Planning",
              description:
                "Don't just plan their meals, include entire recipes, nutrition facts, and other helpful information right to your clients' calendars in minutes or less.",
              icon: Nutrition,
            },
            {
              title: "Build Passive and Active Income",
              description:
                "Find trainees from all over the world who need your skills to meet their goals. Not sure all your clients need a personal touch? List your pre-written diet and workout plans and create a stream of passive income. You can also affiliate market products from your own (or other) brands in an easy-to-find format.",
              icon: LocalConvenienceStore,
            },
          ],
        },
        {
          title: "Gyms",
          featureList: [
            {
              title: "Go Worldwide",
              description:
                "Eliminate the 'distance problem'. In just 10 minutes a day, upload a custom daily workout that subscribers from all around the globe can use to meet their goals.",
              icon: TravelExplore,
            },
            {
              title: "Broaden Your Membership Base",
              description:
                "Upload routines and market products with FitSynth, allowing even those with their own equipment or preferred gyms to support your business.",
              icon: CloudSync,
            },
            {
              title: "Improve Retention",
              description:
                "Clients like your gym but can't workout if they move or travel? Retain membership by leveraging FitSynth's platform to give them the tools they need to keep working out regardless of how far they are from your doors.",
              icon: PersonPinCircle,
            },
          ],
        },
        {
          title: "Brands",
          featureList: [
            {
              title: "Increased Exposure",
              description:
                "Get access to a marketplace of health-conscious individuals to sell to directly or via affiliated sales from professionals.",
              icon: InteractiveSpace,
            },
            {
              title: "Trusted Voices",
              description:
                "Get organic, word of mouth marketing from trainers and other professionals to increase sales.",
              icon: RecordVoiceOver,
            },
          ],
        },
      ],
      button: {
        title: "Join Waitlist",
        link: routes[Page.WAITLIST].page,
      },
    },
  },
  [Page.CONTACT]: {
    contactForm: {
      title: "Get in touch",
      descriptionParagraphs: [
        "Have a question? Need personal assistance? Want to get more information on how FitSynth can benefit you? Fill out our form and we'll be in touch ASAP (really, we're very speedy, but on days with higher volume we may need up to 24 hours)",
      ],
      formFieldList: [
        [
          {
            label: "Name",
            type: "text",
            required: true,
          },
          {
            label: "Email address",
            type: "email",
            required: true,
          },
        ],
        [
          {
            label: "I am a(n)...",
            type: "select",
            required: true,
            options: [
              "Individual",
              "Personal trainer",
              "Gym owner/manager",
              "Dietitian",
              "Fitness brand",
              "Other",
            ],
          },
          {
            label: "Subject",
            type: "select",
            required: true,
            options: ["option 1", "option 2", "option 3", "option 4"],
          },
        ],
        [
          {
            label: "How’d you hear about us?",
            type: "text",
          },
        ],
        [
          {
            label: "Message",
            type: "multiline",
            required: true,
          },
        ],
        [
          {
            label: "I’m interested in joining the FitSynth mailing list",
            type: "checkbox",
          },
        ],
      ],
      formButton: "Send",
    },
    ctaBanner: "Wanna be the first to know when FitSynth is available?",
  },
  [Page.WAITLIST]: {
    signupForm: {
      title: "Join the Waitlist",
      description:
        "Get news, offers, and access before anyone else. Fill out the form below to get in on the action. We're honored to have a place in your inbox, we promise not to abuse it.",
      formFieldList: [
        [
          {
            label: "Name",
            type: "text",
            required: true,
          },
          {
            label: "Email address",
            type: "email",
            required: true,
          },
        ],
        [
          {
            label: "Phone number",
            type: "text",
          },
          {
            label: "I am a...",
            type: "select",
            required: true,
            options: [
              "Personal trainer",
              "Gym owner/manager",
              "Dietitian",
              "Fitness brand",
              "Other",
            ],
          },
        ],
        [
          {
            label: "How’d you hear about us?",
            type: "multiline",
          },
        ],
      ],
      formButton: "Send",
      successMessage:
        "We're honored to have a place in your inbox. We promise not to abuse it.",
    },
  },
};

export default content;
