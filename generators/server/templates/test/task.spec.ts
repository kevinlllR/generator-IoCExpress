import * as db from 'mongoose';
import * as supertest from 'supertest';

import app from './../server';
import { taskMocks } from '../src/mocks';
import { Task } from '../src/models/task.model';
const request = supertest(app);


beforeAll(async (done) => {
  done();
});
afterAll(async (done) => {
  await Task.remove({});
  db.connection.close()
  done()
});


describe('POST /api/tasks', () => {
  beforeEach(async (done) => {
    await Task.remove({});
    done();
  });
  test('should return Task', async (done) => {

      const res = await request
        .post('/api/tasks')
        .send(taskMocks.new)

      expect(res.status).toBe(200);
      done()

  });
});
describe('GET v1/core/abilities', () => {
  test('should return abilities', async (done) => {
     const res=await request
      .get('/api/tasks')
      expect(res.status).toBe(200);
      done();
  });
});
describe('PUT /api/tasks/:_task', () => {
  beforeEach(async (done) => {
    
   await Task.remove({})
   await Task.create(taskMocks.default)
    done()
  });
  test('should return Task', async(done) => {
    const res=await request
      .put(`/api/tasks/${taskMocks.default._id}`)
      .send(taskMocks.update)
      expect(res.status).toBe(200);
      done();

  });
});

describe('DELETE v1/core/abilities/:_task', () => {
  beforeEach(async( done) => {
    await Task.remove({})
    await Task.create(taskMocks.default)
     done()
  });
  test('should return Task',async (done) => {
    const res=await request
      .delete(`/api/tasks/${taskMocks.default._id}`)
      expect(res.status).toBe(204);
      done()
  });
 });