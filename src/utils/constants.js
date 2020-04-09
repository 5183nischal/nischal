export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/profile.jpg',
  },
  index: {
    title: 'Nischal | Home',
    description: 'Nischal\'s webpage'
  },
  about: {
    title: 'Nischal | About',
    description: 'Nischal\'s webpage'
  },
  works: {
    title: 'Nischal | Works',
    description: 'Nischal\'s webpage'
  }
}
