const hotels = [
  {
    "name": "Equitana Hotel Resort",
    "activities": ["outdoors", "sport", "kids", "horse-riding", "spa", "relax", "bowling", "billiard", "minigolf", "jogging track", "fishing"],
    "loc-code": "cs-c",
    "address": "Martinice 1, 262 72 Březnice, Czech Republic",
    "location": {
      "latitude": 49.5791,
      "longitude": 13.8301
    },
    "rating": 4,
    "price": "midrange",
    "description": "The most beautiful view in the world is from the back of a horse. It's true. Don't be afraid and try horse riding with us. At our riding arena, we organize competitions such as the Czech Republic Championship in show jumping, but we also offer our services to absolute beginners in horse riding. Small children, parents, or even everyone together can enjoy a ride on horseback.",
    "comfort": ["wifi", "parking", "pool", "restaurant"],
    "web": "http://www.equitana.cz",
    "images": ["/assets/Equitana/horse-kid.jpg"]
  },
  {
    "name": "Hotel Kouty",
    "activities": ["outdoors", "sport", "tennis", "beach volleyball", "paddleboard", "yoga", "relax"],
    "loc-code": "cs-c",
    "address": "Zblovice 63, 675 26 Zblovice, Czech Republic",
    "location": {
      "latitude": 49.1060,
      "longitude": 15.6450
    },
    "rating": 4,
    "price": "midrange",
    "description": "The hotel is situated in a 10 hectare forest area with its own 2.5 hectare pond, in a picturesque valley at the foot of Melechov Hill. In the vicinity of the cottages flows a stream that feeds a trout pond with one of the cleanest waters in the Czech Republic. There are two tennis courts with artificial surface, playground, trampoline, beach volleyball court, gym, table tennis and sauna. Our little guests have at their disposal a playground and a trampoline. A few hundred meters away, there is a private fishing district in the village of Kouty – Homole Pond. You can catch trout, carp, or zander catfish. Allowances can be picked up at the hotel reception by prior arrangement.",
    "comfort": ["wifi", "parking", "sauna", "restaurant"],
    "web": "http://www.hotelkouty.cz",
    "images": []
  },
  {
    "name": "Golf Resort Olomouc",
    "activities": ["outdoors", "golf"],
    "loc-code": "cs-c",
    "address": "Dolany-Véska 89, 783 16 Dolany, Czech Republic",
    "location": {
      "latitude": 49.6350,
      "longitude": 17.3023
    },
    "rating": 4,
    "price": "midrange",
    "description": "A four-star hotel ideal for golf enthusiasts, offering rooms with a view of the championship course. The resort provides a rich breakfast buffet, free Wi-Fi, parking, and pet-friendly accommodations.",
    "comfort": ["wifi", "parking", "pets", "restaurant", "gym", "club rentals"],
    "web": "https://www.golfolomouc.cz/en/hotel/hotel",
    "images": ["../ass"]
  },
  {
    "name": "Caribe Bay",
    "activities": ["kids", "aquapark"],
    "loc-code": "it-c",
    "address": "Via Michelangelo Buonarroti, 15, 30016 Lido di Jesolo, Venice, Italy",
    "location": {
      "latitude": 45.5128,
      "longitude": 12.6446
    },
    "rating": 4,
    "price": "midrange",
    "description": "Caribe Bay is a Caribbean-themed water park offering a variety of attractions, including slides, pools, and live shows. It's a popular destination for family fun and water-based activities.",
    "comfort": ["pool", "restaurant", "wifi"],
    "web": "https://www.caribebay.it/en",
    "images": []
  },
  {
    "name": "Six Senses Douro Valley",
    "activities": ["art", "painting", "sport", "water sports", "cooking masterclass", "port wine tasting"],
    "loc-code": "pt-c",
    "address": "Quinta Vale de Abraão, Samodães, 5100-758 Lamego, Portugal",
    "location": {
      "latitude": 41.1610,
      "longitude": -7.7851
    },
    "rating": 5,
    "price": "luxury",
    "description": "This luxurious resort in the Douro Valley offers a blend of relaxation and activities, including cooking classes, wine tasting, and water sports. It is nestled in a picturesque vineyard setting.",
    "comfort": ["wifi", "restaurant", "pool", "wine cellar"],
    "web": "https://www.sixsenses.com/en/resorts/douro-valley/experiences/",
    "images": []
  },
  {
    "name": "The Boulders Resort",
    "activities": ["golf", "hot air balloons", "rock climbing", "outdoors", "sport"],
    "loc-code": "us-c",
    "address": "34631 N Tom Darlington Dr, Scottsdale, AZ 85262, USA",
    "location": {
      "latitude": 33.8466,
      "longitude": -111.9277
    },
    "rating": 5,
    "price": "luxury",
    "description": "Located in the Sonoran Desert, this resort offers unique outdoor adventures, including golf on its renowned courses, rock climbing, and hot air balloon rides.",
    "comfort": ["wifi", "gym", "restaurant"],
    "web": "https://www.theboulders.com/outdoor-adventures/",
    "images": []
  },
  {
    "name": "The Residences at Chevy Chase",
    "activities": ["pillow fighting", "relax"],
    "loc-code": "us-c",
    "address": "8551 Connecticut Ave, Chevy Chase, MD 20815, USA",
    "location": {
      "latitude": 38.9965,
      "longitude": -77.0690
    },
    "rating": 0,
    "price": "luxury",
    "description": "A unique residence offering an unusual activity of pillow fighting for $60, among other luxury amenities.",
    "comfort": ["gym", "library", "pet"],
    "web": "https://www.theresidenceschevychase.com/",
    "images": []
  },
  {
    "name": "Loews Coronado Bay Resort",
    "activities": ["surfing for dogs", "outdoors", "sport"],
    "loc-code": "us-c",
    "address": "4000 Coronado Bay Road, Coronado, CA 92118, USA",
    "location": {
      "latitude": 32.6325,
      "longitude": -117.1384
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Loews Coronado Bay Resort offers unique experiences including surfing lessons for dogs. Located on a private 15-acre peninsula, the resort is a tranquil waterfront oasis featuring stunning views of the Pacific Ocean and the San Diego skyline.",
    "comfort": ["wifi", "parking", "pool", "restaurant"],
    "web": "https://www.loewshotels.com/coronado-bay-resort",
    "images": []
  },
  {
    "name": "Obriy Village",
    "activities": ["traditional Ukrainian hot tubs", "horse riding", "relax", "outdoors", "sport"],
    "loc-code": "ua-c",
    "address": "Opishnya, Poltava region, Ukraine",
    "location": {
      "latitude": 49.9722,
      "longitude": 34.6083
    },
    "rating": 4.5,
    "price": "budget",
    "description": "Obriy Village offers unforgettable experiences in traditional Ukrainian hot tubs and horse riding through the picturesque surroundings of Opishnya. It's a place where you can truly appreciate the beauty of Ukrainian nature and hospitality.",
    "comfort": ["wifi", "parking", "restaurant", "spa"],
    "web": "https://obriyvillage.com/",
    "images": []
  },
  {
    "name": "Concept Stay Sirimiri",
    "activities": ["horse riding", "hot tubs", "relax", "outdoors", "sport"],
    "loc-code": "ua-c",
    "address": "Yaremche, Ukraine",
    "location": {
      "latitude": 48.4482,
      "longitude": 24.5527
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Concept Stay Sirimiri offers a unique stay with activities like horse riding and relaxing in hot tubs, set in the beautiful Carpathian Mountains. This retreat is perfect for those looking to connect with nature and unwind.",
    "comfort": ["wifi", "parking", "restaurant", "spa"],
    "web": "https://en.concept-stay.com/sirimiri",
    "images": []
  },
  {
    "name": "Scandi Eco Park",
    "activities": ["kids", "sport", "outdoors", "pet therapy", "husky dogs", "horse riding", "bikejoring", "trekking"],
    "loc-code": "ua-c",
    "address": "Chernihiv, Ukraine",
    "location": {
      "latitude": 51.4982,
      "longitude": 31.2893
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Scandi Eco Park offers a variety of outdoor and therapeutic activities including pet therapy, husky dog interactions, horse riding, bikejoring, and trekking. It's an eco-friendly destination designed for nature lovers.",
    "comfort": ["wifi", "parking", "restaurant", "spa"],
    "web": "https://www.facebook.com/scandi.eco.park/",
    "images": []
  },
  {
    "name": "Aves Travel",
    "activities": ["hot springs", "relax"],
    "loc-code": "ua-c",
    "address": "Various locations, Ukraine",
    "location": {
      "latitude": 48.3794,
      "longitude": 31.1656
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Aves Travel offers curated stays at various hot spring resorts across Ukraine, providing rejuvenating experiences in natural thermal waters. These resorts are perfect for relaxation and health benefits.",
    "comfort": ["wifi", "parking", "restaurant", "spa"],
    "web": "https://www.avestravel.com.ua/hotel_list/goteli-z-garjachimi-dzherelami-v-ukraini/",
    "images": []
  },
  {
    "name": "The Manta Resort",
    "activities": ["underwater hotel", "outdoors", "relax"],
    "loc-code": "tz-c",
    "address": "Pemba Island, Tanzania",
    "location": {
      "latitude": -5.2350,
      "longitude": 39.7763
    },
    "rating": 5,
    "price": "luxury",
    "description": "The Manta Resort offers an extraordinary experience with its underwater room, providing stunning views of the marine life in the crystal-clear waters of the Indian Ocean. It's a unique and luxurious escape on Pemba Island.",
    "comfort": ["wifi", "parking", "restaurant", "spa"],
    "web": "https://themantaresort.com/",
    "images": []
  },
  {
    "name": "Poseidon Undersea Resorts",
    "activities": ["underwater hotel", "relax", "outdoors"],
    "loc-code": "fj-c",
    "address": "Fiji Island",
    "location": {
      "latitude": -17.7134,
      "longitude": 178.0650
    },
    "rating": 5,
    "price": "luxury",
    "description": "Poseidon Undersea Resorts offers a unique experience of staying underwater in luxury suites, surrounded by the vibrant marine life of the Fijian islands. It's an unparalleled underwater adventure.",
    "comfort": ["wifi", "restaurant", "spa"],
    "web": "https://www.poseidonresorts.com/",
    "images": []
  },
  {
    "name": "Icehotel",
    "activities": ["ice hotel", "art"],
    "loc-code": "se-c",
    "address": "Marknadsvägen 63, 981 91 Jukkasjärvi, Sweden",
    "location": {
      "latitude": 67.8500,
      "longitude": 20.6161
    },
    "rating": 5,
    "price": "luxury",
    "description": "The Icehotel in Sweden is a unique hotel built entirely out of ice and snow. Guests can stay in rooms sculpted by artists from around the world, offering an unforgettable Arctic experience.",
    "comfort": ["wifi", "restaurant", "bar"],
    "web": "https://www.icehotel.com/",
    "images": []
  },
  {
    "name": "Treehotel",
    "activities": ["outdoors", "relax"],
    "loc-code": "se-c",
    "address": "Edeforsväg 2A, 960 24 Harads, Sweden",
    "location": {
      "latitude": 65.8254,
      "longitude": 20.9694
    },
    "rating": 5,
    "price": "luxury",
    "description": "Treehotel in Sweden offers unique treehouse accommodations, each designed by different architects. Guests can enjoy the beautiful forest surroundings and stunning views from their treetop rooms.",
    "comfort": ["wifi", "restaurant", "sauna"],
    "web": "https://treehotel.se/",
    "images": []
  },
  {
    "name": "Luna Salada Hotel",
    "activities": ["salt hotel", "relax"],
    "loc-code": "bo-c",
    "address": "Salar de Uyuni, Colchani, Bolivia",
    "location": {
      "latitude": -20.1338,
      "longitude": -67.4891
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Luna Salada Hotel is built entirely from salt blocks, offering guests a unique stay on the edge of the world's largest salt flat. The hotel provides stunning views and a truly unique experience.",
    "comfort": ["wifi", "restaurant", "spa"],
    "web": "https://lunasaladahotel.com.bo/",
    "images": []
  },
  {
    "name": "Happy Guests Lodge",
    "activities": ["fish companion for £5", "relax"],
    "loc-code": "gb-c",
    "address": "Tarporley Road, Dutton, Warrington WA4 4EZ, England",
    "location": {
      "latitude": 53.3000,
      "longitude": -2.6500
    },
    "rating": 4,
    "price": "budget",
    "description": "Happy Guests Lodge offers a unique experience where guests can have a fish companion in their room for £5. It's a cozy and friendly lodge located in the picturesque Cheshire countryside.",
    "comfort": ["wifi", "parking", "restaurant", "pets"],
    "web": "http://www.happyguestslodge.co.uk/",
    "images": []
  },
  {
    "name": "Hotel Divorce",
    "activities": ["divorce hotel", "relax"],
    "loc-code": "nl-c",
    "address": "Zeestraat 35, 2518 AA The Hague, Netherlands",
    "location": {
      "latitude": 52.0833,
      "longitude": 4.3000
    },
    "rating": 4,
    "price": "midrange",
    "description": "Hotel Divorce offers a unique service for couples seeking an amicable divorce. The hotel provides legal and psychological support to help couples separate smoothly.",
    "comfort": ["wifi", "restaurant", "spa", "legal services"],
    "web": "https://www.carlton.nl/hotel-ambassador-den-haag",
    "images": []
  },
  {
    "name": "Protea Hotel by Marriott Polokwane Ranch Resort",
    "activities": ["walk with lions", "outdoors"],
    "loc-code": "za-c",
    "address": "25 km South of Polokwane on either the R101 or N1, Polokwane, 0700, South Africa",
    "location": {
      "latitude": -23.8916,
      "longitude": 29.4486
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Protea Hotel by Marriott Polokwane Ranch Resort offers guests the extraordinary opportunity to walk with lions. The resort provides a blend of luxury accommodation and thrilling wildlife experiences.",
    "comfort": ["wifi", "restaurant", "spa", "pool"],
    "web": "https://www.marriott.com/en-us/hotels/ptgra-protea-hotel-polokwane-ranch-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
    "images": []
  },
  {
    "name": "V8 Hotel Classic Motorworld Region Stuttgart",
    "activities": ["relax", "art"],
    "loc-code": "de-c",
    "address": "Charles-Lindbergh-Platz 1, 71034 Böblingen, Germany",
    "location": {
      "latitude": 48.6810,
      "longitude": 8.9999
    },
    "rating": 4.5,
    "price": "midrange",
    "description": "Located on the old Stuttgart airfield, this hotel is perfect for automobile enthusiasts. The hotel features uniquely designed suites with automotive decor, including original car parts mounted on the walls.",
    "comfort": ["restaurant", "bar", "gym"],
    "web": "https://www.v8hotel.de/",
    "images": []
  },
  {
    "name": "Masseria Cervarolo",
    "activities": ["art", "outdoors", "relax"],
    "loc-code": "it-c",
    "address": "SP 14 Ostuni-Martina Franca, km 4,5, 72017 Ostuni BR, Italy",
    "location": {
      "latitude": 40.7392,
      "longitude": 17.5816
    },
    "rating": 4.8,
    "price": "midrange",
    "description": "Originally a 16th-century family farm, this hotel offers a relaxing atmosphere with a mix of historical charm and modern comfort. Guests can enjoy various activities and explore the nearby villages.",
    "comfort": ["spa", "pool", "restaurant", "garden"],
    "web": "https://www.booking.com",
    "images": []
  },
  {
    "name": "Electra Palace Hotel",
    "activities": ["art", "outdoors", "relax"],
    "loc-code": "gr-c",
    "address": "9 Aristotelous Square, Thessaloniki, 546 24, Greece",
    "location": {
      "latitude": 40.6323,
      "longitude": 22.9404
    },
    "rating": 4.7,
    "price": "midrange",
    "description": "Situated in the heart of Thessaloniki, this hotel offers stunning sea views and cultural experiences, including viewing works of art displayed on the property.",
    "comfort": ["pool", "restaurant"],
    "web": "https://www.booking.com",
    "images": []
  },
  {
    "name": "Gaylord Palms and Convention Center",
    "activities": ["kids", "sport", "outdoors", "ice skating", "surfing lessons"],
    "address": "6000 W Osceola Pkwy, Kissimmee, FL 34746, USA",
    "location": {
      "latitude": 28.3514,
      "longitude": -81.5331
    },
    "rating": 4.6,
    "price": "midrange",
    "description": "This hotel features a unique atrium with alligators and snakes, as well as a variety of seasonal activities such as scavenger hunts and cookie decorating.",
    "comfort": ["spa", "restaurant", "pool"],
    "web": "https://www.marriott.com/en-us/hotels/mcogp-gaylord-palms-resort-and-convention-center/overview/",
    "images": []
  },
  {
    "name": "Treebones Resort",
    "activities": ["glamping in yurts", "private decks with scenic views", "outdoors", "art", "relax"],
    "loc-code": "us-c",
    "address": "71895 CA-1, Big Sur, CA 93920, USA",
    "location": {
      "latitude": 35.9643,
      "longitude": -121.5370
    },
    "rating": 4.5,
    "price": "budget",
    "description": "A quirky, eco-friendly resort offering glamping-style accommodation with spectacular views of Big Sur.",
    "comfort": ["restaurant", "pets", "Organic garden", "Hiking trails"],
    "web": "https://www.treebonesresort.com/",
    "images": []
  },
  {
    "name": "Hotel Max",
    "activities": ["art"],
    "loc-code": "us-c",
    "address": "620 Stewart St, Seattle, WA 98101, USA",
    "location": {
      "latitude": 47.6132,
      "longitude": -122.3361
    },
    "rating": 4.4,
    "price": "midrange",
    "description": "Located in downtown Seattle, this hotel is known for its artistic and musical theme, featuring original artwork and iconic photographs throughout the property.",
    "comfort": ["restaurant", "gym"],
    "web": "https://www.creativetravelguide.com",
    "images": []
  },
  {
    "name": "Grand Velas Riviera Maya",
    "activities": ["art", "sport"],
    "loc-code": "mx-c",
    "address": "Carretera Cancún Tulum Km 62, 77710 Playa del Carmen, Q.R., Mexico",
    "location": {
      "latitude": 20.6371,
      "longitude": -87.0568
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "A luxurious all-inclusive resort offering a variety of activities including salsa dancing classes and aquafit sessions.",
    "comfort": ["spa", "pool", "restaurant"],
    "web": "https://www.grandvelas.com",
    "images": []
  },
  {
    "name": "W Barcelona",
    "activities": ["yoga", "relax", "salsa nights"],
    "loc-code": "es-c",
    "address": "Plaça de la Rosa dels Vents, 1, 08039 Barcelona, Spain",
    "location": {
      "latitude": 41.3684,
      "longitude": 2.1924
    },
    "rating": 4.7,
    "price": "midrange",
    "description": "Situated along the beachfront, this hotel offers breathtaking views of the Mediterranean Sea and hosts salsa nights for guests to enjoy.",
    "comfort": ["beach", "pool", "restaurant"],
    "web": "https://www.marriott.com",
    "images": []
  },
  {
    "name": "Hotel del Coronado",
    "activities": ["yoga", "sport", "outdoors"],
    "loc-code": "us-c",
    "address": "1500 Orange Ave, Coronado, CA 92118, USA",
    "location": {
      "latitude": 32.6809,
      "longitude": -117.1784
    },
    "rating": 4.6,
    "price": "luxury",
    "description": "Located on the stunning shores of Coronado Island, this historic hotel offers a wide range of activities including beach yoga, surfing lessons, bicycle rentals, and beach bonfires.",
    "comfort": ["restaurant", "spa", "beach"],
    "web": "https://hoteldel.com/",
    "images": []
  },
  {
    "name": "Amangiri",
    "activities": ["outdoors", "sport", "relax", "stargazing", "hot air ballooning", "hiking", "horseback riding"],
    "loc-code": "us-c",
    "address": "1 Kayenta Rd, Canyon Point, UT 84741, USA",
    "location": {
      "latitude": 37.0185,
      "longitude": -111.9291
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Set amidst the stark beauty of the Utah desert, Amangiri offers luxurious accommodations and a range of activities including stargazing, hot air ballooning, hiking, and horseback riding.",
    "comfort": ["spa", "pool", "restaurant"],
    "web": "https://www.aman.com/resorts/amangiri",
    "images": []
  },
  {
    "name": "Soneva Fushi",
    "activities": ["snorkeling", "outdoors", "diving", "art", "private cinema screenings", "chocolate-making classes"],
    "loc-code": "mv-c",
    "address": "Kunfunadhoo Island, Baa Atoll, Maldives",
    "location": {
      "latitude": 5.7264,
      "longitude": 73.0030
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Nestled within the pristine beauty of the Maldives, Soneva Fushi offers luxurious villas and a host of unique activities including snorkeling, diving, private cinema screenings, and chocolate-making classes.",
    "comfort": ["spa", "restaurant", "beach"],
    "web": "https://www.soneva.com/soneva-fushi/",
    "images": []
  },
  {
    "name": "Fogo Island Inn",
    "activities": ["iceberg watching", "boat tours", "artist-in-residence programs", "berry picking", "art", "outdoors"],
    "loc-code": "ca-c",
    "address": "210 Main Rd, Joe Batt's Arm, NL A0G 2X0, Canada",
    "location": {
      "latitude": 49.7174,
      "longitude": -54.1760
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Perched on the dramatic cliffs of Fogo Island, this award-winning inn offers breathtaking views and a range of activities including iceberg watching, boat tours, artist-in-residence programs, and berry picking.",
    "comfort": ["restaurant", "spa", "library"],
    "web": "https://www.fogoislandinn.ca/",
    "images": []
  },
  {
    "name": "Kakslauttanen Arctic Resort",
    "activities": ["aurora hunting", "outdoors", "husky sledding", "ice fishing", "kids", "snowmobiling"],
    "loc-code": "fi-c",
    "address": "Kiilopääntie 9, 99830 Saariselkä, Finland",
    "location": {
      "latitude": 68.4186,
      "longitude": 27.4177
    },
    "rating": 4.7,
    "price": "midrange",
    "description": "Located in the Finnish Lapland, Kakslauttanen Arctic Resort offers unique accommodations in glass igloos and log cabins. Guests can enjoy activities such as aurora hunting, husky sledding, ice fishing, and snowmobiling.",
    "comfort": ["spa", "restaurant"],
    "web": "https://www.kakslauttanen.fi/",
    "images": []
  },
  {
    "name": "Whitepod Eco-Luxury Hotel",
    "activities": ["skiing", "sport", "outdoors", "snowshoeing", "yoga", "stargazing"],
    "loc-code": "ch-c",
    "address": "Les Giettes, 1871 Monthey, Switzerland",
    "location": {
      "latitude": 46.2176,
      "longitude": 6.9144
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Nestled in the Swiss Alps, Whitepod Eco-Luxury Hotel offers unique geodesic dome accommodations and a range of activities including skiing, snowshoeing, yoga, and stargazing.",
    "comfort": ["restaurant", "spa"],
    "web": "https://www.whitepod.com/",
    "images": []
  },
  {
    "name": "Amilla Fushi",
    "activities": ["outdoors", "submarine tours", "private island picnics", "sunset fishing", "underwater dining"],
    "loc-code": "mv-c",
    "address": "Baa Atoll, Maldives",
    "location": {
      "latitude": 5.7832,
      "longitude": 73.4023
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Situated in the Maldives, Amilla Fushi offers luxurious overwater and beachfront villas, as well as unique activities such as submarine tours, private island picnics, sunset fishing, and underwater dining experiences.",
    "comfort": ["spa", "restaurant", "beach"],
    "web": "https://www.amilla.com/",
    "images": []
  },
  {
    "name": "Longitude 131°",
    "activities": ["uluru sunrise tours", "camel treks", "indigenous cultural experiences", "art", "outdoors"],
    "loc-code": "au-c",
    "address": "Yulara Drive, Yulara NT 0872, Australia",
    "location": {
      "latitude": -25.3447,
      "longitude": 131.0369
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Located near Uluru-Kata Tjuta National Park, Longitude 131° offers luxury tented accommodation with unparalleled views of Uluru. Guests can enjoy sunrise tours of Uluru, camel treks, and indigenous cultural experiences.",
    "comfort": ["restaurant", "spa", "pool"],
    "web": "https://longitude131.com.au/",
    "images": []
  },
  {
    "name": "Soneva Kiri",
    "activities": ["treepod dining", "private beach dinners", "snorkeling", "stargazing", "relax", "outdoors"],
    "loc-code": "th-c",
    "address": "110 Moo 4, Ko Kut, Trat 23000, Thailand",
    "location": {
      "latitude": 11.5890,
      "longitude": 102.5260
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Located on the remote island of Koh Kood, Soneva Kiri offers luxurious villas and unique dining experiences such as treepod dining and private beach dinners. Guests can also enjoy snorkeling and stargazing in this pristine paradise.",
    "comfort": ["spa", "pool"],
    "web": "https://www.soneva.com/soneva-kiri/",
    "images": []
  },
  {
    "name": "The Singular Patagonia",
    "activities": ["outdoors", "sport", "hiking", "horseback riding", "birdwatching", "glacier tours"],
    "loc-code": "cl-c",
    "address": "KM 5 Norte, Puerto Bories, Puerto Natales, Natales, Magallanes y la Antártica Chilena, Chile",
    "location": {
      "latitude": -51.7206,
      "longitude": -72.5068
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Set against the stunning backdrop of the Patagonian landscape, The Singular Patagonia offers a range of outdoor activities including hiking, horseback riding, birdwatching, and glacier tours. Guests can immerse themselves in the natural beauty of southern Chile.",
    "comfort": ["restaurant", "spa", "pool"],
    "web": "https://www.thesingular.com/patagonia/",
    "images": []
  },
  {
    "name": "Explora Rapa Nui",
    "activities": ["outdoors", "sport", "hiking", "horseback riding", "biking", "stargazing"],
    "loc-code": "cl-c",
    "address": "Unnamed Road, Isla de Pascua, Valparaíso Region, Chile",
    "location": {
      "latitude": -27.1384,
      "longitude": -109.4275
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Located on Easter Island, Explora Rapa Nui offers explorations of the island's archaeological sites, volcanic landscapes, and pristine beaches. Guests can enjoy activities such as hiking, horseback riding, biking, and stargazing.",
    "comfort": ["restaurant", "spa", "pool"],
    "web": "https://www.explora.com/hotels-and-travesias/easter-island/explora-rapa-nui/",
    "images": []
  }, 
  {
    "name": "Amangani",
    "activities": ["sport", "mountaineering", "skiing", "mountain views", "outdoors"],
    "loc-code": "us-c",
    "address": "1535 NE Butte Road, Jackson, Wyoming 83001, USA",
    "location": {
      "latitude": 43.5285,
      "longitude": -110.666
    },
    "rating": 4.7,
    "price": "luxury",
    "description": "Located in the Grand Teton Mountains, Wyoming, USA, Amangani offers opportunities for mountaineering, skiing, or simply enjoying the mountain views.",
    "comfort": ["restaurant", "spa", "gym"],
    "web": "https://www.aman.com/resorts/amangani",
    "images": []
  },
  {
    "name": "Southern Ocean Lodge",
    "activities": ["wildlife exploration", "relax", "wine tours", "outdoors"],
    "loc-code": "au-c",
    "address": "Hanson Bay Road, Kangaroo Island, South Australia 5222, Australia",
    "location": {
      "latitude": -36.0357,
      "longitude": 137.2335
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Situated on Kangaroo Island near South Australia, Southern Ocean Lodge offers opportunities for wildlife exploration, encountering kangaroos and other local residents, as well as wine tours to local wineries.",
    "comfort": ["restaurant", "spa", "library"],
    "web": "https://southernoceanlodge.com.au/",
    "images": []
  },
  {
    "name": "Explora Patagonia",
    "activities": ["canyon exploration", "forest hikes", "lake excursions", "outdoors"],
    "loc-code": "cl-c",
    "address": "Hotel Salto Chico, Torres del Paine National Park, Chile",
    "location": {
      "latitude": -50.9423,
      "longitude": -73.4068
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Located in Patagonia, Chile, Explora Patagonia is perfect for nature lovers. You can explore canyons, forests, and lakes during day trips, and enjoy the comfort of the hotel in the evenings.",
    "comfort": ["restaurant", "spa", "bar"],
    "web": "https://www.explora.com/patagonia/",
    "images": []
  },
  {
    "name": "The Brando",
    "activities": ["snorkeling", "kayaking", "paddleboarding", "outdoors", "sport"],
    "loc-code": "pf-c",
    "address": "Tetiaroa Private Island, Arue, French Polynesia",
    "location": {
      "latitude": -17.5695,
      "longitude": -149.6079
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Located on Tetiaroa Private Island in French Polynesia, The Brando offers a range of water activities including snorkeling, kayaking, and paddleboarding in the crystal-clear waters of the South Pacific.",
    "comfort": ["restaurant", "spa", "beach"],
    "web": "https://thebrando.com/",
    "images": []
  },
  {
    "name": "Ladera Resort",
    "activities": ["ziplining", "hiking", "sulphur springs visit", "outdoors"],
    "loc-code": "lc-c",
    "address": "Soufrière, St Lucia",
    "location": {
      "latitude": 13.8569,
      "longitude": -61.0565
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Perched on a volcanic ridge overlooking the Pitons in St Lucia, Ladera Resort offers adventurous activities such as ziplining, hiking, and visits to the nearby sulphur springs.",
    "comfort": ["restaurant", "spa", "pool"],
    "web": "https://www.ladera.com/",
    "images": []
  },
  {
    "name": "The Datai Langkawi",
    "activities": ["rainforest walks", "guided nature tours", "beach yoga", "outdoors", "relax", "golf"],
    "loc-code": "my-c",
    "address": "Jalan Teluk Datai, 07000 Langkawi, Kedah, Malaysia",
    "location": {
      "latitude": 6.4254,
      "longitude": 99.7089
    },
    "rating": 4.8,
    "price": "luxury",
    "description": "Nestled in the heart of an ancient rainforest in Langkawi, Malaysia, The Datai Langkawi offers guests the chance to experience the wonders of nature with rainforest walks, guided nature tours, and beach yoga sessions.",
    "comfort": ["restaurant", "spa"],
    "web": "https://www.thedatai.com/langkawi/",
    "images": []
  },
  {
    "name": "Amanwana",
    "activities": ["outdoors", "jungle trekking", "diving", "snorkeling", "sport"],
    "loc-code": "id-c",
    "address": "Moyo Island, Sumbawa, West Nusa Tenggara, Indonesia",
    "location": {
      "latitude": -8.3028,
      "longitude": 117.3863
    },
    "rating": 4.7,
    "price": "luxury",
    "description": "Located on Moyo Island in Indonesia, Amanwana offers guests the opportunity to explore pristine jungles with jungle trekking, as well as underwater adventures with diving and snorkeling in the surrounding coral reefs.",
    "comfort": ["restaurant", "spa", "beach"],
    "web": "https://www.aman.com/resorts/amanwana",
    "images": []
  },
  {
    "name": "Singita Lebombo Lodge",
    "activities": ["safari drives", "bush walks", "stargazing", "outdoors", "relax"],
    "loc-code": "za-c",
    "address": "N'wanetsi Concession, Kruger National Park, South Africa",
    "location": {
      "latitude": -24.3083,
      "longitude": 31.7053
    },
    "rating": 4.9,
    "price": "luxury",
    "description": "Located in the Kruger National Park, South Africa, Singita Lebombo Lodge offers unforgettable safari experiences including safari drives, bush walks, and stargazing sessions in the African wilderness.",
    "comfort": ["restaurant", "spa", "pool"],
    "web": "https://singita.com/lebombo-lodge/",
    "images": []
  }
]

export default hotels;
