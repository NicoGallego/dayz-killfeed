import {parseLogLine} from './parser'

const lines = [
    '15:59:11 | Player "Fuzzy__Maverick" (DEAD) (id=kDV69sHRbfMlMtdg4lnMOXRZgrCvEeuioEiHXoSKWgE= pos=<3091.7, 7039.3, 251.0>) killed by Player "resorsixtwo" (id=Bw4y1gNIP5eC8MJDkYEsejoegeCFwS0Gi3roIRGClUI= pos=<3089.7, 7044.8, 250.1>) with M4-A1 from 5.89213 meters',
    '14:03:55 | Player "Evaprim" (DEAD) (id=7itIPbuS7iOfUDIjQBYeuVhXV2Q41T47WWY9f00k3go= pos=<1974.7, 7013.6, 220.6>) committed suicide',
    '14:02:55 | Player "Fosse-Septique-" (id=kf-B-AsilNXW8aLWmuAoYP4ib_ghxhMqbAJpomr8vXQ= pos=<592.7, 1133.9, 611.7>) is connected',
    '14:03:37 | Player "Rim_my_hole69" (id=--unhRlCLQnrBJyUIKEMvE918-XyJoBLhGWTgAnpH6Q= pos=<11518.3, 7080.0, 252.7>) has been disconnected',
    '15:59:12 | Player "Dankchews420" (id=2yG4QbWmHmQ-X2xZHO2nWfIOfBI5X6MMK3XArXkhJz0= pos=<3089.7, 7037.1, 250.1>)[HP: 45.6757] hit by Player "resorsixtwo" (id=Bw4y1gNIP5eC8MJDkYEsejoegeCFwS0Gi3roIRGClUI= pos=<3089.1, 7045.2, 250.1>) into RightLeg(5) for 114.857 damage (Bullet_556x45) with M4-A1 from 8.06068 meters',
    '18:14:17 | Player "GALLAGAN1000" (DEAD) (id=OcMrv2NbAYvVjh_i_QrVJK3japF-wKxjVAJT3Kue5nM= pos=<6468.5, 11043.2, 174.8>) killed by ZmbM_SoldierNormal',
    '18:04:32 | Player "GALLAGAN1000" (DEAD) (id=OcMrv2NbAYvVjh_i_QrVJK3japF-wKxjVAJT3Kue5nM= pos=<8951.5, 6598.3, 307.6>) bled out',
    '17:50:35 | Player "GALLAGAN1000" (DEAD) (id=OcMrv2NbAYvVjh_i_QrVJK3japF-wKxjVAJT3Kue5nM= pos=<11535.9, 409.8, 212.5>) died. Stats> Water: 564.508 Energy: 553.476 Bleed sources: 2',
    '17:47:53 | Player "GALLAGAN1000" (DEAD) (id=OcMrv2NbAYvVjh_i_QrVJK3japF-wKxjVAJT3Kue5nM= pos=<2548, 5466.6, 411.5>) killed by EGD-5 Frag Grenade',
    '14:07:42 | ##### PlayerList log: 14 players',
]

for (const line of lines) {
    const result = parseLogLine(line)
    console.log('---')
    console.log('INPUT :', line.substring(0, 60) + '...')
    console.log('OUTPUT:', result ? JSON.stringify(result, null, 2) : 'null (ligne ignorée)')
}