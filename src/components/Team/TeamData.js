import {
  StyledCiFacebook,
  StyledAiOutlineInstagram,
  StyledFiTwitter,
  StyledFaLinkedinIn,
} from './styles/index';

const TeamData = [
  {
    id: 1,
    image: './images/personTeam1.jpg',
    name: 'Stefan Avocado',
    profession: 'Chef',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 2,
    image: './images/personTeam2.jpg',
    name: 'John Center',
    profession: 'Staff',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 3,
    image: './images/personTeam3.jpg',
    name: 'Rosalia Andre',
    profession: 'Chef',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 4,
    image: './images/personTeam4.jpg',
    name: 'Rash Osborn',
    profession: 'Staff',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 5,
    image: './images/personTeam5.jpg',
    name: 'Roberta Makłowicz',
    profession: 'Staff',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 6,
    image: './images/personTeam6.jpg',
    name: 'Adrian Makumba',
    profession: 'Kucharz',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
];

export default TeamData;
