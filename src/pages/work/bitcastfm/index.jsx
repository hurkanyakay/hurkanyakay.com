import React from 'react';
import { graphql } from 'gatsby';
import Waypoint from 'react-waypoint';
import SEO from '../../../components/SEO';
import Menu from '../../../components/Menu';
import {
  Title,
  Subtitle,
  Inner,
  ColumnWrapper,
  Column,
  Text,
  Container,
  ProjectDesc,
  ProjectDescIcon,
  ContactMain,
} from '../../../components/LayoutComponents';
import Image from '../../../components/Image';
import FrontmatterInfo from '../../../components/FrontmatterInfo';
import Link from '../../../components/Link';
import Background from '../../../components/Background';
import flatlist from './bitcast-flatlist.gif';
import twoscreen from './twoscreen.gif';
import emojies from './emojis.gif';
import emojies2 from './emojies2.gif';
import emojies3 from './emojies3.gif';

export const frontmatter = {
  id: 'bitcast.fm',
  isWork: true,
  isFeatured: true,
  title: 'Limits of React Native Animations',
  subtitle: 'Case Study: React Native Animations for BitcastFm Mobile',
  date: '2019-01-03',
  enddate: '2019-02-03',
  cover: './intro.png',
  path: '/work/bitcastfm',
  devOnly: false,
  description: 'Proof-of-concept work for large number of React Native animations.',
  technologies: ['React', 'React Native', 'Redux', 'Redux-saga', 'Typescript'],
  role: 'Senior Frontend Engineer',
  website: 'https://www.bitcast.fm/',
  github: false,
  npm: false,
};

export default class Bitcast extends React.Component {
  state = {
    menuIcon: false,
  };

