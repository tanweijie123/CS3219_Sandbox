//Ref: https://medium.com/@asciidev/testing-a-node-express-application-with-mocha-chai-9592d41c0083
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index2';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Book", () => {
    describe("GET /api/book", () => {
        // Test to get all records
        it("should get all book record", (done) => {
             chai.request(app)
                 .get('/api/book')
                 .end((err, res) => {
                    if (err) {
                        done(error); 
                    } else {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    }
                  });
         });
    });

    describe ("POST /api/book", () => {
        //add new password record
        it("add new password record", (done) => {
            chai.request(app)
                .post('/api/book')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    'name': 'qwertyuiop.com', 
                    'id': 'e0415826@u.nus.edu.tester',
                    'pw': 'Secret1234'
                })
                .end((err, res) => {
                    if (err) {
                        done(error); 
                    } else {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    }
                });
        });
    });

    describe ("GET /api/book", () => {
        // Test to get that added record
        it("get that added record", (done) => {
            const id = 1;
            chai.request(app)
                .get(`/api/book/qwertyuiop.com`)
                .end((err, res) => {
                    if (err) {
                        done(error); 
                    } else {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    }
                 });
        });
    });

    describe ("PUT /api/book", () => {
        // Test to update that record
        it("update that added record", (done) => {
            chai.request(app)
                .put(`/api/book/qwertyuiop.com`)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    name: 'qwertyuiop.com', 
                    id: 'NEWe0415826@u.nus.edu.tester',
                    pw: 'NEWSecret1234'
                })
                .end((err, res) => {
                    if (err) {
                        done(error); 
                    } else {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    }
                 });
        });
    });

    describe ("DELETE /api/book", () => {
        // Delete that added record
        it("delete that added record", (done) => {
            chai.request(app)
                .delete(`/api/book/qwertyuiop.com`)
                .end((err, res) => {
                    if (err) {
                        done(error); 
                    } else {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    }
                 });
        });
    });

    describe ("GET /api/book", () => {
        // check that it is deleted
        it("get that added record", (done) => {
            chai.request(app)
                .get(`/api/book/qwertyuiop.com`)
                .end((err, res) => {
                    if (err) {
                        done(error); 
                    } else {
                        res.should.have.status(404);
                        done();
                    }
                 });
        });
    });

});
