const hotels = [
  {
    id: 1,
    name: 'Equitana Hotel Resort',
    activities: [
      'outdoors',
      'sport',
      'kids',
      'relax',
      'horse-riding',
      'spa',
      'bowling',
      'billiard',
      'minigolf',
      'fishing',
    ],
    'loc-code': 'cs-c',
    address: 'Martinice 1, 262 72 Březnice, Czech Republic',
    location: {
      latitude: 49.5791,
      longitude: 13.8301,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'pool', 'restaurant', 'jogging-track'],
    web: 'http://www.equitana.cz',
    images: [
      {
        small: '/assets/Equitana/horse-kid-small.jpg',
        large: '/assets/Equitana/horse-kid.jpg',
      },
      {
        small: '/assets/Equitana/horse-ocean-small.jpg',
        large: '/assets/Equitana/horse-ocean.jpg',
      },
      {
        small: '/assets/Equitana/horse-passion-small.jpg',
        large: '/assets/Equitana/horse-passion.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Jan', date: '01.06.2023 10:00', text: 'Velmi pěkný hotel!' },
      {
        name: 'Олена',
        date: '02.06.2023 12:00',
        text: 'Чудове обслуговування.',
      },
      { name: 'John', date: '03.06.2023 14:00', text: 'Convenient location.' },
    ],
  },
  {
    id: 2,
    name: 'Hotel Kouty',
    activities: [
      'outdoors',
      'sport',
      'relax',
      'tennis',
      'beach-volleyball',
      'water-sports',
      'yoga',
      'playground',
    ],
    'loc-code': 'cs-c',
    address: 'Zblovice 63, 675 26 Zblovice, Czech Republic',
    location: {
      latitude: 49.106,
      longitude: 15.645,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'sauna', 'restaurant'],
    web: 'http://www.hotelkouty.cz',
    images: [
      {
        small: '/assets/Hotel-Kouty/yoga-small.jpg',
        large: '/assets/Hotel-Kouty/yoga.jpg',
      },
      {
        small: '/assets/Hotel-Kouty/paddleboard-small.jpg',
        large: '/assets/Hotel-Kouty/paddleboard.jpg',
      },
      {
        small: '/assets/Hotel-Kouty/beach-volleyball-small.jpg',
        large: '/assets/Hotel-Kouty/beach-volleyball.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Petr', date: '01.06.2023 10:00', text: 'Úžasný hotel!' },
      { name: 'Іван', date: '02.06.2023 12:00', text: 'Дуже гарне місце.' },
      { name: 'Michael', date: '03.06.2023 14:00', text: 'Nice amenities.' },
    ],
  },
  {
    id: 3,
    name: 'Golf Resort Olomouc',
    activities: ['outdoors', 'golf'],
    'loc-code': 'cs-c',
    address: 'Dolany-Véska 89, 783 16 Dolany, Czech Republic',
    location: {
      latitude: 49.635,
      longitude: 17.3023,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'pets', 'restaurant', 'gym', 'club rentals'],
    web: 'https://www.golfolomouc.cz/en/hotel/hotel',
    images: [
      {
        small: '/assets/Golf-Resort-Olomouc/golf-ball-small.jpg',
        large: '/assets/Golf-Resort-Olomouc/golf-ball.jpg',
      },
      {
        small: '/assets/Golf-Resort-Olomouc/golf-man-small.jpg',
        large: '/assets/Golf-Resort-Olomouc/golf-man.jpg',
      },
      {
        small: '/assets/Golf-Resort-Olomouc/golf-people-small.jpg',
        large: '/assets/Golf-Resort-Olomouc/golf-people.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Tomas',
        date: '01.06.2023 10:00',
        text: 'Skvělý golfový resort!',
      },
      { name: 'Оксана', date: '02.06.2023 12:00', text: 'Чудовий сервіс.' },
      {
        name: 'Jessica',
        date: '03.06.2023 14:00',
        text: 'Great location for golf.',
      },
    ],
  },
  {
    id: 4,
    name: 'Caribe Bay',
    activities: ['kids', 'aquapark', 'playground'],
    'loc-code': 'it-c',
    address:
      'Via Michelangelo Buonarroti, 15, 30016 Lido di Jesolo, Venice, Italy',
    location: {
      latitude: 45.5128,
      longitude: 12.6446,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['pool', 'restaurant', 'wifi'],
    web: 'https://www.caribebay.it/en',
    images: [
      {
        small: '/assets/Caribe-Bay/aqua-fun-small.jpg',
        large: '/assets/Caribe-Bay/aqua-fun.jpg',
      },
      {
        small: '/assets/Caribe-Bay/aqua-bath-small.jpg',
        large: '/assets/Caribe-Bay/aqua-bath.jpg',
      },
      {
        small: '/assets/Caribe-Bay/aquapark-small.jpg',
        large: '/assets/Caribe-Bay/aquapark.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Luca',
        date: '01.06.2023 10:00',
        text: 'Fantastico parco acquatico!',
      },
      {
        name: 'Марія',
        date: '02.06.2023 12:00',
        text: 'Дуже весело для дітей.',
      },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Great family spot.' },
    ],
  },
  {
    id: 5,
    name: 'Six Senses Douro Valley',
    activities: [
      'art',
      'sport',
      'painting',
      'water-sports',
      'cooking-masterclass',
      'wine-tasting',
    ],
    'loc-code': 'pt-c',
    address: 'Quinta Vale de Abraão, Samodães, 5100-758 Lamego, Portugal',
    location: {
      latitude: 41.161,
      longitude: -7.7851,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'restaurant', 'pool', 'wine cellar'],
    web: 'https://www.sixsenses.com/en/resorts/douro-valley/experiences/',
    images: [
      {
        small: '/assets/Six-Senses/painting-small.jpg',
        large: '/assets/Six-Senses/painting.jpg',
      },
      {
        small: '/assets/Six-Senses/master-class-small.jpg',
        large: '/assets/Six-Senses/master-class.jpg',
      },
      {
        small: '/assets/Six-Senses/vine-small.jpg',
        large: '/assets/Six-Senses/vine.jpg',
      },
      {
        small: '/assets/Six-Senses/water-activity-small.jpg',
        large: '/assets/Six-Senses/water-activity.jpg',
      },
    ],
    defaultReviews: [
      { name: 'João', date: '01.06.2023 10:00', text: 'Resort maravilhoso!' },
      { name: 'Ірина', date: '02.06.2023 12:00', text: 'Прекрасне місце.' },
      { name: 'Sophia', date: '03.06.2023 14:00', text: 'Beautiful setting.' },
    ],
  },
  {
    id: 6,
    name: 'The Boulders Resort',
    activities: [
      'golf',
      'hotair-ballooning',
      'rock-climbing',
      'outdoors',
      'sport',
    ],
    'loc-code': 'us-c',
    address: '34631 N Tom Darlington Dr, Scottsdale, AZ 85262, USA',
    location: {
      latitude: 33.8466,
      longitude: -111.9277,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'gym', 'restaurant'],
    web: 'https://www.theboulders.com/outdoor-adventures/',
    images: [
      {
        small: '/assets/The-Boulders/fireball-small.jpg',
        large: '/assets/The-Boulders/fireball.jpg',
      },
      {
        small: '/assets/The-Boulders/fireballs-small.jpg',
        large: '/assets/The-Boulders/fireballs.jpg',
      },
      {
        small: '/assets/The-Boulders/golf-play-small.jpg',
        large: '/assets/The-Boulders/golf-play.jpg',
      },
      {
        small: '/assets/The-Boulders/rock-small.jpg',
        large: '/assets/The-Boulders/rock.jpg',
      },
    ],
    defaultReviews: [
      { name: 'James', date: '01.06.2023 10:00', text: 'Amazing resort!' },
      {
        name: 'Анна',
        date: '02.06.2023 12:00',
        text: 'Дуже цікаві активності.',
      },
      {
        name: 'Thomas',
        date: '03.06.2023 14:00',
        text: 'Great desert experience.',
      },
    ],
  },
  {
    id: 7,
    name: 'The Residences at Chevy Chase',
    activities: ['yoga', 'pillow-fighting', 'relax'],
    'loc-code': 'us-c',
    address: '8551 Connecticut Ave, Chevy Chase, MD 20815, USA',
    location: {
      latitude: 38.9965,
      longitude: -77.069,
    },
    rating: 0,
    price: 'luxury',
    comfort: ['gym', 'library', 'pets'],
    web: 'https://www.theresidenceschevychase.com/',
    images: [
      {
        small: '/assets/The-Residences-at-Chevy-Chase/pillow-attack-small.jpg',
        large: '/assets/The-Residences-at-Chevy-Chase/pillow-attack.jpg',
      },
      {
        small:
          '/assets/The-Residences-at-Chevy-Chase/pillow-happyness-small.jpg',
        large: '/assets/The-Residences-at-Chevy-Chase/pillow-happyness.jpg',
      },
      {
        small: '/assets/The-Residences-at-Chevy-Chase/pillows-small.jpg',
        large: '/assets/The-Residences-at-Chevy-Chase/pillows.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Michael', date: '01.06.2023 10:00', text: 'Unique experience!' },
      { name: 'Олексій', date: '02.06.2023 12:00', text: 'Дуже незвично.' },
      { name: 'Sarah', date: '03.06.2023 14:00', text: 'Interesting concept.' },
    ],
  },
  {
    id: 8,
    name: 'Loews Coronado Bay Resort',
    activities: ['water-sports', 'outdoors', 'sport'],
    'loc-code': 'us-c',
    address: '4000 Coronado Bay Road, Coronado, CA 92118, USA',
    location: {
      latitude: 32.6325,
      longitude: -117.1384,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'pool', 'restaurant'],
    web: 'https://www.loewshotels.com/coronado-bay-resort',
    images: [
      {
        small: '/assets/Loews-Coronado-Bay-Resort/dog-small.jpg',
        large: '/assets/Loews-Coronado-Bay-Resort/dog.jpg',
      },
      {
        small: '/assets/Loews-Coronado-Bay-Resort/man-and-dog-small.jpg',
        large: '/assets/Loews-Coronado-Bay-Resort/man-and-dog.jpg',
      },
    ],
    defaultReviews: [
      { name: 'David', date: '01.06.2023 10:00', text: 'Lovely resort!' },
      { name: 'Ігор', date: '02.06.2023 12:00', text: 'Чудові краєвиди.' },
      { name: 'Emma', date: '03.06.2023 14:00', text: 'Great for pets.' },
    ],
  },
  {
    id: 9,
    name: 'Obriy Village',
    activities: ['spa', 'horse-riding', 'relax', 'outdoors', 'sport'],
    'loc-code': 'ua-c',
    address: 'Opishnya, Poltava region, Ukraine',
    location: {
      latitude: 49.9722,
      longitude: 34.6083,
    },
    rating: 4.5,
    price: 'budget',
    comfort: ['wifi', 'parking', 'restaurant', 'spa'],
    web: 'https://obriyvillage.com/',
    images: [
      {
        small: '/assets/Obriy-Village/horse-small.jpg',
        large: '/assets/Obriy-Village/horse.jpg',
      },
      {
        small: '/assets/Obriy-Village/nature-small.jpg',
        large: '/assets/Obriy-Village/nature.jpg',
      },
      {
        small: '/assets/Obriy-Village/tub-small.jpg',
        large: '/assets/Obriy-Village/tub.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Михайло', date: '01.06.2023 10:00', text: 'Дуже гарне місце!' },
      {
        name: 'Kateřina',
        date: '02.06.2023 12:00',
        text: 'Vynikající servis.',
      },
      {
        name: 'Andrew',
        date: '03.06.2023 14:00',
        text: 'Wonderful experience.',
      },
    ],
  },
  {
    id: 10,
    name: 'Concept Stay Sirimiri',
    activities: ['horse-riding', 'spa', 'relax', 'outdoors', 'sport'],
    'loc-code': 'ua-c',
    address: 'Yaremche, Ukraine',
    location: {
      latitude: 48.4482,
      longitude: 24.5527,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'restaurant', 'spa'],
    web: 'https://en.concept-stay.com/sirimiri',
    images: [
      {
        small: '/assets/Concept-Stay-Sirimiri/hot-tub-small.jpg',
        large: '/assets/Concept-Stay-Sirimiri/hot-tub.jpg',
      },
      {
        small: '/assets/Concept-Stay-Sirimiri/girl-on-horse-small.jpg',
        large: '/assets/Concept-Stay-Sirimiri/girl-on-horse.jpg',
      },
      {
        small: '/assets/Concept-Stay-Sirimiri/girl-and-horse-small.jpg',
        large: '/assets/Concept-Stay-Sirimiri/girl-and-horse.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Олександр', date: '01.06.2023 10:00', text: 'Прекрасне місце!' },
      { name: 'Jan', date: '02.06.2023 12:00', text: 'Velmi pěkný hotel.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Great retreat.' },
    ],
  },
  {
    id: 11,
    name: 'Scandi Eco Park',
    activities: [
      'kids',
      'sport',
      'outdoors',
      'playground',
      'horse-riding',
      'cycling',
      'hiking',
    ],
    'loc-code': 'ua-c',
    address: "Klad'kivka, Chernihivska obl, 16351, Ukraine",
    location: {
      latitude: 51.4982,
      longitude: 31.2893,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'restaurant'],
    web: 'https://www.facebook.com/scandi.eco.park/',
    images: [
      {
        small: '/assets/Scandi-Eco-Park/huskey-small.jpg',
        large: '/assets/Scandi-Eco-Park/huskey.jpg',
      },
      {
        small: '/assets/Scandi-Eco-Park/pet-therapy-small.jpg',
        large: '/assets/Scandi-Eco-Park/pet-therapy.jpg',
      },
      {
        small: '/assets/Scandi-Eco-Park/bikes-small.jpg',
        large: '/assets/Scandi-Eco-Park/bikes.jpg',
      },
      {
        small: '/assets/Scandi-Eco-Park/horse-small.jpg',
        large: '/assets/Scandi-Eco-Park/horse.jpg',
      },
      {
        small: '/assets/Scandi-Eco-Park/trekking-small.jpg',
        large: '/assets/Scandi-Eco-Park/trekking.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Микола', date: '01.06.2023 10:00', text: 'Дуже гарний парк!' },
      { name: 'Petr', date: '02.06.2023 12:00', text: 'Skvělý zážitek.' },
      { name: 'Alice', date: '03.06.2023 14:00', text: 'Lovely place.' },
    ],
  },
  {
    id: 12,
    name: 'Aves Travel',
    activities: ['spa', 'relax'],
    'loc-code': 'ua-c',
    address: 'Various locations, Ukraine',
    location: {
      latitude: 48.3794,
      longitude: 31.1656,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'restaurant', 'spa'],
    web: 'https://www.avestravel.com.ua/hotel_list/goteli-z-garjachimi-dzherelami-v-ukraini/',
    images: [
      {
        small: '/assets/Aves-Travel/background-small.jpg',
        large: '/assets/Aves-Travel/background.jpg',
      },
      {
        small: '/assets/Aves-Travel/man-small.jpg',
        large: '/assets/Aves-Travel/man.jpg',
      },
      {
        small: '/assets/Aves-Travel/woman-small.jpg',
        large: '/assets/Aves-Travel/woman.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Ірина', date: '01.06.2023 10:00', text: 'Чудові курорти!' },
      { name: 'Eva', date: '02.06.2023 12:00', text: 'Skvělá místa.' },
      {
        name: 'Hannah',
        date: '03.06.2023 14:00',
        text: 'Relaxing experience.',
      },
    ],
  },
  {
    id: 13,
    name: 'The Manta Resort',
    activities: ['underwater hotel', 'outdoors', 'relax'],
    'loc-code': 'tz-c',
    address: 'Pemba Island, Tanzania',
    location: {
      latitude: -5.235,
      longitude: 39.7763,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'parking', 'restaurant', 'spa'],
    web: 'https://themantaresort.com/',
    images: [
      {
        small: '/assets/The-Manta-Resort/underwater-small.jpg',
        large: '/assets/The-Manta-Resort/underwater.jpg',
      },
      {
        small: '/assets/The-Manta-Resort/underwater-hotel-small.jpg',
        large: '/assets/The-Manta-Resort/underwater-hotel.jpg',
      },
      {
        small: '/assets/The-Manta-Resort/nature-small.jpg',
        large: '/assets/The-Manta-Resort/nature.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Amani',
        date: '01.06.2023 10:00',
        text: 'A place like no other!',
      },
      {
        name: 'Олексій',
        date: '02.06.2023 12:00',
        text: 'Дуже унікальне місце.',
      },
      { name: 'Jessica', date: '03.06.2023 14:00', text: 'Incredible stay.' },
    ],
  },
  {
    id: 14,
    name: 'Poseidon Undersea Resorts',
    activities: ['underwater hotel', 'relax'],
    'loc-code': 'fj-c',
    address: 'Fiji Island',
    location: {
      latitude: -17.7134,
      longitude: 178.065,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'restaurant', 'spa'],
    web: 'https://www.poseidonresorts.com/',
    images: [
      {
        small: '/assets/The-Manta-Resort/underwater-small.jpg',
        large: '/assets/The-Manta-Resort/underwater.jpg',
      },
      {
        small: '/assets/The-Manta-Resort/underwater-hotel-small.jpg',
        large: '/assets/The-Manta-Resort/underwater-hotel.jpg',
      },
      {
        small: '/assets/The-Manta-Resort/nature-small.jpg',
        large: '/assets/The-Manta-Resort/nature.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Manasa',
        date: '01.06.2023 10:00',
        text: 'Absolutely breathtaking!',
      },
      { name: 'Юлія', date: '02.06.2023 12:00', text: 'Дуже гарно під водою.' },
      { name: 'Robert', date: '03.06.2023 14:00', text: 'Unique experience.' },
    ],
  },
  {
    id: 15,
    name: 'Icehotel',
    activities: ['ice hotel', 'art'],
    'loc-code': 'se-c',
    address: 'Marknadsvägen 63, 981 91 Jukkasjärvi, Sweden',
    location: {
      latitude: 67.85,
      longitude: 20.6161,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'restaurant', 'bar'],
    web: 'https://www.icehotel.com/',
    images: [
      {
        small: '/assets/Icehotel/ice-small.jpg',
        large: '/assets/Icehotel/ice.jpg',
      },
      {
        small: '/assets/Icehotel/ice-hotel-small.jpg',
        large: '/assets/Icehotel/ice-hotel.jpg',
      },
      {
        small: '/assets/Icehotel/ice-hotel-snow-small.jpg',
        large: '/assets/Icehotel/ice-hotel-snow.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Lars', date: '01.06.2023 10:00', text: 'Fantastiskt ishotell!' },
      { name: 'Наталія', date: '02.06.2023 12:00', text: 'Дуже цікаве місце.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Unforgettable stay.' },
    ],
  },
  {
    id: 16,
    name: 'Treehotel',
    activities: ['outdoors', 'relax'],
    'loc-code': 'se-c',
    address: 'Edeforsväg 2A, 960 24 Harads, Sweden',
    location: {
      latitude: 65.8254,
      longitude: 20.9694,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'restaurant', 'sauna'],
    web: 'https://treehotel.se/',
    images: [
      {
        small: '/assets/Treehotel/tree-modern-house-small.jpg',
        large: '/assets/Treehotel/tree-modern-house.jpg',
      },
      {
        small: '/assets/Treehotel/treehouse-small.jpg',
        large: '/assets/Treehotel/treehouse.jpg',
      },
      {
        small: '/assets/Treehotel/tree-happy-house-small.jpg',
        large: '/assets/Treehotel/tree-happy-house.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Anders', date: '01.06.2023 10:00', text: 'Underbart hotell!' },
      {
        name: 'Марія',
        date: '02.06.2023 12:00',
        text: 'Дуже гарні будиночки.',
      },
      { name: 'Thomas', date: '03.06.2023 14:00', text: 'Amazing views.' },
    ],
  },
  {
    id: 17,
    name: 'Luna Salada Hotel',
    activities: ['salt hotel', 'relax'],
    'loc-code': 'bo-c',
    address: 'Salar de Uyuni, Colchani, Bolivia',
    location: {
      latitude: -20.1338,
      longitude: -67.4891,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'restaurant', 'spa'],
    web: 'https://lunasaladahotel.com.bo/',
    images: [
      {
        small: '/assets/Luna-Salada-Hotel/salt-small.jpg',
        large: '/assets/Luna-Salada-Hotel/salt.jpg',
      },
      {
        small: '/assets/Luna-Salada-Hotel/salt-hotel-small.jpg',
        large: '/assets/Luna-Salada-Hotel/salt-hotel.jpg',
      },
      {
        small: '/assets/Luna-Salada-Hotel/solted-lake-small.jpg',
        large: '/assets/Luna-Salada-Hotel/solted-lake.jpg',
      },
      {
        small: '/assets/Luna-Salada-Hotel/relax-small.jpg',
        large: '/assets/Luna-Salada-Hotel/relax.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Carlos', date: '01.06.2023 10:00', text: 'Hotel increíble!' },
      { name: 'Іван', date: '02.06.2023 12:00', text: 'Дуже унікальне місце.' },
      { name: 'Alice', date: '03.06.2023 14:00', text: 'Unique experience.' },
    ],
  },
  {
    id: 18,
    name: "Butlin's Minehead Resort",
    activities: ['playground', 'tennis', 'minigolf', 'aquapark'],
    'loc-code': 'gb-c',
    address:
      'Butlin’s Minehead, Warren Road, Minehead TA24 5SH, United Kingdom',
    location: {
      latitude: 51.205946,
      longitude: -3.45899,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'restaurant', 'pool'],
    web: 'https://www.butlins.com/resorts/minehead',
    images: [
      {
        small: '/assets/Butlins/fair-small.jpg',
        large: '/assets/Butlins/fair.jpg',
      },
      {
        small: '/assets/Butlins/girl-fish-small.jpg',
        large: '/assets/Butlins/girl-fish.jpg',
      },
      {
        small: '/assets/Butlins/kids-football-small.jpg',
        large: '/assets/Butlins/kids-football.jpg',
      },
      {
        small: '/assets/Butlins/ride-small.jpg',
        large: '/assets/Butlins/ride.jpg',
      },
    ],
    defaultReviews: [
      { name: 'James', date: '01.06.2023 10:00', text: 'Lovely place!' },
      { name: 'Олена', date: '02.06.2023 12:00', text: 'Дуже затишно.' },
      { name: 'Sarah', date: '03.06.2023 14:00', text: 'Our kids love it!' },
    ],
  },
  {
    id: 19,
    name: 'Hotel Divorce',
    activities: ['divorce hotel', 'relax', 'spa'],
    'loc-code': 'nl-c',
    address: 'Zeestraat 35, 2518 AA The Hague, Netherlands',
    location: {
      latitude: 52.0833,
      longitude: 4.3,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['wifi', 'restaurant', 'spa'],
    web: 'https://www.carlton.nl/hotel-ambassador-den-haag',
    images: [
      {
        small: '/assets/Hotel-Divorse/happy-divorce-small.jpg',
        large: '/assets/Hotel-Divorse/happy-divorce.jpg',
      },
      {
        small: '/assets/Hotel-Divorse/divorce-small.jpg',
        large: '/assets/Hotel-Divorse/divorce.jpg',
      },
      {
        small: '/assets/Hotel-Divorse/divorce-fun-small.jpg',
        large: '/assets/Hotel-Divorse/divorce-fun.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Hendrik', date: '01.06.2023 10:00', text: 'Bijzonder concept!' },
      {
        name: 'Петро',
        date: '02.06.2023 12:00',
        text: 'Незвичайна концепція.',
      },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Unique services.' },
    ],
  },
  {
    id: 20,
    name: 'Protea Hotel by Marriott Polokwane Ranch Resort',
    activities: ['walk with lions', 'outdoors'],
    'loc-code': 'za-c',
    address:
      '25 km South of Polokwane on either the R101 or N1, Polokwane, 0700, South Africa',
    location: {
      latitude: -23.8916,
      longitude: 29.4486,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['wifi', 'restaurant', 'spa', 'pool'],
    web: 'https://www.marriott.com/en-us/hotels/ptgra-protea-hotel-polokwane-ranch-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
    images: [
      {
        small:
          '/assets/Protea-Hotel-by-Marriott-Polokwane-Ranch-Resort/hepard-small.jpg',
        large:
          '/assets/Protea-Hotel-by-Marriott-Polokwane-Ranch-Resort/hepard.jpg',
      },
      {
        small:
          '/assets/Protea-Hotel-by-Marriott-Polokwane-Ranch-Resort/little-lions-small.jpg',
        large:
          '/assets/Protea-Hotel-by-Marriott-Polokwane-Ranch-Resort/little-lions.jpg',
      },
      {
        small:
          '/assets/Protea-Hotel-by-Marriott-Polokwane-Ranch-Resort/lion-girl-small.jpg',
        large:
          '/assets/Protea-Hotel-by-Marriott-Polokwane-Ranch-Resort/lion-girl.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Sipho',
        date: '01.06.2023 10:00',
        text: 'Incredible adventure!',
      },
      { name: 'Юрій', date: '02.06.2023 12:00', text: 'Дуже цікаве місце.' },
      {
        name: 'Michael',
        date: '03.06.2023 14:00',
        text: 'Unique wildlife experience.',
      },
    ],
  },
  {
    id: 21,
    name: 'V8 Hotel Classic Motorworld Region Stuttgart',
    activities: ['relax', 'art'],
    'loc-code': 'de-c',
    address: 'Charles-Lindbergh-Platz 1, 71034 Böblingen, Germany',
    location: {
      latitude: 48.681,
      longitude: 8.9999,
    },
    rating: 4.5,
    price: 'midrange',
    comfort: ['restaurant', 'bar', 'gym'],
    web: 'https://www.v8hotel.de/',
    images: [
      {
        small:
          '/assets/V8-Hotel-Classic-Motorworld-Region-Stuttgart/car-them-small.jpg',
        large:
          '/assets/V8-Hotel-Classic-Motorworld-Region-Stuttgart/car-them.jpg',
      },
      {
        small:
          '/assets/V8-Hotel-Classic-Motorworld-Region-Stuttgart/shoe-shine-small.jpg',
        large:
          '/assets/V8-Hotel-Classic-Motorworld-Region-Stuttgart/shoe-shine.jpg',
      },
      {
        small:
          '/assets/V8-Hotel-Classic-Motorworld-Region-Stuttgart/massage-small.jpg',
        large:
          '/assets/V8-Hotel-Classic-Motorworld-Region-Stuttgart/massage.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Hans', date: '01.06.2023 10:00', text: 'Tolles Autohotel!' },
      { name: 'Микола', date: '02.06.2023 12:00', text: 'Чудовий дизайн.' },
      { name: 'John', date: '03.06.2023 14:00', text: 'Great for car lovers.' },
    ],
  },
  {
    id: 22,
    name: 'Masseria Cervarolo',
    activities: ['art', 'outdoors', 'relax'],
    'loc-code': 'it-c',
    address: 'SP 14 Ostuni-Martina Franca, km 4,5, 72017 Ostuni BR, Italy',
    location: {
      latitude: 40.7392,
      longitude: 17.5816,
    },
    rating: 4.8,
    price: 'midrange',
    comfort: ['spa', 'pool', 'restaurant', 'garden'],
    web: 'https://www.booking.com',
    images: [
      {
        small: '/assets/Masseria-Cervarolo/dinner-small.jpg',
        large: '/assets/Masseria-Cervarolo/dinner.jpg',
      },
      {
        small: '/assets/Masseria-Cervarolo/cook-small.jpg',
        large: '/assets/Masseria-Cervarolo/cook.jpg',
      },
      {
        small: '/assets/Masseria-Cervarolo/walking-tours-small.jpg',
        large: '/assets/Masseria-Cervarolo/walking-tours.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Giuseppe',
        date: '01.06.2023 10:00',
        text: 'Bellissima masseria!',
      },
      {
        name: 'Олександра',
        date: '02.06.2023 12:00',
        text: 'Дуже гарне місце.',
      },
      {
        name: 'Emily',
        date: '03.06.2023 14:00',
        text: 'Charming and relaxing.',
      },
    ],
  },
  {
    id: 23,
    name: 'Electra Palace Hotel',
    activities: [
      'gall-mus-opera',
      'outdoors',
      'relax',
      'spa',
      'massage',
      'wine-tasting',
    ],
    'loc-code': 'gr-c',
    address: '9 Aristotelous Square, Thessaloniki, 546 24, Greece',
    location: {
      latitude: 40.6323,
      longitude: 22.9404,
    },
    rating: 4.7,
    price: 'midrange',
    comfort: ['pool', 'restaurant', 'gym'],
    web: 'https://www.electrahotels.gr/hotels/electra-palace-thessaloniki/',
    images: [
      {
        small: '/assets/Electra-Palace-Hotel/art-small.jpg',
        large: '/assets/Electra-Palace-Hotel/art.jpg',
      },
      {
        small: '/assets/Electra-Palace-Hotel/art-exibition-small.jpg',
        large: '/assets/Electra-Palace-Hotel/art-exibition.jpg',
      },
      {
        small: '/assets/Electra-Palace-Hotel/rooftop-dining-small.jpg',
        large: '/assets/Electra-Palace-Hotel/rooftop-dining.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Nikos', date: '01.06.2023 10:00', text: 'Υπέροχο ξενοδοχείο!' },
      { name: 'Оксана', date: '02.06.2023 12:00', text: 'Чудовий вид.' },
      { name: 'Alice', date: '03.06.2023 14:00', text: 'Beautiful location.' },
    ],
  },
  {
    id: 24,
    name: 'Gaylord Palms and Convention Center',
    activities: [
      'kids',
      'sport',
      'outdoors',
      'playground',
      'ice-skating',
      'surfing',
    ],
    address: '6000 W Osceola Pkwy, Kissimmee, FL 34746, USA',
    location: {
      latitude: 28.3514,
      longitude: -81.5331,
    },
    rating: 4.6,
    price: 'midrange',
    comfort: ['spa', 'restaurant', 'pool'],
    web: 'https://www.marriott.com/en-us/hotels/mcogp-gaylord-palms-resort-and-convention-center/overview/',
    images: [
      {
        small: '/assets/Gaylord-Palms-and-Convention-Center/princess-small.jpg',
        large: '/assets/Gaylord-Palms-and-Convention-Center/princess.jpg',
      },
      {
        small: '/assets/Gaylord-Palms-and-Convention-Center/pirats-small.jpg',
        large: '/assets/Gaylord-Palms-and-Convention-Center/pirats.jpg',
      },
      {
        small:
          '/assets/Gaylord-Palms-and-Convention-Center/surfing-lessons-small.jpg',
        large:
          '/assets/Gaylord-Palms-and-Convention-Center/surfing-lessons.jpg',
      },
      {
        small:
          '/assets/Gaylord-Palms-and-Convention-Center/alligator-feeding-small.jpg',
        large:
          '/assets/Gaylord-Palms-and-Convention-Center/alligator-feeding.jpg',
      },
      {
        small:
          '/assets/Gaylord-Palms-and-Convention-Center/ice-skating-small.jpg',
        large:
          '/assets/Gaylord-Palms-and-Convention-Center/ice-skating-small.jpg',
      },
    ],
    defaultReviews: [
      { name: 'James', date: '01.06.2023 10:00', text: 'Fantastic resort!' },
      {
        name: 'Олена',
        date: '02.06.2023 12:00',
        text: 'Дуже весело для дітей.',
      },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Great for families.' },
    ],
  },
  {
    id: 25,
    name: 'Treebones Resort',
    activities: [
      'glamping in yurts',
      'private decks with scenic views',
      'outdoors',
      'art',
      'relax',
      'hiking',
    ],
    'loc-code': 'us-c',
    address: '71895 CA-1, Big Sur, CA 93920, USA',
    location: {
      latitude: 35.884400545437344,
      longitude: -121.45530280388468,
    },
    rating: 4.5,
    price: 'budget',
    comfort: ['restaurant', 'pets', 'Organic garden', 'Hiking trails'],
    web: 'https://www.treebonesresort.com/',
    images: [
      {
        small: '/assets/Treebones-Resort/boat-small.jpg',
        large: '/assets/Treebones-Resort/boat.jpg',
      },
      {
        small: '/assets/Treebones-Resort/yurta-small.jpg',
        large: '/assets/Treebones-Resort/yurta.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Michael', date: '01.06.2023 10:00', text: 'Amazing glamping!' },
      { name: 'Ігор', date: '02.06.2023 12:00', text: 'Прекрасні краєвиди.' },
      {
        name: 'Sarah',
        date: '03.06.2023 14:00',
        text: 'Eco-friendly and fun.',
      },
    ],
  },
  {
    id: 26,
    name: 'Hotel Max',
    activities: ['art'],
    'loc-code': 'us-c',
    address: '620 Stewart St, Seattle, WA 98101, USA',
    location: {
      latitude: 47.6132,
      longitude: -122.3361,
    },
    rating: 4.4,
    price: 'midrange',
    comfort: ['restaurant', 'gym'],
    web: 'https://www.creativetravelguide.com',
    images: [
      {
        small: '/assets/Hotel-Max/record-players-in-rooms-small.jpg',
        large: '/assets/Hotel-Max/record-players-in-rooms.jpg',
      },
      {
        small: '/assets/Hotel-Max/exhibition-small.jpg',
        large: '/assets/Hotel-Max/exhibition.jpg',
      },
      {
        small: '/assets/Hotel-Max/art-small.jpg',
        large: '/assets/Hotel-Max/art.jpg',
      },
    ],
    defaultReviews: [
      { name: 'James', date: '01.06.2023 10:00', text: 'Fantastic art hotel!' },
      { name: 'Андрій', date: '02.06.2023 12:00', text: 'Чудовий дизайн.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Great artistic vibe.' },
    ],
  },
  {
    id: 27,
    name: 'Grand Velas Riviera Maya',
    activities: ['art', 'sport'],
    'loc-code': 'mx-c',
    address:
      'Carretera Cancún Tulum Km 62, 77710 Playa del Carmen, Q.R., Mexico',
    location: {
      latitude: 20.6371,
      longitude: -87.0568,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['spa', 'pool', 'restaurant'],
    web: 'https://www.grandvelas.com',
    images: [
      {
        small: '/assets/Grand-Velas-Riviera-Maya/aguafit-small.jpg',
        large: '/assets/Grand-Velas-Riviera-Maya/aguafit.jpg',
      },
      {
        small: '/assets/Grand-Velas-Riviera-Maya/salsa-small.jpg',
        large: '/assets/Grand-Velas-Riviera-Maya/salsa.jpg',
      },
      {
        small: '/assets/Grand-Velas-Riviera-Maya/salsa-classes-small.jpg',
        large: '/assets/Grand-Velas-Riviera-Maya/salsa-classes.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Carlos', date: '01.06.2023 10:00', text: 'Resort increíble!' },
      { name: 'Тетяна', date: '02.06.2023 12:00', text: 'Дуже гарне місце.' },
      { name: 'Alice', date: '03.06.2023 14:00', text: 'Luxurious stay.' },
    ],
  },
  {
    id: 28,
    name: 'W Barcelona',
    activities: ['yoga', 'relax', 'salsa nights'],
    'loc-code': 'es-c',
    address: 'Plaça de la Rosa dels Vents, 1, 08039 Barcelona, Spain',
    location: {
      latitude: 41.3684,
      longitude: 2.1924,
    },
    rating: 4.7,
    price: 'midrange',
    comfort: ['beach', 'pool', 'restaurant'],
    web: 'https://www.marriott.com',
    images: [
      {
        small: '/assets/W-Barcelona/salsa-night-small.jpg',
        large: '/assets/W-Barcelona/salsa-night.jpg',
      },
      {
        small: '/assets/W-Barcelona/salsa-small.jpg',
        large: '/assets/W-Barcelona/salsa.jpg',
      },
      {
        small: '/assets/W-Barcelona/sunrics-yoga-small.jpg',
        large: '/assets/W-Barcelona/sunrics-yoga.jpg',
      },
      {
        small: '/assets/W-Barcelona/yoga-small.jpg',
        large: '/assets/W-Barcelona/yoga.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Javier',
        date: '01.06.2023 10:00',
        text: '¡Hotel impresionante!',
      },
      {
        name: 'Олена',
        date: '02.06.2023 12:00',
        text: 'Чудове місце біля моря.',
      },
      {
        name: 'Emily',
        date: '03.06.2023 14:00',
        text: 'Beautiful beachfront.',
      },
    ],
  },
  {
    id: 29,
    name: 'Hotel del Coronado',
    activities: ['yoga', 'sport', 'outdoors'],
    'loc-code': 'us-c',
    address: '1500 Orange Ave, Coronado, CA 92118, USA',
    location: {
      latitude: 32.6809,
      longitude: -117.1784,
    },
    rating: 4.6,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'beach'],
    web: 'https://hoteldel.com/',
    images: [
      {
        small: '/assets/Hotel-del-Coronado/yoga-small.jpg',
        large: '/assets/Hotel-del-Coronado/yoga.jpg',
      },
      {
        small: '/assets/Hotel-del-Coronado/surf-classes-small.jpg',
        large: '/assets/Hotel-del-Coronado/surf-classes.jpg',
      },
      {
        small: '/assets/Hotel-del-Coronado/rentals-small.jpg',
        large: '/assets/Hotel-del-Coronado/rentals.jpg',
      },
      {
        small: '/assets/Hotel-del-Coronado/beach-bonfires-small.jpg',
        large: '/assets/Hotel-del-Coronado/beach-bonfires.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'James',
        date: '01.06.2023 10:00',
        text: 'Amazing historic hotel!',
      },
      { name: 'Іван', date: '02.06.2023 12:00', text: 'Дуже гарний готель.' },
      {
        name: 'Sarah',
        date: '03.06.2023 14:00',
        text: 'Beautiful beachfront.',
      },
    ],
  },
  {
    id: 30,
    name: 'Amangiri',
    activities: [
      'outdoors',
      'sport',
      'relax',
      'hotair-ballooning',
      'hiking',
      'horse-riding',
    ],
    'loc-code': 'us-c',
    address: '1 Kayenta Rd, Canyon Point, UT 84741, USA',
    location: {
      latitude: 37.0185,
      longitude: -111.9291,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['spa', 'pool', 'restaurant'],
    web: 'https://www.aman.com/resorts/amangiri',
    images: [
      {
        small: '/assets/Amangiri/hiking-small.jpg',
        large: '/assets/Amangiri/hiking.jpg',
      },
      {
        small: '/assets/Amangiri/baloon-small.jpg',
        large: '/assets/Amangiri/baloon.jpg',
      },
      {
        small: '/assets/Amangiri/stargazing-small.jpg',
        large: '/assets/Amangiri/stargazing.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Michael',
        date: '01.06.2023 10:00',
        text: 'Unbelievable desert retreat!',
      },
      {
        name: 'Олександр',
        date: '02.06.2023 12:00',
        text: 'Неймовірне місце.',
      },
      {
        name: 'Emily',
        date: '03.06.2023 14:00',
        text: 'Beautiful surroundings.',
      },
    ],
  },
  {
    id: 31,
    name: 'Soneva Fushi',
    activities: [
      'outdoors',
      'water-sports',
      'art',
      'private cinema screenings',
      'chocolate-making classes',
    ],
    'loc-code': 'mv-c',
    address: 'Kunfunadhoo Island, Baa Atoll, Maldives',
    location: {
      latitude: 5.7264,
      longitude: 73.003,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['spa', 'restaurant', 'beach'],
    web: 'https://www.soneva.com/soneva-fushi/',
    images: [
      {
        small: '/assets/Soneva-Fushi/chocolate-making-small.jpg',
        large: '/assets/Soneva-Fushi/chocolate-making.jpg',
      },
      {
        small: '/assets/Soneva-Fushi/chocolate-small.jpg',
        large: '/assets/Soneva-Fushi/chocolate.jpg',
      },
      {
        small: '/assets/Soneva-Fushi/cinema-small.jpg',
        large: '/assets/Soneva-Fushi/cinema.jpg',
      },
      {
        small: '/assets/Soneva-Fushi/diving-small.jpg',
        large: '/assets/Soneva-Fushi/diving.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Ahmed', date: '01.06.2023 10:00', text: 'Paradise on earth!' },
      {
        name: 'Ірина',
        date: '02.06.2023 12:00',
        text: 'Прекрасне місце для відпочинку.',
      },
      {
        name: 'Sarah',
        date: '03.06.2023 14:00',
        text: 'Unforgettable experience.',
      },
    ],
  },
  {
    id: 32,
    name: 'Fogo Island Inn',
    activities: [
      'iceberg watching',
      'boat tours',
      'artist-in-residence programs',
      'berry picking',
      'art',
      'outdoors',
    ],
    'loc-code': 'ca-c',
    address: "210 Main Rd, Joe Batt's Arm, NL A0G 2X0, Canada",
    location: {
      latitude: 49.7174,
      longitude: -54.176,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'library'],
    web: 'https://www.fogoislandinn.ca/',
    images: [
      {
        small: '/assets/Fogo-Island-Inn/berry-picking-small.jpg',
        large: '/assets/Fogo-Island-Inn/berry-picking.jpg',
      },
      {
        small: '/assets/Fogo-Island-Inn/boat-tour-small.jpg',
        large: '/assets/Fogo-Island-Inn/boat-tour.jpg',
      },
      {
        small: '/assets/Fogo-Island-Inn/ice-small.jpg',
        large: '/assets/Fogo-Island-Inn/ice.jpg',
      },
      {
        small: '/assets/Fogo-Island-Inn/artist-small.jpg',
        large: '/assets/Fogo-Island-Inn/artist.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Liam', date: '01.06.2023 10:00', text: 'Amazing views!' },
      {
        name: 'Олексій',
        date: '02.06.2023 12:00',
        text: 'Дуже гарні краєвиди.',
      },
      {
        name: 'Jessica',
        date: '03.06.2023 14:00',
        text: 'Stunning experience.',
      },
    ],
  },
  {
    id: 33,
    name: 'Kakslauttanen Arctic Resort',
    activities: [
      'aurora hunting',
      'outdoors',
      'husky sledding',
      'fishing',
      'kids',
      'playground',
    ],
    'loc-code': 'fi-c',
    address: 'Kiilopääntie 9, 99830 Saariselkä, Finland',
    location: {
      latitude: 68.4186,
      longitude: 27.4177,
    },
    rating: 4.7,
    price: 'midrange',
    comfort: ['spa', 'restaurant'],
    web: 'https://www.kakslauttanen.fi/',
    images: [
      {
        small: '/assets/Kakslauttanen-Arctic-Resort/aurora-small.jpg',
        large: '/assets/Kakslauttanen-Arctic-Resort/aurora.jpg',
      },
      {
        small: '/assets/Kakslauttanen-Arctic-Resort/fishing-small.jpg',
        large: '/assets/Kakslauttanen-Arctic-Resort/fishing.jpg',
      },
      {
        small: '/assets/Kakslauttanen-Arctic-Resort/huskey-small.jpg',
        large: '/assets/Kakslauttanen-Arctic-Resort/huskey.jpg',
      },
      {
        small: '/assets/Kakslauttanen-Arctic-Resort/snowmobile-small.jpg',
        large: '/assets/Kakslauttanen-Arctic-Resort/snowmobile.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Jari', date: '01.06.2023 10:00', text: 'Upea kokemus!' },
      { name: 'Олена', date: '02.06.2023 12:00', text: 'Чудові враження.' },
      { name: 'Sarah', date: '03.06.2023 14:00', text: 'Amazing igloos.' },
    ],
  },
  {
    id: 34,
    name: 'Whitepod Eco-Luxury Hotel',
    activities: [
      'skiing-snowboarding',
      'sport',
      'outdoors',
      'snowshoeing',
      'yoga',
      'stargazing',
    ],
    'loc-code': 'ch-c',
    address: 'Les Giettes, 1871 Monthey, Switzerland',
    location: {
      latitude: 46.2176,
      longitude: 6.9144,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['restaurant', 'spa'],
    web: 'https://www.whitepod.com/',
    images: [
      {
        small: '/assets/Whitepod-Eco-Luxury-Hotel/skiing-small.jpg',
        large: '/assets/Whitepod-Eco-Luxury-Hotel/skiing.jpg',
      },
      {
        small: '/assets/Whitepod-Eco-Luxury-Hotel/snowshoeing-small.jpg',
        large: '/assets/Whitepod-Eco-Luxury-Hotel/snowshoeing.jpg',
      },
      {
        small: '/assets/Whitepod-Eco-Luxury-Hotel/stargazing-small.jpg',
        large: '/assets/Whitepod-Eco-Luxury-Hotel/stargazing.jpg',
      },
      {
        small: '/assets/Whitepod-Eco-Luxury-Hotel/yoga-small.jpg',
        large: '/assets/Whitepod-Eco-Luxury-Hotel/yoga.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Hans',
        date: '01.06.2023 10:00',
        text: 'Einzigartige Erfahrung!',
      },
      {
        name: 'Андрій',
        date: '02.06.2023 12:00',
        text: 'Дуже незвичайне місце.',
      },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Unique pods.' },
    ],
  },
  {
    id: 35,
    name: 'Amilla Fushi',
    activities: [
      'outdoors',
      'submarine tours',
      'private island picnics',
      'fishing',
      'underwater dining',
    ],
    'loc-code': 'mv-c',
    address: 'Baa Atoll, Maldives',
    location: {
      latitude: 5.7832,
      longitude: 73.4023,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['spa', 'restaurant', 'beach'],
    web: 'https://www.amilla.com/',
    images: [
      {
        small: '/assets/Amilla-Fushi/island-small.jpg',
        large: '/assets/Amilla-Fushi/island.jpg',
      },
      {
        small: '/assets/Amilla-Fushi/submarin-small.jpg',
        large: '/assets/Amilla-Fushi/submarin.jpg',
      },
      {
        small: '/assets/Amilla-Fushi/sunset-fishing-small.jpg',
        large: '/assets/Amilla-Fushi/sunset-fishing.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Ahmed', date: '01.06.2023 10:00', text: 'Perfect getaway!' },
      {
        name: 'Ірина',
        date: '02.06.2023 12:00',
        text: 'Прекрасне місце для відпочинку.',
      },
      { name: 'Sarah', date: '03.06.2023 14:00', text: 'Beautiful villas.' },
    ],
  },
  {
    id: 36,
    name: 'Longitude 131°',
    activities: [
      'uluru sunrise tours',
      'camel treks',
      'indigenous cultural experiences',
      'art',
      'outdoors',
    ],
    'loc-code': 'au-c',
    address: 'Yulara Drive, Yulara NT 0872, Australia',
    location: {
      latitude: -25.3447,
      longitude: 131.0369,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'pool'],
    web: 'https://longitude131.com.au/',
    images: [
      {
        small: '/assets/Longitude-131°/camel-small.jpg',
        large: '/assets/Longitude-131°/camel.jpg',
      },
      {
        small: '/assets/Longitude-131°/cultura-small.jpg',
        large: '/assets/Longitude-131°/cultura.jpg',
      },
      {
        small: '/assets/Longitude-131°/sunset-tour-small.jpg',
        large: '/assets/Longitude-131°/sunset-tour.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Liam', date: '01.06.2023 10:00', text: 'Amazing views!' },
      {
        name: 'Олександр',
        date: '02.06.2023 12:00',
        text: 'Неймовірні краєвиди.',
      },
      { name: 'Jessica', date: '03.06.2023 14:00', text: 'Unique experience.' },
    ],
  },
  {
    id: 37,
    name: 'Soneva Kiri',
    activities: [
      'treepod dining',
      'private beach dinners',
      'water-sports',
      'stargazing',
      'relax',
      'outdoors',
    ],
    'loc-code': 'th-c',
    address: '110 Moo 4, Ko Kut, Trat 23000, Thailand',
    location: {
      latitude: 11.589,
      longitude: 102.526,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['spa', 'pool'],
    web: 'https://www.soneva.com/soneva-kiri/',
    images: [
      {
        small: '/assets/Soneva-Kiri/diving-small.jpg',
        large: '/assets/Soneva-Kiri/diving.jpg',
      },
      {
        small: '/assets/Soneva-Kiri/dinner-small.jpg',
        large: '/assets/Soneva-Kiri/dinner.jpg',
      },
      {
        small: '/assets/Soneva-Kiri/stargazing-small.jpg',
        large: '/assets/Soneva-Kiri/stargazing.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Somchai', date: '01.06.2023 10:00', text: 'Paradise on earth!' },
      { name: 'Олексій', date: '02.06.2023 12:00', text: 'Райське місце.' },
      {
        name: 'Jessica',
        date: '03.06.2023 14:00',
        text: 'Unforgettable stay.',
      },
    ],
  },
  {
    id: 38,
    name: 'The Singular Patagonia',
    activities: [
      'outdoors',
      'sport',
      'hiking',
      'horse-riding',
      'birdwatching',
      'glacier tours',
    ],
    'loc-code': 'cl-c',
    address:
      'KM 5 Norte, Puerto Bories, Puerto Natales, Natales, Magallanes y la Antártica Chilena, Chile',
    location: {
      latitude: -51.7206,
      longitude: -72.5068,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'pool'],
    web: 'https://www.thesingular.com/patagonia/',
    images: [
      {
        small: '/assets/The Singular Patagonia/birdwatching-small.jpg',
        large: '/assets/The Singular Patagonia/birdwatching.jpg',
      },
      {
        small: '/assets/The Singular Patagonia/glacier-tours-small.jpg',
        large: '/assets/The Singular Patagonia/glacier-tours.jpg',
      },
      {
        small: '/assets/The Singular Patagonia/hiking-small.jpg',
        large: '/assets/The Singular Patagonia/hiking.jpg',
      },
      {
        small: '/assets/The Singular Patagonia/horseback-riding-small.jpg',
        large: '/assets/The Singular Patagonia/horseback-riding.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Carlos',
        date: '01.06.2023 10:00',
        text: 'Increíble experiencia!',
      },
      { name: 'Михайло', date: '02.06.2023 12:00', text: 'Дуже гарне місце.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Beautiful scenery.' },
    ],
  },
  {
    id: 39,
    name: 'Explora Rapa Nui',
    activities: [
      'outdoors',
      'sport',
      'hiking',
      'horse-riding',
      'cycling',
      'stargazing',
    ],
    'loc-code': 'cl-c',
    address: 'Unnamed Road, Isla de Pascua, Valparaíso Region, Chile',
    location: {
      latitude: -27.1384,
      longitude: -109.4275,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'pool'],
    web: 'https://www.explora.com/hotels-and-travesias/easter-island/explora-rapa-nui/',
    images: [
      {
        small: '/assets/Explora-Rapa-Nui/bikes-small.jpg',
        large: '/assets/Explora-Rapa-Nui/bikes.jpg',
      },
      {
        small: '/assets/Explora-Rapa-Nui/hiking-small.jpg',
        large: '/assets/Explora-Rapa-Nui/hiking.jpg',
      },
      {
        small: '/assets/Explora-Rapa-Nui/horse-small.jpg',
        large: '/assets/Explora-Rapa-Nui/horse.jpg',
      },
      {
        small: '/assets/Explora-Rapa-Nui/stargazing-small.jpg',
        large: '/assets/Explora-Rapa-Nui/stargazing.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Pedro', date: '01.06.2023 10:00', text: '¡Asombroso lugar!' },
      {
        name: 'Ірина',
        date: '02.06.2023 12:00',
        text: 'Прекрасне місце для пригод.',
      },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Fascinating island.' },
    ],
  },
  {
    id: 40,
    name: 'Amangani',
    activities: ['sport', 'rock-climbing', 'skiing-snowboarding', 'outdoors'],
    'loc-code': 'us-c',
    address: '1535 NE Butte Road, Jackson, Wyoming 83001, USA',
    location: {
      latitude: 43.5285,
      longitude: -110.666,
    },
    rating: 4.7,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'gym'],
    web: 'https://www.aman.com/resorts/amangani',
    images: [
      {
        small: '/assets/Amangani/mountain-small.jpg',
        large: '/assets/Amangani/mountain.jpg',
      },
      {
        small: '/assets/Amangani/mountain-views-small.jpg',
        large: '/assets/Amangani/mountain-views.jpg',
      },
      {
        small: '/assets/Amangani/skiing-small.jpg',
        large: '/assets/Amangani/skiing.jpg',
      },
    ],
    defaultReviews: [
      {
        name: 'Michael',
        date: '01.06.2023 10:00',
        text: 'Fantastic mountain retreat!',
      },
      { name: 'Іван', date: '02.06.2023 12:00', text: 'Чудове місце в горах.' },
      { name: 'Sarah', date: '03.06.2023 14:00', text: 'Beautiful scenery.' },
    ],
  },
  {
    id: 41,
    name: 'Southern Ocean Lodge',
    activities: ['wildlife exploration', 'relax', 'wine-tasting', 'outdoors'],
    'loc-code': 'au-c',
    address:
      'Hanson Bay Road, Kangaroo Island, South Australia 5222, Australia',
    location: {
      latitude: -36.0357,
      longitude: 137.2335,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'library'],
    web: 'https://southernoceanlodge.com.au/',
    images: [
      {
        small: '/assets/Southern-Ocean-Lodge/vine-tour-small.jpg',
        large: '/assets/Southern-Ocean-Lodge/vine-tour.jpg',
      },
      {
        small: '/assets/Southern-Ocean-Lodge/vine-small.jpg',
        large: '/assets/Southern-Ocean-Lodge/vine.jpg',
      },
      {
        small: '/assets/Southern-Ocean-Lodge/wild-nature-small.jpg',
        large: '/assets/Southern-Ocean-Lodge/wild-nature.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Liam', date: '01.06.2023 10:00', text: 'Amazing wildlife!' },
      { name: 'Оксана', date: '02.06.2023 12:00', text: 'Чудова природа.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Unique experience.' },
    ],
  },
  {
    id: 42,
    name: 'Explora Patagonia',
    activities: [
      'canyon exploration',
      'forest hikes',
      'lake excursions',
      'outdoors',
    ],
    'loc-code': 'cl-c',
    address: 'Hotel Salto Chico, Torres del Paine National Park, Chile',
    location: {
      latitude: -50.9423,
      longitude: -73.4068,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'bar'],
    web: 'https://www.explora.com/patagonia/',
    images: [
      {
        small: '/assets/Explora-Patagonia/canyon-small.jpg',
        large: '/assets/Explora-Patagonia/canyon.jpg',
      },
      {
        small: '/assets/Explora-Patagonia/forest-hiking-small.jpg',
        large: '/assets/Explora-Patagonia/forest-hiking.jpg',
      },
      {
        small: '/assets/Explora-Patagonia/lake-excursions-small.jpg',
        large: '/assets/Explora-Patagonia/lake-excursions.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Carlos', date: '01.06.2023 10:00', text: 'Increíble aventura!' },
      {
        name: 'Петро',
        date: '02.06.2023 12:00',
        text: 'Чудове місце для відпочинку.',
      },
      {
        name: 'Emily',
        date: '03.06.2023 14:00',
        text: 'Beautiful landscapes.',
      },
    ],
  },
  {
    id: 43,
    name: 'The Brando',
    activities: ['snorkeling', 'kayaking', 'water-sports', 'outdoors', 'sport'],
    'loc-code': 'pf-c',
    address: 'Tetiaroa Private Island, Arue, French Polynesia',
    location: {
      latitude: -17.5695,
      longitude: -149.6079,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'beach'],
    web: 'https://thebrando.com/',
    images: [
      {
        small: '/assets/The-Brando/paddleboarding-small.jpg',
        large: '/assets/The-Brando/paddleboarding.jpg',
      },
      {
        small: '/assets/The-Brando/kayaking-small.jpg',
        large: '/assets/The-Brando/kayaking.jpg',
      },
      {
        small: '/assets/The-Brando/underwater-small.jpg',
        large: '/assets/The-Brando/underwater.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Teva', date: '01.06.2023 10:00', text: 'Paradise island!' },
      { name: 'Юлія', date: '02.06.2023 12:00', text: 'Райське місце.' },
      { name: 'Sarah', date: '03.06.2023 14:00', text: 'Beautiful waters.' },
    ],
  },
  {
    id: 44,
    name: 'Ladera Resort',
    activities: ['ziplining', 'hiking', 'sulphur springs visit', 'outdoors'],
    'loc-code': 'lc-c',
    address: 'Soufrière, St Lucia',
    location: {
      latitude: 13.8569,
      longitude: -61.0565,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'pool'],
    web: 'https://www.ladera.com/',
    images: [
      {
        small: '/assets/Ladera-Resort/zipping-small.jpg',
        large: '/assets/Ladera-Resort/zipping.jpg',
      },
      {
        small: '/assets/Ladera-Resort/hiking-small.jpg',
        large: '/assets/Ladera-Resort/hiking.jpg',
      },
      {
        small: '/assets/Ladera-Resort/hiking-again-small.jpg',
        large: '/assets/Ladera-Resort/hiking-again.jpg',
      },
      {
        small: '/assets/Ladera-Resort/sulphur-springs-visit-small.jpg',
        large: '/assets/Ladera-Resort/sulphur-springs-visit.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Jamal', date: '01.06.2023 10:00', text: 'Amazing adventure!' },
      {
        name: 'Олексій',
        date: '02.06.2023 12:00',
        text: 'Дуже цікаві пригоди.',
      },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Beautiful scenery.' },
    ],
  },
  {
    id: 45,
    name: 'The Datai Langkawi',
    activities: [
      'rainforest walks',
      'guided nature tours',
      'yoga',
      'outdoors',
      'relax',
      'golf',
    ],
    'loc-code': 'my-c',
    address: 'Jalan Teluk Datai, 07000 Langkawi, Kedah, Malaysia',
    location: {
      latitude: 6.4254,
      longitude: 99.7089,
    },
    rating: 4.8,
    price: 'luxury',
    comfort: ['restaurant', 'spa'],
    web: 'https://www.thedatai.com/langkawi/',
    images: [
      {
        small: '/assets/The-Datai-Langkawi/forrest-small.jpg',
        large: '/assets/The-Datai-Langkawi/forrest.jpg',
      },
      {
        small: '/assets/The-Datai-Langkawi/nature-small.jpg',
        large: '/assets/The-Datai-Langkawi/nature.jpg',
      },
      {
        small: '/assets/The-Datai-Langkawi/beach-yoga-small.jpg',
        large: '/assets/The-Datai-Langkawi/beach-yoga.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Zain', date: '01.06.2023 10:00', text: 'Incredible nature!' },
      { name: 'Ірина', date: '02.06.2023 12:00', text: 'Прекрасна природа.' },
      {
        name: 'Sarah',
        date: '03.06.2023 14:00',
        text: 'Beautiful surroundings.',
      },
    ],
  },
  {
    id: 46,
    name: 'Amanwana',
    activities: ['outdoors', 'sport', 'hiking', 'water-sports'],
    'loc-code': 'id-c',
    address: 'Moyo Island, Sumbawa, West Nusa Tenggara, Indonesia',
    location: {
      latitude: -8.3028,
      longitude: 117.3863,
    },
    rating: 4.7,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'beach'],
    web: 'https://www.aman.com/resorts/amanwana',
    images: [
      {
        small: '/assets/Amanwana/diving-small.jpg',
        large: '/assets/Amanwana/diving.jpg',
      },
      {
        small: '/assets/Amanwana/snorkeling-small.jpg',
        large: '/assets/Amanwana/snorkeling.jpg',
      },
      {
        small: '/assets/Amanwana/jungle-small.jpg',
        large: '/assets/Amanwana/jungle.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Budi', date: '01.06.2023 10:00', text: 'Wonderful adventure!' },
      { name: 'Олена', date: '02.06.2023 12:00', text: 'Дуже цікаві пригоди.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Beautiful island.' },
    ],
  },
  {
    id: 47,
    name: 'Singita Lebombo Lodge',
    activities: ['safari', 'hiking', 'outdoors', 'relax'],
    'loc-code': 'za-c',
    address: "N'wanetsi Concession, Kruger National Park, South Africa",
    location: {
      latitude: -24.3083,
      longitude: 31.7053,
    },
    rating: 4.9,
    price: 'luxury',
    comfort: ['restaurant', 'spa', 'pool'],
    web: 'https://singita.com/lebombo-lodge/',
    images: [
      {
        small: '/assets/Singita-Lebombo-Lodge/safari-ride-small.jpg',
        large: '/assets/Singita-Lebombo-Lodge/safari-ride.jpg',
      },
      {
        small: '/assets/Singita-Lebombo-Lodge/stargazing-small.jpg',
        large: '/assets/Singita-Lebombo-Lodge/stargazing.jpg',
      },
      {
        small: '/assets/Singita-Lebombo-Lodge/stars-small.jpg',
        large: '/assets/Singita-Lebombo-Lodge/stars.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Sipho', date: '01.06.2023 10:00', text: 'Amazing safari!' },
      { name: 'Петро', date: '02.06.2023 12:00', text: 'Чудові пригоди.' },
      { name: 'Emily', date: '03.06.2023 14:00', text: 'Unique experience.' },
    ],
  },
  {
    id: 48,
    name: 'Hotel France',
    activities: ['outdoors', 'sport', 'art', 'cycling', 'music'],
    address: 'Soborna Street, Vinnytsia, Ukraine',
    'loc-code': 'ua-с',
    location: {
      latitude: 49.2331,
      longitude: 28.4682,
    },
    rating: 4.5,
    price: 'budget',
    comfort: ['restaurant', 'parking', 'wifi', 'bar'],
    web: 'http://www.hotelfrance.com',
    images: [
      {
        small: '/assets/Hotel-France/concert-small.jpg',
        large: '/assets/Hotel-France/concert.jpg',
      },
      {
        small: '/assets/Hotel-France/singer-small.jpg',
        large: '/assets/Hotel-France/singer.jpg',
      },
      {
        small: '/assets/Hotel-France/painting-small.jpg',
        large: '/assets/Hotel-France/painting.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Василь', date: '01.06.2023 10:00', text: 'Чудовий готель!' },
      { name: 'Eva', date: '02.06.2023 12:00', text: 'Skvělá poloha.' },
      { name: 'John', date: '03.06.2023 14:00', text: 'Great location.' },
    ],
  },
  {
    id: 49,
    name: 'Safari Club',
    activities: ['pool', 'sport', 'horse-riding'],
    address: '1A, Tsentralna Street, Vinnytsia, Ukraine',
    'loc-code': 'ua-с',
    location: {
      latitude: 49.2475,
      longitude: 28.4953,
    },
    rating: 4.2,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'spa', 'restaurant', 'gym'],
    web: 'http://www.safari-club.com',
    images: [
      {
        small: '/assets/Safari-Club/safari-small.jpg',
        large: '/assets/Safari-Club/safari.jpg',
      },
      {
        small: '/assets/Safari-Club/horse-kid-small.jpg',
        large: '/assets/Safari-Club/horse-kid.jpg',
      },
      {
        small: '/assets/Safari-Club/safari-sunset-small.jpg',
        large: '/assets/Safari-Club/safari-sunset.jpg',
      },
    ],
  },
  {
    id: 50,
    name: 'Fenix Town',
    activities: ['relax', 'spa', 'sport', 'bowling', 'billiard'],
    address: 'Khlebnaya Street 15, Vinnytsia, Ukraine',
    'loc-code': 'ua-c',
    location: {
      latitude: 49.2345,
      longitude: 28.463,
    },
    rating: 4.3,
    price: 'budget',
    comfort: ['wifi', 'parking', 'gym', 'restaurant'],
    web: 'http://www.fenixtown.com',
    images: [
      {
        small: '/assets/Fenix-Town/billiard-small.jpg',
        large: '/assets/Fenix-Town/billiard.jpg',
      },
      {
        small: '/assets/Fenix-Town/bowling-small.jpg',
        large: '/assets/Fenix-Town/bowling.jpg',
      },
      {
        small: '/assets/Fenix-Town/relax-small.jpg',
        large: '/assets/Fenix-Town/relax.jpg',
      },
      {
        small: '/assets/Fenix-Town/spa-small.jpg',
        large: '/assets/Fenix-Town/spa.jpg',
      },
    ],
  },
  {
    id: 51,
    name: 'Fairmont Grand Hotel Kyiv',
    activities: ['relax'],
    address: 'Naberezhno-Khreshchatytska Street 1, Kyiv, Ukraine',
    'loc-code': 'ua-c',
    location: {
      latitude: 50.4606,
      longitude: 30.5302,
    },
    rating: 5,
    price: 'luxury',
    comfort: ['wifi', 'parking', 'spa', 'restaurant', 'bar'],
    web: 'https://www.fairmont.com/kyiv/',
    images: [
      {
        small: '/assets/Fairmont-Grand-Hotel-Kyiv/bath-small.jpg',
        large: '/assets/Fairmont-Grand-Hotel-Kyiv/bath.jpg',
      },
      {
        small: '/assets/Fairmont-Grand-Hotel-Kyiv/massage-small.jpg',
        large: '/assets/Fairmont-Grand-Hotel-Kyiv/massage.jpg',
      },
      {
        small: '/assets/Fairmont-Grand-Hotel-Kyiv/sauna-small.jpg',
        large: '/assets/Fairmont-Grand-Hotel-Kyiv/sauna.jpg',
      },
    ],
  },
  {
    id: 52,
    name: 'Lisotel',
    activities: [
      'relax',
      'art',
      'outdoors',
      'kids',
      'painting',
      'crafts',
      'cycling',
    ],
    address: 'Pishchane Tract 7, Rokytne 09600 Ukraine',
    'loc-code': 'ua-c',
    location: {
      latitude: 49.6808,
      longitude: 30.4188,
    },
    rating: 5,
    price: 'luxury',
    comfort: [
      'wifi',
      'parking',
      'pool',
      'restaurant',
      'pets',
      'lake',
      'fireplace',
    ],
    web: 'https://lisotel.com.ua/en/',
    images: [
      {
        small: '/assets/Lisotel/motanka-small.png',
        large: '/assets/Lisotel/motanka.png',
      },
      {
        small: '/assets/Lisotel/horse-small.png',
        large: '/assets/Lisotel/horse.png',
      },
      {
        small: '/assets/Lisotel/lake-small.png',
        large: '/assets/Lisotel/lake.png',
      },
      {
        small: '/assets/Lisotel/baking-small.png',
        large: '/assets/Lisotel/baking.png',
      },
      {
        small: '/assets/Lisotel/restaurant-small.png',
        large: '/assets/Lisotel/restaurant.png',
      },
    ],
    defaultReviews: [
      {
        name: 'Василь',
        date: '01.06.2023 10:00',
        text: 'Прекрасний відпочинок!',
      },
      { name: 'Eva', date: '02.06.2023 12:00', text: 'Úžasné místo.' },
      { name: 'John', date: '03.06.2023 14:00', text: 'Wonderful stay.' },
    ],
  },
  {
    id: 53,
    name: 'Opera Hotel',
    activities: ['relax', 'spa', 'wine-tasting'],
    address: 'B. Khmelnitskogo St., 53, Kyiv, Ukraine',
    'loc-code': 'ua-c',
    location: {
      latitude: 50.45,
      longitude: 30.5,
    },
    rating: 5,
    price: 'luxury',
    description:
      "Opera Hotel combines luxury and cultural charm, offering unique themed suites and comprehensive spa services. The hotel's award-winning wine list is a highlight for connoisseurs.",
    comfort: ['wifi', 'parking', 'spa', 'restaurant'],
    web: 'https://opera-hotel.com/',
    images: [
      {
        small: '/assets/Opera-Hotel/piano-music-small.jpg',
        large: '/assets/Opera-Hotel/piano-music.jpg',
      },
      {
        small: '/assets/Opera-Hotel/vine-small.jpg',
        large: '/assets/Opera-Hotel/vine.jpg',
      },
      {
        small: '/assets/Opera-Hotel/spa-small.jpg',
        large: '/assets/Opera-Hotel/spa.jpg',
      },
    ],
  },
  {
    id: 54,
    name: 'Hotel Flamingo',
    activities: ['outdoors', 'sport', 'kids', 'tennis', 'beach', 'relax'],
    'loc-code': 'es-c',
    address: "Avinguda de Grècia, 5, 17258 L'Estartit, Girona, Spain",
    location: {
      latitude: 42.0503,
      longitude: 3.1977,
    },
    rating: 4,
    price: 'midrange',
    description:
      'Hotel Flamingo offers comfortable accommodation and tennis facilities in a beautiful coastal setting. Guests can enjoy a range of activities including tennis, swimming in the outdoor pool, and exploring the nearby beaches.',
    comfort: ['wifi', 'parking', 'pool', 'restaurant', 'beach'],
    web: 'https://www.hotelpanoramaestartit.com/',
    images: [
      {
        small: '/assets/Hotel-Flamingo/kid-paint-small.jpg',
        large: '/assets/Hotel-Flamingo/kid-paint.jpg',
      },
      {
        small: '/assets/Hotel-Flamingo/kids-in-the-pool-small.jpg',
        large: '/assets/Hotel-Flamingo/kids-in-the-pool.jpg',
      },
      {
        small: '/assets/Hotel-Flamingo/tennis-small.jpg',
        large: '/assets/Hotel-Flamingo/tennis.jpg',
      },
    ],
  },
  {
    id: 55,
    name: 'Novotel Phuket Resort',
    activities: ['outdoors', 'sport', 'tennis', 'relax', 'beach'],
    'loc-code': 'th-c',
    address:
      'Patong Beach, 282 Phrabaramee Rd, Pa Tong, Kathu District, Phuket 83150, Thailand',
    location: {
      latitude: 7.9079,
      longitude: 98.2973,
    },
    rating: 4,
    price: 'midrange',
    description:
      'Overlooking Patong Beach, this hotel offers tennis courts, a fitness center, and three tiered swimming pools. It’s a great option for those wanting to enjoy both tennis and the vibrant life of Phuket.',
    comfort: ['wifi', 'parking', 'pool', 'restaurant', 'gym', 'beach'],
    web: 'https://all.accor.com/hotel/1965/index.en.shtml',
    images: [
      {
        small: '/assets/Novotel-Phuket-Resort/relax-small.jpg',
        large: '/assets/Novotel-Phuket-Resort/relax.jpg',
      },
      {
        small: '/assets/Novotel-Phuket-Resort/candles-small.jpg',
        large: '/assets/Novotel-Phuket-Resort/candles.jpg',
      },
      {
        small: '/assets/Novotel-Phuket-Resort/tennis-small.jpg',
        large: '/assets/Novotel-Phuket-Resort/tennis.jpg',
      },
    ],
  },
  {
    id: 56,
    name: 'Hotel Panorama',
    activities: ['outdoors', 'sport', 'tennis', 'spa', 'relax'],
    'loc-code': 'cs-c',
    address: 'V Lomech 11, 323 00 Plzeň 1, Czech Republic',
    location: {
      latitude: 49.75,
      longitude: 13.3775,
    },
    rating: 3,
    price: 'midrange',
    description:
      'Situated in the city of Plzeň, Hotel Panorama provides tennis facilities along with a wellness center and comfortable rooms. The hotel is also close to the city center, making it convenient for exploring local attractions.',
    comfort: ['wifi', 'parking', 'restaurant'],
    web: 'http://www.panorama-pm.cz/',
    images: [
      {
        small: '/assets/Hotel-Panorama/relax-small.jpg',
        large: '/assets/Hotel-Panorama/relax.jpg',
      },
      {
        small: '/assets/Hotel-Panorama/spa-small.jpg',
        large: '/assets/Hotel-Panorama/spa.jpg',
      },
      {
        small: '/assets/Hotel-Panorama/tennis-small.jpg',
        large: '/assets/Hotel-Panorama/tennis.jpg',
      },
    ],
  },
  {
    id: 57,
    name: 'Hôtel de Paris Monte-Carlo',
    activities: [
      'outdoors',
      'sport',
      'spa',
      'relax',
      'casino',
      'gourmet-dining',
    ],
    'loc-code': 'mc-c',
    address: 'Place du Casino, 98000 Monaco',
    location: {
      latitude: 43.7384,
      longitude: 7.4286,
    },
    rating: 5,
    price: 'luxury',
    description:
      'The Hôtel de Paris Monte-Carlo is an iconic luxury hotel located in the heart of Monaco. The hotel features an on-premises casino, a world-class spa, exquisite dining options, and luxury shopping. It is renowned for its elegance and sophistication, offering guests a truly memorable stay.',
    comfort: [
      'wifi',
      'valet-parking',
      'pool',
      'restaurant',
      'spa',
      'fitness-center',
    ],
    web: 'https://www.montecarlosbm.com/en/hotel-monaco/hotel-paris-monte-carlo',
    images: [
      {
        small: '/assets/Hotel-de-Paris-Monte-Carlo/casino-small.jpg',
        large: '/assets/Hotel-de-Paris-Monte-Carlo/casino.jpg',
      },
      {
        small: '/assets/Hotel-de-Paris-Monte-Carlo/casino-royal-small.jpg',
        large: '/assets/Hotel-de-Paris-Monte-Carlo/casino-royal.jpg',
      },
      {
        small: '/assets/Hotel-de-Paris-Monte-Carlo/dining-small.jpg',
        large: '/assets/Hotel-de-Paris-Monte-Carlo/dining.jpg',
      },
    ],
    defaultReviews: [
      { name: 'Ірина', date: '01.06.2023 10:00', text: 'Прекрасний готель!' },
      { name: 'Eva', date: '02.06.2023 12:00', text: 'Úžasné služby.' },
      { name: 'John', date: '03.06.2023 14:00', text: 'Luxury and charm.' },
    ],
  },
  {
    id: 58,
    name: 'Dolina Charlotty Resort & Spa',
    activities: [
      'outdoors',
      'sport',
      'kids',
      'relax',
      'horse-riding',
      'spa',
      'bowling',
      'billiard',
      'water-safari',
      'fishing',
    ],
    'loc-code': 'pl-c',
    address: 'Strzelinko 14, 76-200 Słupsk, Poland',
    location: {
      latitude: 54.4828,
      longitude: 16.9226,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'pool', 'restaurant', 'playground'],
    web: 'https://www.dolinacharlotty.pl',
    images: [{
      small: '/assets/Dolina-Charlotty-Resort-&-Spa/billiard-small.jpg',
      large: '/assets/Dolina-Charlotty-Resort-&-Spa/billiard.jpg',
    },
    {
      small: '/assets/Dolina-Charlotty-Resort-&-Spa/water-safari-small.jpg',
      large: '/assets/Dolina-Charlotty-Resort-&-Spa/water-safari.jpg',
    },
    {
      small: '/assets/Dolina-Charlotty-Resort-&-Spa/fishing-small.jpg',
      large: '/assets/Dolina-Charlotty-Resort-&-Spa/fishing.jpg',
    },
    {
      small: '/assets/Dolina-Charlotty-Resort-&-Spa/bowling-small.jpg',
      large: '/assets/Dolina-Charlotty-Resort-&-Spa/bowling.jpg',
    },
    {
      small: '/assets/Dolina-Charlotty-Resort-&-Spa/horse-riding-small.jpg',
      large: '/assets/Dolina-Charlotty-Resort-&-Spa/horse-riding.jpg',
    },
    {
      small: '/assets/Dolina-Charlotty-Resort-&-Spa/spa-small.jpg',
      large: '/assets/Dolina-Charlotty-Resort-&-Spa/spa.jpg',
    },
  ],
    defaultReviews: [
      {
        name: 'Jan',
        date: '01.06.2023 10:00',
        text: 'Hezký hotel!',
      },
      {
        name: 'Олена',
        date: '02.06.2023 12:00',
        text: 'Готель просто прекрасний! Неперевершене місце. Була здивована',
      },
      {
        name: 'John',
        date: '03.06.2023 14:00',
        text: 'Beautiful location and great service.',
      },
    ],
  },
  {
    id: 59,
    name: 'Hotel Arłamów',
    activities: [
      'outdoors',
      'sport',
      'kids',
      'relax',
      'skiing',
      'spa',
      'tennis',
      'golf',
      'cycling',
      'climbing',
    ],
    'loc-code': 'pl-c',
    address: 'Arłamów, 38-700 Ustrzyki Dolne, Poland',
    location: {
      latitude: 49.6048,
      longitude: 22.6351,
    },
    rating: 5,
    price: 'high',
    comfort: ['wifi', 'parking', 'pool', 'restaurant', 'gym'],
    web: 'https://www.arlamow.pl',
    images: [{
      small: '/assets/Hotel-Arłamów/climbing-small.jpg',
      large: '/assets/Hotel-Arłamów/climbing.jpg',
    },
    {
      small: '/assets/Hotel-Arłamów/cycling-small.jpg',
      large: '/assets/Hotel-Arłamów/cycling.jpg',
    },
    {
      small: '/assets/Hotel-Arłamów/golf-small.jpg',
      large: '/assets/Hotel-Arłamów/golf.jpg',
    },
    {
      small: '/assets/Hotel-Arłamów/skiing-small.jpg',
      large: '/assets/Hotel-Arłamów/skiing.jpg',
    },
    {
      small: '/assets/Hotel-Arłamów/tennis-small.jpg',
      large: '/assets/Hotel-Arłamów/tennis.jpg',
    },
    {
      small: '/assets/Hotel-Arłamów/spa-small.jpg',
      large: '/assets/Hotel-Arłamów/spa.jpg',
    },],
    defaultReviews: [
      {
        name: 'Petr',
        date: '01.06.2023 10:00',
        text: 'Fantastic amenities and views!',
      },
      {
        name: 'Іван',
        date: '02.06.2023 12:00',
        text: 'Ідеально для тих, хто не може жити без спорту',
      },
      {
        name: 'Michael',
        date: '03.06.2023 14:00',
        text: 'Luxurious stay with great activities.',
      },
    ],
  },
  {
    id: 60,
    name: 'Hotel Warszawianka',
    activities: [
      'outdoors',
      'sport',
      'kids',
      'relax',
      'water-park',
      'spa',
      'bowling',
      'tennis',
      'cycling',
      'kayaking',
    ],
    'loc-code': 'pl-c',
    address: 'Jachranka 77, 05-140 Serock, Poland',
    location: {
      latitude: 52.4915,
      longitude: 20.9248,
    },
    rating: 4,
    price: 'midrange',
    comfort: ['wifi', 'parking', 'pool', 'restaurant', 'gym'],
    web: 'https://www.warszawianka.pl',
    images: [{
      small: '/assets/Hotel-Warszawianka/kayaking-small.jpg',
      large: '/assets/Hotel-Warszawianka/kayaking.jpg',
    },
    {
      small: '/assets/Hotel-Warszawianka/cycling-small.jpg',
      large: '/assets/Hotel-Warszawianka/cycling.jpg',
    },
    {
      small: '/assets/Hotel-Warszawianka/bowling-small.jpg',
      large: '/assets/Hotel-Warszawianka/bowling.jpg',
    },
    {
      small: '/assets/Hotel-Warszawianka/water-park-small.jpg',
      large: '/assets/Hotel-Warszawianka/water-park.jpg',
    },
    {
      small: '/assets/Hotel-Warszawianka/tennis-small.jpg',
      large: '/assets/Hotel-Warszawianka/tennis.jpg',
    },
    {
      small: '/assets/Hotel-Warszawianka/spa-small.jpg',
      large: '/assets/Hotel-Warszawianka/spa.jpg',
    },],
    defaultReviews: [
      {
        name: 'Anna',
        date: '01.06.2023 10:00',
        text: 'Great for family vacations.',
      },
      {
        name: 'Олександр',
        date: '02.06.2023 12:00',
        text: 'Loved the water park.',
      },
      {
        name: 'Emily',
        date: '03.06.2023 14:00',
        text: 'Excellent facilities and service.',
      },
    ],
  },
];

export default hotels;
