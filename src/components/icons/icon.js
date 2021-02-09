import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconMedium,
  IconExternal,
  IconFork,
  IconGitHub,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconReact,
  IconStackOverflow,
  IconTwitter,
  IconWebPage,
  IconWindows,
  IconWindowsOutline,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'External':
      return <IconExternal />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Medium':
      return <IconMedium />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'React':
      return <IconReact />;
    case 'StackOverflow':
      return <IconStackOverflow />;
    case 'Twitter':
      return <IconTwitter />;
    case 'WebPage':
      return <IconWebPage />;
    case 'Windows':
      return <IconWindows />;
    case 'WindowsOutline':
      return <IconWindowsOutline />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
