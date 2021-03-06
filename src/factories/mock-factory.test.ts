import { MockFactory } from './mock-factory';

const processMock = jest.fn();

jest.mock('../class-processor', () => ({
  ClassProcessor: jest.fn().mockImplementation(() => {
    return { process: processMock };
  }),
}));

describe('Mock Factory - Unit', () => {
  describe('given a Mock Factory', () => {
    afterEach(() => {
      processMock.mockClear();
    });

    class TestClass {}

    describe("when calling 'create' method without options", () => {
      test('then call process exactly once', () => {
        MockFactory.create(TestClass);

        expect(processMock).toHaveBeenCalledTimes(1);
        expect(processMock).toHaveBeenCalledWith(TestClass);
      });
    });

    describe("when calling 'create' method with count = 3", () => {
      const count = 3;

      test('then call process 3 times ', () => {
        MockFactory.create(TestClass, { count });

        expect(processMock).toHaveBeenCalledTimes(count);
      });
    });
  });
});
