

const resuest = require('supertest')
const expect = require('chai').expect
const app = require('../index')


//starts new page. ascync imitates
describe('About page', () =>{
    it('should return an HTML welcome message', async() =>{
        const res = await request(app)
            .gte('/home')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('message', 'About me')
    })
})