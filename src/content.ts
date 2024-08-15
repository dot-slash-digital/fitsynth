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
import { Facebook, Instagram, Twitter } from "@/components/social-icons";
import { routes, Page, Section } from "./pageInfo";

export enum RichText {
  PARAGRAPH = "PARAGRAPH",
  ORDERED_LIST = "ORDERED_LIST",
}

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
  blogs: [
    {
      slug: "create-strong-online-presence-for-trainers",
      image:
        "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=10",
      title: "How to Create a Strong Online Presence for Personal Trainers",
      date: new Date(2023, 4, 1),
      tags: ["tag 1", "tag 2", "tag 3"],
      content: [
        {
          text: "In today's digital age, it's more important than ever for personal trainers to have a strong online presence. With so many people looking for fitness advice online, personal trainers who can create a strong online presence will be more likely to attract new clients and grow their businesses.",
          type: RichText.PARAGRAPH,
        },
        {
          text: "Here are a few tips for personal trainers who want to create a strong online presence:",
          type: RichText.PARAGRAPH,
        },
        {
          items: [
            "Create a website. Your website is your online home, so it's important to make sure it's well-designed and informative. Your website should include information about your services, your qualifications, and your contact information. It should also be easy to navigate and mobile-friendly.",
            "Be active on social media. Social media is a great way to connect with potential clients and share your fitness expertise. Make sure you're active on the social media platforms that your target audience uses most. Share photos and videos of your workouts, offer fitness tips and advice, and answer questions from potential clients.",
            "Create blog content. Blogging is a great way to share your fitness knowledge and expertise with the world. When you write blog posts, make sure they're informative, engaging, and well-written. You can also use your blog to promote your services and attract new clients.",
            "Use video. Video is a great way to connect with potential clients and show them what you're all about. Create videos of your workouts, share fitness tips and advice, and answer questions from potential clients. You can also use video to promote your services and attract new clients.",
            "Get involved in your community. Get involved in your community by attending local events, sponsoring local teams, and volunteering your time. This will help you build relationships with potential clients and raise your profile in your community.",
            "Use keywords throughout your website and social media posts. When you create content for your website and social media, make sure to use relevant keywords throughout your content. This will help your content rank higher in search results, which will make it more likely that potential clients will find you.",
            "Respond to comments and questions promptly. When people comment on your website or social media posts, make sure to respond promptly. This will show potential clients that you're engaged and interested in helping them.",
            "Run contests and giveaways. Running contests and giveaways is a great way to get people to visit your website and social media pages. You can give away free fitness gear, workout plans, or even personal training sessions.",
            "Offer discounts and promotions. Offering discounts and promotions is a great way to attract new clients. You can offer a free consultation, a discount on your services, or a free trial of your online fitness program.",
            "Partner with other businesses. Partnering with other businesses in your community is a great way to reach new potential clients. You can partner with local gyms, health food stores, and even restaurants.",
          ],
          type: RichText.ORDERED_LIST,
        },
      ],
    },
    {
      slug: "blog-2",
      image:
        "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=10",
      title: "Blog #2 title goes here",
      date: new Date(2023, 3, 15),
      tags: ["tag 1", "tag 2", "tag 3"],
      content: [],
    },
    {
      slug: "blog-3",
      image:
        "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=10",
      title: "Blog #3 title goes here",
      date: new Date(2023, 3, 15),
      tags: ["tag 1", "tag 2", "tag 3"],
      content: [],
    },
    {
      slug: "blog-4",
      image:
        "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=10",
      title: "Blog #4 title goes here",
      date: new Date(2023, 3, 15),
      tags: ["tag 1", "tag 2", "tag 3"],
      content: [],
    },
  ],
  trainers: [
    {
      id: "123",
      header: {
        name: "Jonathan Doe",
        location: "Henderson, NV",
        hourlyRate: 35.5,
        pronouns: "he/him/his",
        profileImage: "https://placehold.co/200x200",
      },
      info: {
        accreditations: [
          "Name of accreditation",
          "Accreditation",
          "Accreditation",
          "super duper incredibly long accreditation name goes here",
          "Name of accreditation",
          "Name of accreditation",
          "Accreditation",
        ],
        services: [
          "Name of service",
          "Service",
          "Service name goes here",
          "super duper incredibly long service name goes here",
          "Name of service",
          "Name of service",
          "Service",
        ],
        socialMediaLinks: [
          { icon: Twitter, label: "@jonathan-doe", link: "https://x.com" },
          {
            icon: Facebook,
            label: "Jon Doe - Trainer",
            link: "https://facebook.com",
          },
          {
            icon: Instagram,
            label: "@jd.trainer",
            link: "https://instagram.com",
          },
        ],
      },
      about: {
        content:
          "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.\n\nText goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
      },
      specialsAndDeals: [
        {
          title: "Special title goes here",
          description:
            "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
        },
        {
          title: "Special title goes here",
          description:
            "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
        },
        {
          title: "Special title goes here",
          description:
            "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
        },
        {
          title: "Special title goes here",
          description:
            "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
        },
        {
          title: "Special title goes here",
          description:
            "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
        },
        {
          title: "Special title goes here",
          description:
            "Text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here.",
        },
      ],
      reviews: [
        {
          author: "John D.",
          rating: 4,
          quote:
            "Review description goes here review description goes here review description goes here review description goes here",
        },
        {
          author: "Jane D.",
          rating: 2,
          quote:
            "Review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here",
        },
        {
          author: "Josh D.",
          rating: 4.5,
          quote:
            "Review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here",
        },
        {
          author: "Jane D.",
          rating: 2,
          quote:
            "Review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here",
        },
        {
          author: "John D.",
          rating: 4,
          quote:
            "Review description goes here review description goes here review description goes here review description goes here",
        },
        {
          author: "Josh D.",
          rating: 4.5,
          quote:
            "Review description goes here review description goes here review description goes here review description goes here review description goes here review description goes here",
        },
      ],
    },
  ],
  [Page.HOME]: {
    jumbotron: {
      title: "The Future of Fitness is Finally Here",
      description:
        "Click below to get in on the action before the general public.",
      button: {
        title: "Join Waitlist",
        link: routes[Page.WAITLIST].page,
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
            options: [
              "Customer support",
              "Press/media inquiry",
              "General question",
              "Other",
            ],
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
  [Page.BLOGS]: {
    title: "Blogs",
    ctaBanner: "Wanna be the first to know when FitSynth is available?",
  },
  [Page.BLOG]: {
    ctaBanner: "Wanna be the first to know when FitSynth is available?",
  },
};

export default content;
