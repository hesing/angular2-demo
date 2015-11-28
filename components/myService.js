var myService = (function () {
    function myService() {
        this.skills = ['angular 2', 'react js', 'gulp', 'webpack', 'node js'];
    }
    myService.prototype.addSkill = function (value) {
        this.skills.push(value);
    };
    return myService;
})();
exports.myService = myService;
//# sourceMappingURL=myService.js.map