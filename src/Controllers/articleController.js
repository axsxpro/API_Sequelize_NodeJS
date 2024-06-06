const Article = require('../Models/Article');
const articleInclusion = require('../Models/utils/articleInclusion');


// Récupérer tous les articles
async function getArticles(req, res) {
    try {
        const articles = await Article.findAll(articleInclusion.getArticleInclusion());
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Récupérer un article par son ID
async function getArticleById(req, res) {
    try {
        const article = await Article.findByPk(req.params.id, articleInclusion.getArticleInclusion());
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.json(article);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Créer un nouvel article
async function createArticle(req, res) {
    try {
        const newArticle = await Article.create(req.body);
        res.status(201).json(newArticle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Mettre à jour un article
async function updateArticle(req, res) {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        await article.update(req.body);
        res.json(article);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Supprimer un article
async function deleteArticle(req, res) {
    try {
        const article = await Article.findByPk(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        await article.destroy();
        res.json({ message: 'Article deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};
