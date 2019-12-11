NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {},
};

NativeModules.PlatformConstants = {
  forceTouchAvailable: false,
};

NativeModules.UIManager = {
  RCTView: () => ({
    directEventTypes: {},
  }),
};
