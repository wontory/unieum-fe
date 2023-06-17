import "survey-core/modern.min.css";
import { Model, Question } from "survey-core";
import { Survey } from "survey-react-ui";

export const useQuiz = ({ json }) => {
  const survey = new Model(json);
  survey.maxTimeToFinish = 0;
  survey.maxTimeToFinishPage = 0;
  survey.enableif = false;
  const correctStr = "정답!";
  const incorrectStr = "오답!";

  // Builds an HTML string to display in a question title
  const getTextHtml = (text, str, isCorrect) => {
    return text.indexOf(str) < 0
      ? undefined
      : `${text.substring(0, text.indexOf(str))}<span class='${
          isCorrect ? "correctAnswer" : "incorrectAnswer"
        }'>${str}</span>`;
  };

  // Compares the correct answer with a given answer and returns `true` if they are equal
  const isAnswerCorrect = (q) => {
    const correctAnswer = q.correctAnswer;

    if (!correctAnswer || q.isEmpty()) return undefined;

    let givenAnswer = q.value;
    if (!Array.isArray(correctAnswer)) return correctAnswer == givenAnswer;

    if (!Array.isArray(givenAnswer)) givenAnswer = [givenAnswer];

    for (let i = 0; i < givenAnswer.length; i++) {
      if (correctAnswer.indexOf(givenAnswer[i]) < 0) return false;
    }
    return true;
  };

  // Adds "Correct" or "Incorrect" to a question title
  const changeTitle = (q) => {
    if (!q) return;

    if (!q.prevTitle) {
      q.prevTitle = q.title;
    }

    // Get the correct answer
    const correctAnswer = q.correctAnswer;

    // Set the question title to the correct answer
    q.title = q.prevTitle + "     ......      " + (correctAnswer || "");
  };

  survey.onValueChanged.add((_, options) => {
    // Change the quesion title when the question value is changed
    changeTitle(options.question);
  });

  survey.onTextMarkdown.add((_, options) => {
    const text = options.text;
    let html = getTextHtml(text, correctStr, true);
    if (!html) {
      html = getTextHtml(text, incorrectStr, false);
    }
    if (!!html) {
      // Set an HTML string with the "Correct" or "Incorrect" suffix for display
      options.html = html;
    }
  });

  return { Quiz: () => <Survey model={survey} id="surveyElement" /> };
};
