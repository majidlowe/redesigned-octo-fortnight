import nock from 'nock';
import { httpClient } from '../HttpClient';

describe('HttpClient', () => {
    it('Http Client applies the correct accept header to requests', async () => {
        nock('http://localhost').get('/').reply(200);
        const client = httpClient;
        client.interceptors.request.use((request) => {
            expect(request.headers.Accept).toEqual('application/json');
            return request;
        });

        await client.get('/');
        expect.assertions(1);
    });
});
