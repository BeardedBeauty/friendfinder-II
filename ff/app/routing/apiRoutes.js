var f = require("../data/friends.js");
 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(req)
        req.params.friend
        // console.log(friends)
        return res.json(f);
    });

    app.get("/api/friends/:friend", function (req, res) {
        var o = parseInt(req.params.friend);
        for (var p = 0; p < f.length; p++) {
            if (o === f[p].match) {
                console.log(f[p])
                return res.json(f[p])
            }
            if (p === f.length - 1) {
                var s = o - 1;
                console.log(s)
                for (var d = 0; d < f.length; d++) {
                    if (s === f[d].match) {
                        return res.json(f[d])
                    }
                }
            }
        }
    });

    // Displays a single character, or returns false
    app.post("/api/friends", function (req, res) {
        var q = req.body;
        console.log("----Hit the POST route breh")
        console.log(q);
        res.send(q);
    });
}