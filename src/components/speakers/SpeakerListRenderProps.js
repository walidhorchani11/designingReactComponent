import React from 'react';

import SpeakerItem from '../speaker/SpeakerItem';

const SpeakerListRenderProps = (props) => {
  const data = ['walid', 'Aya', 'Mohamed'];
  return props.children({ data: data });
};

export default SpeakerListRenderProps;
