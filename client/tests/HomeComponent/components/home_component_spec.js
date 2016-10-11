import React from "react";
import { shallow, mount, render } from 'enzyme';
import HomeComponent from 'HomeComponent/components/HomeComponent';

describe("HomeComponent", () => {
  let subjectComponent, renderSubject;

  beforeEach(() => {
    renderSubject = () => {
      return mount(<HomeComponent />);
    };

    subjectComponent = renderSubject();
  });

  it('renders header', () => {
    let header = subjectComponent.find('h3').nodes[0].innerHTML;
    expect(header).toEqual('Kreator postaci Ragnarok');
  });
});
