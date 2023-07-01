/* eslint-env jest */
import moxios from 'moxios'
import { equal } from 'assert'

const gateway = require("./server")

describe('API Gateway Tests', function () {

    describe('Users Microservice', function () {

        /*beforeEach(function () {
            moxios.install()
            // Setup si hiciera falta
            // import and pass your custom axios instance to this method
        })

        afterEach(function () {
            moxios.uninstall()
            // Cleanup si hiciera falta
            // import and pass your custom axios instance to this method
        })*/


        it('specify response for a specific request', function (done) {
            let input = document.querySelector('.UserList__Filter__Input')
            let button = document.querySelector('.UserList__Filter__Button')

            input.value = 'flintstone'
            button.click()

            // Elsewhere in your code axios.get('/users/search', { params: { q: 'flintstone' } }) is called

            moxios.wait(function () {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: [
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
                        { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
                    ]
                })
                    .then(function () {
                        let list = document.querySelector('.UserList__Data')
                        equal(list.rows.length, 2)
                        equal(list.rows[0].cells[0].innerHTML, 'Fred')
                        equal(list.rows[1].cells[0].innerHTML, 'Wilma')
                        done()
                    })
            })
        })
    })
})