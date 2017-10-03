// Docs: https://reactjs.org/docs/test-utils.html
// https://reactjs.org/docs/test-renderer.html
// Analyze setup correctly, buildSetup.js is making this magic and easy testing

import Main from "../Main"

describe("<Main />", () => {
  const defaultProps = {
    testTextPropTypes: "Default text for testing"
  }

  const setup = buildSetup(Main, defaultProps)

  test("render", () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot()
    // For now React 16 can return array of children from return, not a single jsx statement. That's why array is expected
    expect(wrapper.root.findByProps({ className: "test-class" }).children).toEqual(["Default text for testing"])
  })

  describe("add", () => {
    test("should add 2 numbers", () => {
      const { wrapper } = setup();
      const wrapperInstance = wrapper.getInstance()

      expect(wrapperInstance.add(1, 2)).toEqual(3)
    })
  })
})
