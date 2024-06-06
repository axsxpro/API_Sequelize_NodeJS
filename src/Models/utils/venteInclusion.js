const Article = require('../Article');
const { getArticleInclusion } = require('./articleInclusion');

function getVenteInclusion() {
    return {
        include: [
            { 
                model: Article, // inclure le model Article
                ...getArticleInclusion() // Inclure toutes les inclusions et exclusion de Article
            }
        ] 
    };
}

module.exports = {
    getVenteInclusion
};
