// Import pwManager 
var Password = require('./dbManager').Password;

// Handle index actions
exports.index = function (req, res) {
    Password.find({}, function (err, book) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Book retrieved successfully",
            data: book
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    if (!req.body.name || !req.body.id || !req.body.pw) {
        res.send("name, id, pw are required.");
        return;
    }
    Password.findOne({"name": req.body.name}, function (err, site) {
        if (site) {
            res.send("Site name already exist. Use another name for this site."); 
        } else {
            site = new Password();
            site.name = req.body.name;
            site.id = req.body.id;
            site.pw = req.body.pw;
            // save and check for errors
            site.save(function (err) {
                if (err)
                    res.json(err);
            res.status(200).json({
                    message: 'New site created!',
                    data: site
                });
            });
        }
    }); 
};

// Handle view contact info
exports.view = function (req, res) {
    Password.find({"name": req.params.site},  function (err, site) {
        if (err)
            res.send(err);
        if (site.length) {
            res.status(200).json({
                message: 'Site details found...',
                data: site
            });
        } else {
            res.status(404).json({
                message: 'Site details not found...',
                data: site
            });
        }
    });
};
// Handle update contact info
exports.update = function (req, res) {
    if (!req.body.name || !req.body.id || !req.body.pw) {
        res.send("name, id, pw are required.");
        return;
    }
    Password.findOne({"name": req.params.site}, function (err, site) {
        if (err)
            res.send(err);
        
        if (!site) {
            res.status(404).send("No result found."); 
        } else {
            site.name = req.body.name;
            site.id = req.body.id;
            site.pw = req.body.pw;
    // save and check for errors
            site.save(function (err) {
            if (err)
                res.json(err);
            res.status(200).json({
                message: site.name + ' Info updated',
                data: site
                });
            });
        }

    });
};

// Handle delete site
exports.delete = function (req, res) {
    Password.deleteOne({
        "name": req.params.site
    }, function (err, site) {
        if (err)
            res.send(err);
res.status(200).json({
            status: "success",
            message: site.deletedCount + ' Site deleted',
            data: site
        });
    });
};
