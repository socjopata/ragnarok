import React from "react";
import TestRenderer from "react-test-renderer";
import sinon from "sinon";

// Handles polyfill warning on testing
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.window = {};
global.sinon = sinon;

global.buildSetup = (TestComponent, defaultProps, shallowOptions) => (overrideProps) => {
  const props = {
    ...defaultProps,
    ...overrideProps,
  };

  const wrapper = TestRenderer.create(<TestComponent {...props} />, shallowOptions);

  return {
    props,
    wrapper,
  };
};

global.serverSetup = config => sinon.fakeServer.create({
  respondImmediately: true,
  ...config,
});
