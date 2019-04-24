// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Magic,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  title: require('../assets/react-to-the-need-for-speed.png'),
  beach: require('../assets/beach.png'),
  ferraricom: require('../assets/ferraricom.png'),
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
};

const videos = {
  got: require('file-loader!../assets/got-br.mp4'),
};

const Container = styled('div')`
  color: white;
`;

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    gray: '#999999',
    white: '#FFF',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const loadLocalImage = name => require(`../assets/${name}`);
const LocalImg = ({ name, ...props }) => {
  const src = require(`../assets/${name}`);
  return <Image src={src} width={1200} {...props} />;
};

const PrimaryText = props => <Text size={6} textColor="white" {...props} />;

const agendaItems = [
  'Understanding the problem',
  'Performance Concepts',
  'Where do I start?',
  'Techniques',
  'How much effort should be applied?',
];
const HighlightList = ({ title, highlight, items }) => (
  <Slide bgColor="secondary" size={6} textColor="white">
    <Heading>{title}</Heading>
    <List textColor="gray">
      {items.map((item, i) => (
        <ListItem key={item} textColor={highlight === i ? 'white' : 'gray'}>
          {item}
        </ListItem>
      ))}
    </List>
  </Slide>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide transition={['zoom']} bgColor="primary">
          {/* <Image margin="10px 0 40px 10%" src={images.title} width={800} />*/}
          <Heading>
            React to <br /> the need for speed
          </Heading>
          <PrimaryText>by Cristian Oliveira</PrimaryText>
        </Slide>

        <HighlightList items={agendaItems} title="Agenda" highlight={0} />
        <HighlightList
          items={agendaItems}
          title="Agenda"
          transition={['none']}
          highlight={1}
        />
        <HighlightList
          items={agendaItems}
          title="Agenda"
          transition={['none']}
          highlight={2}
        />
        <HighlightList
          items={agendaItems}
          title="Agenda"
          transition={['none']}
          highlight={3}
        />
        <HighlightList
          items={agendaItems}
          title="Agenda"
          transition={['none']}
          highlight={4}
        />

        {/* DISCLAIMERS */}
        <Slide bgColor="secondary">
          <Heading>🚨 Disclaimers 🚨</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <LocalImg name={'beach.png'} />
          <PrimaryText>
            Since I'm going to talk about Brazil I thought this disclaimer was
            important.
          </PrimaryText>
        </Slide>
        {/* DISCLAIMERS END */}

        <Slide bgColor="secondary">
          <Heading>There is no Need for Speed references in this talk.</Heading>
        </Slide>

        <video
          transition={['zoom']}
          style={{ width: '100vw', height: '100vh', position: 'absolute' }}
          src={videos.got}
          preload="none"
          autoplay="autoplay"
        />

        <Slide bgColor="secondary">
          <Heading>The problem</Heading>
        </Slide>
        <Slide
          transition={['zoom']}
          bgImage={loadLocalImage('lack-empathy.jpg')}
        >
          <Notes>
            <h4>The problem</h4>
            <ol>
              <li>Lack of empathy</li>
              <li>
                I have seen many talks while researching for this talk and most
                of then failed to make me more empathic to the problem
              </li>
              <li>
                We humans have a problem when trying to relate with big numbers
              </li>
            </ol>
          </Notes>
          <Text />
          {''}
        </Slide>

        <Slide bgColor="secondary">
          <Text size={6} textColor="white">
            It depends.
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Text size={6} textColor="white">
            Let say we want to build a Social Network for Ferrari owners.
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.ferraricom}
          textColor="tertiary"
        />
        <Slide bgColor="secondary">
          <Text size={6} textColor="white">
            Performance for them is a plus not a feature.
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Text size={6} textColor="white">
            [demo]
          </Text>
        </Slide>
        <Slide bgColor="secondary" transition={['slide']}>
          <Text size={6} textColor="white">
            How about a company that has their biggest market in...
          </Text>
        </Slide>
        <Slide bgColor="secondary" transition={['slide']}>
          <Text size={6} textColor="white">
            How about a company that has their biggest market in Brazil +
            Chile...
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
