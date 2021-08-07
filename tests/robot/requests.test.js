import request from 'supertest';
import app from '../../app.mjs';
import Movable from '../../app/models/Movable.mjs';

test('Está acessando a página principal', () => {
   return request(app)
      .get("/")
      .expect(200);
});

test('RobotController Turn On com sucesso (DMDMIEEMMMMIEMEMI)', () => {
   const initialPosition = { x: 3, y: 2 };
   const initialOrientation = Movable.orientationLetters[Movable.orientations.FACING_NORTH];
   const flowerbeds = [
      {
         x: 4,
         y: 1
      },
      {
         x: 4,
         y: 5
      },
      {
         x: 3,
         y: 4
      },
   ];

   return request(app)
      .post("/turn-on-robot")
      .send({
         initialPosition: initialPosition,
         initialOrientation: initialOrientation,
         flowerbedsToIrrigate: flowerbeds
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
         expect(response.body.actions).toBe('DMDMIEEMMMMIEMEMI');
      });
});

test('RobotController Turn On com sucesso (MMEMMMIEMEMI)', () => {
   const initialPosition = { x: 2, y: 3 };
   const initialOrientation = Movable.orientationLetters[Movable.orientations.FACING_WEST];
   const flowerbeds = [
      {
         x: 0,
         y: 0
      },
      {
         x: 1,
         y: 1
      }
   ];

   return request(app)
      .post("/turn-on-robot")
      .send({
         initialPosition: initialPosition,
         initialOrientation: initialOrientation,
         flowerbedsToIrrigate: flowerbeds
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
         expect(response.body.actions).toBe('MMEMMMIEMEMI');
      });
});

test('RobotController Turn On com sucesso (MDMI)', () => {
   const initialPosition = { x: 1, y: 1 };
   const initialOrientation = Movable.orientationLetters[Movable.orientations.FACING_NORTH];
   const flowerbeds = [
      {
         x: 2,
         y: 2
      }
   ];

   return request(app)
      .post("/turn-on-robot")
      .send({
         initialPosition: initialPosition,
         initialOrientation: initialOrientation,
         flowerbedsToIrrigate: flowerbeds
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
         expect(response.body.actions).toBe('MDMI');
      });
});

test('RobotController Turn On com sucesso (IIEMIEMMEMMMIEMMEMMMI)', () => {
   const initialPosition = { x: 1, y: 1 };
   const initialOrientation = Movable.orientationLetters[Movable.orientations.FACING_WEST];
   const flowerbeds = [
      {
         x: 1,
         y: 1
      },
      {
         x: 1,
         y: 1
      },
      {
         x: 1,
         y: 0
      },
      {
         x: 3,
         y: 3
      },
      {
         x: 1,
         y: 0
      }
   ];

   return request(app)
      .post("/turn-on-robot")
      .send({
         initialPosition: initialPosition,
         initialOrientation: initialOrientation,
         flowerbedsToIrrigate: flowerbeds
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
         expect(response.body.actions).toBe('IIEMIEMMEMMMIEMMEMMMI');
      });
});
