describe('all api tests' , ()=>{
// here i tell you the concept of the api_testing concept
it('GET 1',()=>{
    
    // method1
    cy.request('GET','https://reqres.in/api/users?page=2')
    .then((response)=>{
        expect(response).to.have.property('status',200);
        expect(response.status).to.equal(200);
        expect(response.body).not.to.be.null;
        expect(response.body).to.have.property('page',2);
        expect(response.body.data).to.have.length(6)
    })
})
// method2
it('GET 2',()=>{
    cy.request('GET','https://reqres.in/api/users?page=2').as('user_list')
    cy.get('@user_list').should((response)=>{
        expect(response).to.have.property('status',200);
        expect(response.status).to.equal(200);
        expect(response.body).not.to.be.null;
        expect(response.body).to.have.property('page',2);
        expect(response.body.data).to.have.length(6)
    })
})
// method3
it('GET3',()=>{
    cy.request({
        'method':'GET',
        'url':'https://reqres.in/api/users?page=2',
        headers:{
            'Content-Type':'application/json',
        },
        auth:{
            'username':"user1",
            'password':'pass1'
        }
    }).then((response)=>{
        expect(response).to.have.property('status',200);
        expect(response.status).to.equal(200);
        expect(response.body).not.to.be.null;
        expect(response.body).to.have.property('page',2);
        expect(response.body.data).to.have.length(6)
    })
})

// POST methods 

it('POST 1',()=>{
    cy.request({
        'method':'POST',
        'url':'https://reqres.in/api/users?page=2',
       body:{
        "name":"mSukritan gupta",
        "job":"coder"
       }
    }).then((response)=>{
        expect(response).to.have.property('status',201);
        expect(response.status).to.equal(201);
        expect(response.body).not.to.be.null;
        // expect(response.body).to.have.property('page',2);
    })
})

// method2 for the post request:

it('POST 2',()=>{
    const reqBody={
        "name":"sukritan gupta",
        "job":"leader"
    };
    cy.request('POST','https://reqres.in/api/users?page=2',reqBody)
    .then((response)=>{
        expect(response).to.have.property('status',201);
        expect(response.status).to.equal(201);
        expect(response.body).not.to.be.null;
        // expect(response.body).to.have.property('page',2);
    })
})

// PUT
   it('PUT',()=>{
       
   cy.request({
    'method':'PUT',
    'url':'https://reqres.in/api/users/2',
    body:{
        "name": "morpheus",
        "job": "zion resident"
    }
   })


   })

})