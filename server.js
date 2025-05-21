const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const Kalman = require('./filters/kalman');
//const MovingAvg = require('./filters/movingAvg');
//const OneEuro = require('./filters/oneEuro');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

/* */
const path = [
  {
    lat: 22.509779,
    lng: 120.408783
  },
  {
    lat: 22.509876,
    lng: 120.408768
  },
  {
    lat: 22.509853,
    lng: 120.408775
  },
  {
    lat: 22.509726,
    lng: 120.408813
  },
  {
    lat: 22.509693,
    lng: 120.408852
  },
  {
    lat: 22.509661,
    lng: 120.408844
  },
  {
    lat: 22.509613,
    lng: 120.408882
  },
  {
    lat: 22.50956,
    lng: 120.40892
  },
  {
    lat: 22.509474,
    lng: 120.408936
  },
  {
    lat: 22.509474,
    lng: 120.408943
  },
  {
    lat: 22.509457,
    lng: 120.408943
  },
  {
    lat: 22.509447,
    lng: 120.408951
  },
  {
    lat: 22.509441,
    lng: 120.408951
  },
  {
    lat: 22.509409,
    lng: 120.408928
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.40892
  },
  {
    lat: 22.509403,
    lng: 120.408928
  },
  {
    lat: 22.509403,
    lng: 120.408928
  },
  {
    lat: 22.509403,
    lng: 120.408928
  },
  {
    lat: 22.509403,
    lng: 120.408928
  },
  {
    lat: 22.50942,
    lng: 120.408928
  },
  {
    lat: 22.509424,
    lng: 120.408951
  },
  {
    lat: 22.509432,
    lng: 120.408958
  },
  {
    lat: 22.509453,
    lng: 120.408966
  },
  {
    lat: 22.509468,
    lng: 120.409004
  },
  {
    lat: 22.509489,
    lng: 120.408882
  },
  {
    lat: 22.509699,
    lng: 120.408791
  },
  {
    lat: 22.50972,
    lng: 120.408829
  },
  {
    lat: 22.509619,
    lng: 120.40889
  },
  {
    lat: 22.509598,
    lng: 120.40892
  },
  {
    lat: 22.509521,
    lng: 120.408989
  },
  {
    lat: 22.509516,
    lng: 120.409065
  },
  {
    lat: 22.509539,
    lng: 120.409454
  },
  {
    lat: 22.509684,
    lng: 120.409874
  },
  {
    lat: 22.509415,
    lng: 120.410126
  },
  {
    lat: 22.508926,
    lng: 120.410217
  },
  {
    lat: 22.508631,
    lng: 120.410271
  },
  {
    lat: 22.508696,
    lng: 120.410316
  },
  {
    lat: 22.508713,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508728,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508965,
    lng: 120.4105
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410286
  },
  {
    lat: 22.508734,
    lng: 120.410294
  },
  {
    lat: 22.508734,
    lng: 120.410294
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508743,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508749,
    lng: 120.410309
  },
  {
    lat: 22.508755,
    lng: 120.410332
  },
  {
    lat: 22.50876,
    lng: 120.410347
  },
  {
    lat: 22.50876,
    lng: 120.410347
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  },
  {
    lat: 22.50876,
    lng: 120.410355
  }
];

let step = 0;

/* */

const kalmanLat = new Kalman(), kalmanLng = new Kalman();
//const movingLat = new MovingAvg(5), movingLng = new MovingAvg(5);
//const oneEuroLat = new OneEuro(), oneEuroLng = new OneEuro();

//let lat = 25.033, lng = 121.565;

function simulateGPS() {
  if (step >= path.length) {
    return null; // 所有點都已模擬完畢
  }
  const point = path[step];
  step++;
  return point;
}

setInterval(() => {
  const raw = simulateGPS();
  if (!raw) return; // 所有點已播送完，停止後續處理
  const kalman = { lat: kalmanLat.filter(raw.lat), lng: kalmanLng.filter(raw.lng) };
  //const moving = { lat: movingLat.filter(raw.lat), lng: movingLng.filter(raw.lng) };
  //const oneEuro = { lat: oneEuroLat.filter(raw.lat), lng: oneEuroLng.filter(raw.lng) };
  const data = { raw, kalman };//const data = { raw, kalman, moving, oneEuro };

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}, 1000);

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
