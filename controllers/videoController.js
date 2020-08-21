export const home = (req,res) => res.render("home",{pageTitle : "Home", potato:1245});
export const search = (req,res) => {
    const {
        query : {term : searchingBy}
    } = req;
    res.render("search", {pageTitle : "Search", searchingBy});
}

export const videos = (req,res) => res.render("videos", {pageTitle : "videos"});
export const upload = (req,res) => res.render("upload", {pageTitle : "upload"});
export const videoDetail = (req,res) => res.render("detailVideo", {pageTitle : "Detail Video"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle : "Edit Video"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle : "Delete Video"});