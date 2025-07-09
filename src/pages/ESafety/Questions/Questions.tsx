import React from 'react';
// import { Empty } from '@/components';
import { questions } from './Questions.data';

import { ListCaption, ListItems } from '@/pages/ESafety/Common/List';
import {
    QuestionItem,
    QuestionHeader,
    ThemeName,
    QuestionText,
    // AnswerText,
    ReferenceText
} from './Questions.styles';

const QuestionsList: React.FC = () => {
    return (
        <>
            <ListCaption>Вопросы по электробезопасности</ListCaption>
            <ListItems>
                {questions.map((item, index) => (
                    <QuestionItem key={index}>
                        <QuestionHeader>
                            <ThemeName>{item.theme}</ThemeName>
                        </QuestionHeader>
                        <QuestionText>{item.question}</QuestionText>
                        {/* <AnswerText>{item.answer}</AnswerText> */}
                        <ReferenceText>{item.reference}</ReferenceText>
                    </QuestionItem>
                ))}
            </ListItems>
        </>
    );
};
export default QuestionsList;