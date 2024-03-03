type Home = {
  id: number;
  title: string;
  body: string;
  url: string;
};

export const HOME_APP: Home[] = [
  {
    id: 1,
    title: "Locate with app",
    body: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
    url: "/icons/locate.svg",
  },
  {
    id: 2,
    title: "Pick your scooter",
    body: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
    url: "/icons/scooter.svg",
  },
  {
    id: 3,
    title: "Enjoy the ride",
    body: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
    url: "/icons/ride.svg",
  },
];

export const HOME_BENEFIT: Home[] = [
  {
    id: 1,
    title: "Easy to use riding telemetry",
    body: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    url: "/images/telemetry.jpg",
  },
  {
    id: 2,
    title: "Coming to a city near you",
    body: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    url: "/images/near-you.jpg",
  },
  {
    id: 3,
    title: "Zero hassle payments",
    body: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
    url: "/images/payments.jpg",
  },
];

type Values = {
  id: string;
  title: string;
  body: string;
  url: string;
};
export const ABOUT_VALUES: Values[] = [
  {
    id: "01",
    title: "Our tech",
    body: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    url: "/images/our-tech.jpg",
  },
  {
    id: "02",
    title: "Our integrity",
    body: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    url: "/images/our-integrity.jpg",
  },
  {
    id: "03",
    title: "Our community",
    body: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    url: "/images/our-community.jpg",
  },
];

// Job section
type Job = {
  id: number;
  job: string;
  location: string;
};

export const CAREER_JOBS: Job[] = [
  {
    id: 1,
    job: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    id: 2,
    job: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    id: 3,
    job: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    id: 4,
    job: "Graphic Designer",
    location: "New York, United States",
  },
  {
    id: 5,
    job: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    id: 6,
    job: "UX Analyst",
    location: "London, United Kingdom",
  },
];
