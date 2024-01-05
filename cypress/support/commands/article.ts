import { Article } from "../../../src/entities/Article/model/types/article";

const defaultArticle = {
    title: "Нова допомога від США ",
    subtitle: "Chat GPT та Bard",
    // eslint-disable-next-line max-len
    img: "https://static01.nyt.com/images/2023/02/23/multimedia/23dc-intel-01-jvwt/23dc-intel-01-jvwt-videoSixteenByNine3000.jpg",
    views: 234,
    createdAt: "2.12.2023",
    userId: "1",
    type: ["ECONOMICS"],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: "POST",
            url: "http://localhost:8000/articles",
            headers: { Authorization: "asasf" },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: "DELETE",
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: "asasf" },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
