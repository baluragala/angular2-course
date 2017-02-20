"use strict";
var Course = (function () {
    function Course(id, title, code, category, price, description, rating, imageUrl, totalSubscribers, totalLikes) {
        this.id = id;
        this.title = title;
        this.code = code;
        this.category = category;
        this.price = price;
        this.description = description;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.totalSubscribers = totalSubscribers;
        this.totalLikes = totalLikes;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.js.map