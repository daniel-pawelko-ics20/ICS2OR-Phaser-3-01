/* global Phaser */

// Copyright (c) 2021 Daniel Pawelko All rights reserved
// 
// Created by: Daniel Pawelko
// Created on: May 2021
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default GameScene