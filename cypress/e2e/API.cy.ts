import {routesEndpoint} from '../utils/routes'
import {httpMethod} from '../utils/httpMethod'

describe('API test', async() => {
  it('it should be able to sent a GET REQUEST', () => {
    const id = 1;
    cy.request(routesEndpoint.getRoute(id)).then((res)=>{
      expect(res.status).equal(200)
      expect(res.body.id).equal(id)
    });
  });

  it('it should be able to sent a POST REQUEST', () => {
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    cy.request(httpMethod.post, routesEndpoint.postRoute, body).then((res)=>{
      expect(res.status).equal(201)
      expect(res.body).contain(body)
    });
  });

  it('it should be able to sent a PUT REQUEST', () => {
    const body = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const options = {
      url: routesEndpoint.putRoute(1),
      method: httpMethod.put,
      body: body,
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }
    cy.request(options).then((res)=>{
      expect(res.status).equal(200)
      expect(res.body).contain(body)
    });
  });

  it('it should be able to sent a DELETE REQUEST', () => {

    cy.request(httpMethod.delete, routesEndpoint.deleteRoute(1)).then((res)=>{
      expect(res.status).equal(200)
    });
  });
})