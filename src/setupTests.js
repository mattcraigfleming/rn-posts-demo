import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAsyncStorage from 'mock-async-storage';
const mockImpl = new MockAsyncStorage();

jest.mock('@react-native-community/async-storage', () => mockImpl);

Enzyme.configure({adapter: new Adapter()});