  render() {
    const { background, intro, desktopdesign, trackplayer, strategy1, strategy2 } = this.props.data;

    return (
      <Menu showMenu={this.state.menuIcon} relative>
        <SEO />
        <Background data={background} />
        <div className="absolute">
          <Waypoint
            onEnter={() => this.setState({ menuIcon: false })}
            onLeave={() => this.setState({ menuIcon: true })}
          />
          <Container>
            <Inner>
              <Title id="PageTitle">{frontmatter.title}</Title>
              <ColumnWrapper>
                <Column style={{ background: '#fff' }}>
                  <Image fluid={intro} />
                </Column>
                <Column>
                  <Text>
                    <FrontmatterInfo frontmatter={frontmatter} />
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <h3>Objective:</h3>
                    <div>
                      Bitcast.fm website's episode page has features like playing podcast audio and horizontal sliding
                      animation of comments, emojies like bookmarks of certain seconds of podcast. Purpose of this case
                      study is to test the performance of similar animations in React Native environment and create
                      Proof-of-concept project.
                      <p />
                    </div>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={desktopdesign} caption="Desktop Design of Bitcast.fm" />
                </Column>

                <Column span={2}>
                  <Text>
                    <div>
                      NOTE: We were aware that this mobile app would perform better with native coding like
                      Objective-C/Swift and Java, however developing a mobile project in React Native is cost efficient,
                      especially for start-ups. Therefore squizing the possibilities of large number of animations with
                      React Native is the root cause of this proof of concept work.{' '}
                    </div>

                    <h3>Requirements:</h3>
                    <ol>
                      <li>Play podcast audio (support 5 hr long stream)</li>
                      <li>Play, pause, seeking support (forward and backward)</li>
                      <li>
                        Each second may have certain numbers of comments. Vertically max 4 comment stack for each second
                        is determined and each comment can have 4 second long horizontal space(no overlapping) =>
                        (18000sec * 4)/4 = 18000 comments total{' '}
                      </li>
                      <li>
                        Each second may have certain numbers of emojies. Vertically max 8 emoji can stack for each
                        second to flow => 18000sec * 8 => 144000 emoji total
                      </li>
                      <li>
                        Each second should trigger animation horizontally for both emojies and comments with a different
                        speed
                      </li>
                      <li>
                        Forward and backward seeking should trigger animations of comments and emojies (again if
                        necessary)
                      </li>
                      <li>User may stop horizontal animation to read or interract with comments</li>
                      <li>
                        If user stops animation, after certain time (5 sec) horizontal animation should continue along
                        with audio
                      </li>
                      <li> Audio slider should be custom like a waveform </li>
                    </ol>

                    <h3>Environment</h3>
                    <ul>
                      <li>React Native @ 0.57.8</li>
                      <li>React @ 16.6.3</li>
                      <li>
                        <Link external to="https://github.com/infinitered/ignite-bowser">
                          ignite-bowser
                        </Link>{' '}
                        as boilerplate @ 3.0.0
                      </li>
                      <li>Xcode 10.1 Build version 10B61</li>
                    </ul>
                  </Text>
                </Column>

                <Column span={2}>
                  <Text>
                    <h3>Audio Component</h3>
                    <div>In order to provide audio playing feature, I tested libraries below:</div>
                    <ol>
                      <li>
                        <Link external to="https://github.com/indiecastfm/react-native-audio-streamer" />{' '}
                        <span>-> Failed at build</span>
                      </li>
                      <li>
                        <Link external to="https://github.com/tlenclos/react-native-audio-streaming" /> : Not maintained
                        anymore
                      </li>
                      <li>
                        <Link external to="https://github.com/johnsonsu/react-native-sound-player" /> : Not supporting
                        seeking but working
                      </li>
                      <li>
                        <Link external to="https://github.com/zmxv/react-native-sound" /> : Playing after ~90 sec
                        (downloading locally first, not streaming)
                      </li>
                      <li>
                        <Link external to="https://github.com/kyo504/react-native-audio-streaming-player/" /> : Errored
                        in runtime
                      </li>
                      <li>
                        <Link external to="https://github.com/futurice/react-native-audio-toolkit" /> : Not maintained
                        anymore{' '}
                        <Link to="https://github.com/futurice/react-native-audio-toolkit/issues/83" external>
                          *
                        </Link>
                      </li>
                      <li>
                        <Link external to="https://github.com/react-native-kit/react-native-track-player/" /> : Working
                        fine except not providing duration info before start playing{' '}
                        <Link external to="https://github.com/react-native-kit/react-native-track-player/issues/229">
                          Issue 229
                        </Link>
                      </li>
                    </ol>

                    <div>
                      Duration info was important because animation strategies depend on the lenght of audio. We solved
                      duration info problem by providing this from backend along with podcast link payload.Therefore
                      React-native-track-player library is selected for podcast player purpose.Expo's audio component
                      was also strong candidate but we were not using Expo because linking libraries (there are other
                      3rd party libraries) is not supported.
                    </div>
                  </Text>
                </Column>

                <Column>
                  <Image fluid={trackplayer} style={{ width: 200 }} />
                </Column>
                <Column>
                  <Text>
                    I used example app of React-native-track-player with custom basic play/stop buttons and slider for
                    seeking.
                  </Text>
                </Column>

                <Column span={2}>
                  <Text>
                    <h3>Animations of Emojies and Comments</h3>
                  </Text>
                </Column>

                <Column>
                  <Text>
                    <h3>Strategy One:</h3>
                    <div>
                      Web application was working fine and team have already developed a strategy for animations: Very
                      wide dom element (wide as podcast lenght) which includes mapped comments and emojies to certain
                      seconds and horizontal translating animation with scrolling which play nice with audio actions.
                      Web team was also working with React, so I decided to start from this approach for React Native
                      part.
                    </div>
                    <p />
                    <div>
                      Podcast is 5hr long (max) and that is 18000 sec long. We decided as device width will be passed in
                      5 sec => 18000/5 = 3600 screen and each screen (iphone6 vertical) is 375px wide => Animated
                      element width 1350000px.
                    </div>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={strategy1} caption="Strategy 1" />
                </Column>

                <Column>
                  <Text>
                    To produce the implementation, React Native has some components to use:
                    <ul>
                      <li>
                        <Link external to="https://facebook.github.io/react-native/docs/animations">
                          Translation of Animated View
                        </Link>
                      </li>
                      <li>
                        <Link external to="https://facebook.github.io/react-native/docs/scrollview">
                          Scroll View
                        </Link>
                      </li>
                      <li>
                        <Link external to="https://facebook.github.io/react-native/docs/flatlist">
                          Flatlist
                        </Link>
                      </li>
                    </ul>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <ul>
                      <li>
                        I tried Animated View translation by setting Animated.timing duration to audio duration.
                        Performance was quite low for 1350000px wide View element. Plus, View component has no scrolling
                        support so I tried ScrollView.
                      </li>
                      <li>
                        ScrollView itself is not meant to used with large amount of data or screens ( 18000 comments
                        inside 3600 screens ). Flatlist is suitable for large dataset.
                      </li>
                    </ul>
                  </Text>
                </Column>

                <Column>
                  <Image src={flatlist} style={{ height: 500, backgroundColor: 'initial', width: 'inherit' }} />
                </Column>
                <Column>
                  <Text>
                    Flatlist component worked well and I suggest{' '}
                    <Link external to="https://github.com/Flipkart/recyclerlistview">
                      RecyclerListView
                    </Link>{' '}
                    instead of Flatlist. RecyclerListView is more performant than Flatlist. I added border and pixel
                    number to understand which page I am seeing like a ruler and added image of comment to understand
                    how RecyclerListView triggering render in screens. Manual scrolling is good and no loss in FPS
                    values.
                  </Text>
                </Column>

                <Column>
                  <Image src={twoscreen} caption="Desktop and Mobile performance comparison" />
                </Column>
                <Column>
                  <Text>
                    However, Flatlist or RecyclerListView scrolling depend on calling a function like 'scrollTo' and
                    there is no way to merge Animated library and scrolling action to produce auto scrolling component
                    natively. These native components pass scrolling function directly to native codes for performance
                    and only way to provide auto scrolling is to trigger 'scrollTo' function with interval and this
                    prevents smooth scrolling or animation of the element and creating laggy animation.This gif is side
                    by side comparison of web and RN performance for this approach and even I didn't add emojies yet.
                  </Text>
                </Column>

                <Column span={2}>
                  <Text>
                    Another problem with this approach was emojies needed to have different speed than comments.
                    Therefore either creating another animating layer for emojies with higher speed(longer view layer)
                    or completely different approach was the solution. I tested with second layer, same length of
                    Scrolled View of RecyclerListView and things got complicated. Upper layer should control the lower
                    layer animation and audio at the same time and audio seeking to certain second should trigger
                    scrollTo function to corresponding point in both view layer.In addition, performance dropped
                    significantly and even one layer animation performance was not good enough, so I wanted to try
                    something else.
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <h3>Strategy Two:</h3>
                    <div>
                      In order to add emoji animations, we needed something other than creating a second layer and
                      therefore I tried creating animated item instantly at corresponding second and start animation
                      immediately from right to left and finish animation when it disappears from left side of screen
                      and delete that item.No sliding layer, only showing necessary amount of item and no need to deal
                      with the rest of the items. It is like animate on demand. I thought that if different strategy
                      works for emojies we can also try it for comments.
                    </div>
                  </Text>
                </Column>
                <Column>
                  <Image fluid={strategy2} caption="Strategy 2" />
                </Column>
                <Column>
                  <Text>
                    <div>
                      First, I tried only emojies, not comments and other things.I implemented{' '}
                      <Link external to="https://facebook.github.io/react-native/docs/animations">
                        Animated.Timing
                      </Link>{' '}
                      with Parallel and Looping from official RN library and when player hits a new second I created the
                      animation object and initiated start function.In order to see the items, I was populating an array
                      which is stored as state of the component. As you can see in the gif, performance was okey, no
                      serious loss in FPS values and I was able to provide different speeds for each emoji. Animations
                      are improved by usage of 'useNativeDriver' prop.
                    </div>
                  </Text>
                </Column>
                <Column>
                  <Image
                    src={emojies}
                    caption="Emoji Animation Test"
                    style={{ height: 500, backgroundColor: 'initial', width: 'inherit' }}
                  />
                </Column>
                <Column>
                  <Text>
                    <div>
                      In the gif above, you can see the increase in RAM usage. That is because continuous addition to
                      animation array. In order to preserve RAM usage, I implemented a clean up method similar to
                      garbage collection. This method removes any related event listener and finished animations from
                      its array and state after certain seconds.
                    </div>
                    <p />
                    <div>
                      Second gif shows improvement in RAM usage. I added comments using same strategy and totally dumped
                      first strategy and this proved better performance than the first strategy. More smooth animation
                      was achieved and item numbers were increased compared to first strategy. In addition, there was no
                      significant decrease in FPS values.
                    </div>
                  </Text>
                </Column>
                <Column>
                  <Image
                    src={emojies2}
                    style={{ height: 500, backgroundColor: 'initial', width: 'inherit' }}
                  />
                </Column>
                <Column>
                  <Text>
                    <div>
                      However, design requires up/down vertical movement for comments along with horizontal sliding.
                      There were also clouds (3 clouds) to flow slowly. When I add those items to this implementation,
                      serious performance loss was observed. Dramatic decrease in FPS values and unproportional emoji
                      movements and slower response for UI interactions were no go signals for this implementation. I
                      tested with a real device, performance was slightly better but still impossible to use when we
                      consider UX perspective.
                    </div>
                    <p />
                  </Text>
                </Column>
                <Column>
                  <Image
                    src={emojies3}
                    style={{ height: 500, backgroundColor: 'initial', width: 'inherit' }}
                  />
                </Column>
                <Column span={2}>
                  <Text>
                    <h3>Conclusion</h3>
                    <div>
                      Company decided to not move on with React Native and give a try to pure native approach. Of course
                      combination with React Native part and java/obj-c is always an option. For this episode page,
                      whole page native component will be better and for rest of the app RN could be still an option.
                      Key components like Audio library and animations already using native codes to operate (partially
                      JS) and why we try to stitch this page together through JS right? There are many animation
                      libraries for React Native. For performance, they are using RN animation with native driver option
                      or they have their own native solution. I tried some of them and results were not so different
                      therefore I didn't add them here. I just wanted to present an overview about this case
                      and another example of React Native apps. RN is great for most of the time and no reason of not to
                      use it. For particular cases, we need to push limits first, before we implement other simple
                      features of the app. I hope this article will help you at some point about decisions.
                    </div>
                  </Text>
                </Column>
              </ColumnWrapper>
              <ContactMain style={{ marginTop: '15rem' }} />
            </Inner>
          </Container>
        </div>
      </Menu>
    );
  }
}

export const query = graphql`
  query Bitcast {
    intro: file(relativePath: { eq: "bitcastfm/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopdesign: file(relativePath: { eq: "bitcastfm/desktopdesign.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trackplayer: file(relativePath: { eq: "bitcastfm/trackplayer.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    strategy1: file(relativePath: { eq: "bitcastfm/strategy1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    strategy2: file(relativePath: { eq: "bitcastfm/strategy2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
