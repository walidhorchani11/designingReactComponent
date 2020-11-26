import React from 'react';
import LazyLoad from 'react-lazyload';

export default function SpeakerImg({ source }) {
  return (
    <LazyLoad height={200}>
      <img src={source} width="250" height="200" />
    </LazyLoad>
  );
}
