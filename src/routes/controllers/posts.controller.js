const getAllPosts = (req, res) => {
    const posts = [
        { id: 1, title: "controller Post 1"},
        { id: 2, title: "controller Post 2"},
    ];
    res.status(200).json({
        message:'Posts fetched successfully',
        data:posts
    });
};

module.exports = {
    getAllPosts,
};