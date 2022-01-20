import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate'

export default function ReduxModal(props) {
  return (
      <ProjectTemplate  {...props}>
              
              <iframe
                style={{ width: '100%', marginTop: '2rem' }}
                height="400"
                scrolling="no"
                title="React Redux modals with portals(3/3)"
                src="//codepen.io/hurkan/embed/vWMGQJ/?height=265&theme-id=0&default-tab=result"
                frameBorder="no"
                allowtransparency="true"
                allowFullScreen
              >
                See the Pen <a href="https://codepen.io/hurkan/pen/vWMGQJ/">React Redux modals with portals(3/3)</a> by
                Hürkan Yakay (<a href="https://codepen.io/hurkan">@hurkan</a>) on{' '}
                <a href="https://codepen.io">CodePen</a>.
              </iframe>
             
              </ProjectTemplate>
    );
}
