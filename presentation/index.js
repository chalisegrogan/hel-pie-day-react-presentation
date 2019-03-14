// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  reactLogo: require('../assets/reactlogo.png'),
  noChange: require('../assets/react-rendering-nochange.png'),
  initChange: require('../assets/React-rendering-initiatechange.png'),
  change: require('../assets/React-rendering-change.png'),
  change2: require('../assets/React-rendering-change-2.png'),
  change3: require('../assets/React-rendering-changepropagate.png'),
  ideal: require('../assets/React-rendering-ideal.png'),
  idealExample1: require('../assets/React-rendering-ideal-ex-1.png'),
  idealExample2: require('../assets/React-rendering-ideal-ex-2.png'),
  ap: require('../assets/ap.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress={'bar'}
      >
        <Slide bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Let's talk about
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            <Image src={images.reactLogo} width={68} />React<Image src={images.reactLogo} height={68} />
          </Heading>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            for HEL Architecture Review
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit textColor="tertiary" caps>
            We will answer:
          </Heading>
          <List textColor="primary">
            <ListItem textSize={36}>What happens during <strong>rendering</strong>?</ListItem>
            <ListItem textSize={36}>What are some ways to <strong>improve performance</strong>?</ListItem>
            <ListItem textSize={36}>Why is <strong>equality comparison</strong> important?</ListItem>
            <ListItem textSize={36}>How is the <strong>single-responsibility principle</strong> helpful?</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Quick vocab refresher
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            Props
          </Heading>
          <Text size={6} textColor="secondary">
            The public API.
          </Text>
          <Text size={6} textColor="secondary">
            Data passed into the component.
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            State
          </Heading>
          <Text size={6} textColor="secondary">
            The private, local data of a component.
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            Virtual DOM
          </Heading>
          <Text size={6} textColor="secondary">
            React's representation of the computed output.
          </Text>
          <Text size={6} textColor="secondary">
            Lives in memory, not in the actual DOM.
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Rendering
          </Heading>
          <Heading size={6} textColor="tertiary" caps>
            Diffing & Reconciling
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary" textSize={38} textColor="secondary" textAlign="left">
            When a component update occurs:
          </Heading>
          <Text textSize={38} textAlign="left">React's Virtual DOM re-computes the representation.</Text>
          <br />
          <Heading textSize={38} textColor="secondary" textAlign="left">
            The differences are found by:
          </Heading>
          <Text textSize={38} textAlign="left">Diffing the prior Virtual DOM with the re-computed one.</Text>
          <br />
          <Heading textSize={38} textColor="secondary" textAlign="left">
            Once the differences are established:
          </Heading>
          <Text textSize={38} textColor="secondary" textAlign="left">
            React can update the browser DOM as efficiently as possible.
          </Text>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps fit>
            When does a component update happen?
          </Heading>
          <List textColor="tertiary" bulletStyle="star">
            <ListItem>The parent has updated</ListItem>
            <ListItem>New props</ListItem>
            <ListItem>setState()</ListItem>
            <ListItem>forceUpdate()</ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Virtual DOM (VDOM)
          </Heading>
          <Text textSize={38} textColor="secondary">
            Whenever any of those changes occur, React needs to re-compute the VDOM of the component.
          </Text>
          <Heading textSize={38} textColor="secondary">
            More critically, it <i>also</i> re-computes its children, grandchildren, etc.
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.noChange} />
        </Slide>
        <Slide>
          <Image src={images.initChange} />
        </Slide>
        <Slide>
          <Image src={images.change} />
        </Slide>
        <Slide>
          <Image src={images.change2} />
        </Slide>
        <Slide>
          <Image src={images.change3} />
        </Slide>
        <Slide>
          <Image src={images.change3} />
          <Heading size={6} textColor="secondary" caps fit>
            This happens even if <i>nothing has changed</i>.
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.ideal} />
        </Slide>
        <Slide>
          <Image src={images.ap} />
        </Slide>
        <Slide>
          <Image src={images.idealExample1} />
        </Slide>
        <Slide>
          <Image src={images.idealExample2} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Performance Improvements
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary" caps>
            How can we prevent unnecessary re-renders?
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Don't waste time rendering unchanged components
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Use the Component Lifecycle
          </Heading>
          <Text textSize={28} textColor="secondary">
            <a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</a>
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <CodePane
            textSize={32}
            lang="javascript"
            source={require('raw-loader!../assets/update1.example')}
          />
        </Slide>
        <Slide bgColor="tertiary">
          <CodePane
            textSize={32}
            lang="javascript"
            source={require('raw-loader!../assets/update2.example')}
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            demo
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            JavaScript equality comparison
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>expression</TableHeaderItem>
                <TableHeaderItem>value</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem><Code>"string1" === "string1"</Code></TableItem>
                <TableItem textColor="green">&#10004; true</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>123 === 123</Code></TableItem>
                <TableItem textColor="green">&#10004; true</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>[1, 2] === [1, 2]</Code></TableItem>
                <TableItem>?</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>{'{key: "value"} === {key: "value"}'}</Code></TableItem>
                <TableItem>?</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>Function1 === Function2</Code></TableItem>
                <TableItem>?</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="primary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>expression</TableHeaderItem>
                <TableHeaderItem>value</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem><Code>"string1" === "string1"</Code></TableItem>
                <TableItem textColor="green">&#10004; true</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>123 === 123</Code></TableItem>
                <TableItem textColor="green">&#10004; true</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>[1, 2] === [1, 2]</Code></TableItem>
                <TableItem textColor="red">&#10006; false</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>{'{key: "value"} === {key: "value"}'}</Code></TableItem>
                <TableItem textColor="red">&#10006; false</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>Function1 === Function2</Code></TableItem>
                <TableItem textColor="red">&#10006; false</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            back to demo
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Use <Code>React.memo</Code>
          </Heading>
          <Text textSize={28} textColor="secondary">
            <a href="https://reactjs.org/docs/react-api.html#reactmemo">https://reactjs.org/docs/react-api.html#reactmemo</a>
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            Single responsibility principle
          </Heading>
          <Text>Each component does exactly one thing, and one thing only.</Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" textAlign="left">
            Notice <Code>shouldComponentUpdate</Code> and <Code>PureComponent</Code> changes are made to a single component.
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps fit>
            If your components are small, this is easy to do.
          </Heading>
          <Heading size={6} textColor="secondary" caps fit>
            If your components are big, it isn't.
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" caps>
            Resources
          </Heading>
          <List>
            <ListItem textSize={28}>
              <a href="https://reactjs.org/docs/optimizing-performance.html">React docs: Optimizing Performance</a>
            </ListItem>
            <ListItem textSize={28}>
              <a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">Interactive React Lifecycle Diagram</a>
            </ListItem>
            <ListItem textSize={28}>
              <a href="https://blog.logrocket.com/make-react-fast-again-part-3-highlighting-component-updates-6119e45e6833">React Developer Tools: Highlighting Component Updates</a>
            </ListItem>
            <ListItem textSize={28}>
              <a href="https://github.com/FormidableLabs/spectacle">spectacle: ReactJS-based presentation library</a>
            </ListItem>
            <ListItem textSize={28}>
              <a href="https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/">7 Architectural attributes of a reliable React component</a>
            </ListItem>
            <ListItem textSize={28}>
              <a href="https://codepen.io/chalisegrogan/pen/BbJqyo">The DEMO featured in this presentation!</a>
            </ListItem>
            <ListItem textSize={28}>
              <a href="https://23andme.atlassian.net/wiki/spaces/ENG/pages/584911942/React+a+development+guide">React: a development guide (for 23andMe)</a> (in progress)
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
