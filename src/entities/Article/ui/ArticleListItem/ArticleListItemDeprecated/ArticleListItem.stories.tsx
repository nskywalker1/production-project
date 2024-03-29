import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleView } from "../../../model/consts/consts";
import { Article } from "../../../model/types/article";
import { ArticleListItem } from "../ArticleListItem";

const article = {
    id: "1",
    title: "Javascript guideJavascript guideJavascript guideJavascript guide",
    subtitle: "Повний гайд по мові програмування JavaScript",
    img: "https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png",
    views: 1022,
    user: {
        id: "1",
        username: "admin",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOvAyOK_nlWbb8PpsKvfceKSIuM-QRgJge26rWGTIotKkFBoTwyvmxVp6YJ5OT5Q5q6g&usqp=CAU",
    },
    createdAt: "26.11.2023",
    type: ["IT", "SCIENSE", "POLITICS"],
    blocks: [
        {
            id: "1",
            type: "TEXT",
            title: "Перша программа на JavaScript",
            paragraphs: [
                "Створимо першу програму на javascript. Для написання і тестування програм на JavaScript нам знадобляться дві речі: текстовий редактор і веб-браузер.",
                "Як текстовий редактор можна взяти будь-який, який подобається - Atom, Sublime Text, Visual Studio Code, Notepad++ та інші. У цьому посібнику я орієнтуватимуся на безкоштовний і багатофункціональний текстовий редактор Visual Studio Code, оскільки він є найбільш популярним.",
                "Як браузер також можна взяти останні версії будь-якого кращого веб-браузера. У цьому посібнику я буду переважно орієнтуватися на Google Chrome.",
                "Для початку визначимо для нашого додатка який-небудь каталог. Наприклад, створимо на диску C папку app. У цій папці створимо файл під назвою index.html. Тобто цей файл представлятиме веб-сторінку з кодом HTML.",
            ],
        },
        {
            id: "4",
            type: "CODE",
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8" />\n    <title>METANIT.COM</title>\n</head>\n<body>\n    <script>\n        document.write("<h2>Первая программа на JavaScript</h2>");\n    </script>\n</body>\n</html>',
        },
        {
            id: "5",
            type: "TEXT",
            title: "Заголовок блоку",
            paragraphs: [
                "Коли браузер отримує веб-сторінку з кодом html і javascript, то він її інтерпретує. Результат інтерпретації у вигляді різних елементів - кнопок, полів введення, текстових блоків тощо, ми бачимо перед собою в браузері. Інтерпретація веб-сторінки відбувається послідовно зверху вниз.",
                "Коли браузер зустрічає на веб-сторінці елемент <script> з кодом javascript, то вступає в дію вбудований інтерпретатор javascript. І поки він не закінчить свою роботу, далі інтерпретація веб-сторінки не йде.",
            ],
        },
        {
            id: "2",
            type: "IMAGE",
            src: "https://images.theengineeringprojects.com/image/main/2019/12/Where-To-Add-Your-JavaScript-File-1-1.png",
            title: "Приклад коду 1",
        },
        {
            id: "3",
            type: "CODE",
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8" />\n    <title>METANIT.COM</title>\n    <script>\n        document.write("Начальный текст");\n    </script>\n</head>\n<body>\n    <h2>Первый заголовок</h2>\n    <script>\n        document.write("Первый текст");\n    </script>\n    <h2>Второй заголовок</h2>\n    <script>\n        document.write("Второй текст");\n    </script>\n</body>\n</html>',
        },
        {
            id: "7",
            type: "TEXT",
            title: "Заголовок блоку 2",
            paragraphs: [
                "Коли браузер отримує веб-сторінку з кодом html і javascript, то він її інтерпретує. Результат інтерпретації у вигляді різних елементів - кнопок, полів введення, текстових блоків тощо, ми бачимо перед собою в браузері. Інтерпретація веб-сторінки відбувається послідовно зверху вниз.",
                "Коли браузер зустрічає на веб-сторінці елемент <script> з кодом javascript, то вступає в дію вбудований інтерпретатор javascript. І поки він не закінчить свою роботу, далі інтерпретація веб-сторінки не йде.",
            ],
        },
        {
            id: "9",
            type: "IMAGE",
            src: "https://images.theengineeringprojects.com/image/main/2019/12/Where-To-Add-Your-JavaScript-File-1-1.png",
            title: "Приклад коду 2",
        },
    ],
} as Article;
export default {
    title: "entities/ArticleListItem",
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const NormalSmall = Template.bind({});
NormalSmall.args = {
    article,
    view: ArticleView.SMALL,
};

export const NormalBig = Template.bind({});
NormalBig.args = {
    article,
    view: ArticleView.BIG,
};
