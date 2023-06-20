import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Julia Newman',
    rating: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
      <FaStar key={5} />,
    ],
    image:
      'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    text: 'This restaurant stands out for its delicious Italian cuisine, which is prepared here in an authentic and tasty way. In addition, the nice atmosphere and service make me always happy to come back here.',
  },
  {
    id: 2,
    name: 'Casper Collins',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'When I want to eat something delicious and nourishing, I always choose this restaurant. Their menu offers a wide variety of vegetarian dishes that are prepared with fresh and healthy ingredients. I recommend it to anyone who appreciates healthy food.',
  },
  {
    id: 3,
    name: 'Alicia Rodriguez',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'I love this restaurant for its unique atmosphere. It feels like a real French cafe, and the dishes are delicious and aesthetically served. I highly recommend it to lovers of French cuisine and romantic meetings.',
  },
  {
    id: 4,
    name: 'Bart Martin',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1682525672.1678217274&semt=sph',
    text: 'This restaurant is a meat lovers paradise. Their meat dishes are delicious and prepared with the best quality ingredients. In addition, the staff is very professional and takes care of every detail.',
  },
  
  {
    id: 5,
    name: 'Peter Jenkins',
    rating: [<FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'This restaurant offers some of the best pizzas I have had in my life. The crust is thin and crispy, and the ingredients on top are fresh and flavorful. In addition, the prices are very affordable and the service friendly and helpful.', 
  },
];

export default reviews;
