beforeAll(() => {
  window.startQuiz = jest.fn();
  window.selectOption = jest.fn();
  window.resetQuiz = jest.fn();
});

describe("Global Window Methods", () => {
  test("startQuiz should be defined", () => {
    expect(window.startQuiz).toBeDefined();
  });

  test("selectOption should be defined", () => {
    expect(window.selectOption).toBeDefined();
  });

  test("resetQuiz should be defined", () => {
    expect(window.resetQuiz).toBeDefined();
  });

  test("startQuiz should be callable", () => {
    window.startQuiz();
    expect(window.startQuiz).toHaveBeenCalled();
  });

  test("selectOption should be callable with an argument", () => {
    const option = "playful";
    window.selectOption(option);
    expect(window.selectOption).toHaveBeenCalledWith(option);
  });

  test("resetQuiz should be callable", () => {
    window.resetQuiz();
    expect(window.resetQuiz).toHaveBeenCalled();
  });
});
